import 'dart:convert';

import 'package:shared_preferences/shared_preferences.dart';

/// Speichert pro Frage das letzte Antwortdatum und Ergebnis.
/// Nach richtiger Antwort: Frage erst nach mindestens 1 Kalendermonat wieder.
/// Nach falscher Antwort: Frage erst nach 7 Tagen wieder.
/// Innerhalb des Abschnitts werden Fragen weiter per Zufall gewählt.
class QuestionHistoryService {
  static const String _outcomesKey = 'question_last_outcomes_v1';
  static const String _factRotationKey = 'question_fact_rotation_v1';

  /// Legacy-Schlüssel der alten Tageshistorie — werden beim ersten Zugriff entfernt.
  static const String _legacyAnsweredTodayKey = 'answered_questions_today';
  static const String _legacyWrongAnswersKey = 'wrong_answers';
  static const String _legacyLastDateKey = 'last_date';

  static Future<void> _migrateLegacyOnce(SharedPreferences prefs) async {
    if (prefs.getBool('question_history_legacy_cleared_v1') ?? false) return;
    await prefs.remove(_legacyAnsweredTodayKey);
    await prefs.remove(_legacyWrongAnswersKey);
    await prefs.remove(_legacyLastDateKey);
    await prefs.setBool('question_history_legacy_cleared_v1', true);
  }

  static Future<void> _ensureMigrated() async {
    final prefs = await SharedPreferences.getInstance();
    final done = prefs.getBool('question_history_legacy_cleared_v1') ?? false;
    if (done) return;
    await _migrateLegacyOnce(prefs);
  }

  static Map<String, dynamic> _loadOutcomes(SharedPreferences prefs) {
    final raw = prefs.getString(_outcomesKey);
    if (raw == null || raw.isEmpty) return {};
    try {
      return Map<String, dynamic>.from(
        jsonDecode(raw) as Map<dynamic, dynamic>,
      );
    } catch (_) {
      return {};
    }
  }

  static Future<void> _saveOutcomes(
    SharedPreferences prefs,
    Map<String, dynamic> outcomes,
  ) async {
    await prefs.setString(_outcomesKey, jsonEncode(outcomes));
  }

  /// Kalendermonate addieren (Tag wird bei kurzen Monaten begrenzt, z.B. 31.01.+1 Monat → 28./29.02.).
  static DateTime _addCalendarMonths(DateTime d, int monthsToAdd) {
    var totalMonth = d.month + monthsToAdd;
    var year = d.year;
    while (totalMonth > 12) {
      totalMonth -= 12;
      year += 1;
    }
    while (totalMonth < 1) {
      totalMonth += 12;
      year -= 1;
    }
    final lastDay = DateTime(year, totalMonth + 1, 0).day;
    final day = d.day > lastDay ? lastDay : d.day;
    return DateTime(
      year,
      totalMonth,
      day,
      d.hour,
      d.minute,
      d.second,
      d.millisecond,
      d.microsecond,
    );
  }

  static const int _monthsCooldownAfterCorrect = 1;

  static Map<String, dynamic> _loadFactCounters(SharedPreferences prefs) {
    final raw = prefs.getString(_factRotationKey);
    if (raw == null || raw.isEmpty) return {};
    try {
      return Map<String, dynamic>.from(
        jsonDecode(raw) as Map<dynamic, dynamic>,
      );
    } catch (_) {
      return {};
    }
  }

  static Future<void> _saveFactCounters(
    SharedPreferences prefs,
    Map<String, dynamic> counters,
  ) async {
    await prefs.setString(_factRotationKey, jsonEncode(counters));
  }

  /// Nächsten Fakt-Slot für diese Frage: zeigt nacheinander Fakt 0, 1, 2, … und beginnt von vorn.
  static Future<int> takeNextFactDisplayIndex(
    int questionId,
    int factCount,
  ) async {
    if (factCount <= 0) return 0;
    await _ensureMigrated();
    final prefs = await SharedPreferences.getInstance();
    final m = _loadFactCounters(prefs);
    final key = questionId.toString();
    final raw = m[key];
    var counter = 0;
    if (raw is int) {
      counter = raw;
    } else if (raw is num) {
      counter = raw.toInt();
    }
    final displayIndex = counter % factCount;
    m[key] = counter + 1;
    await _saveFactCounters(prefs, m);
    return displayIndex;
  }

  /// Ob die Frage wieder gezeigt werden darf (letztes Ergebnis entscheidet).
  static Future<bool> canShowQuestion(int questionId) async {
    await _ensureMigrated();
    final prefs = await SharedPreferences.getInstance();
    final outcomes = _loadOutcomes(prefs);
    final key = questionId.toString();
    if (!outcomes.containsKey(key)) return true;

    final raw = outcomes[key];
    if (raw is! Map) return true;

    final wasCorrect = raw['c'] == true || raw['c'] == 'true';
    final atMillisRaw = raw['t'];
    if (atMillisRaw == null) return true;
    final atMillis =
        atMillisRaw is int ? atMillisRaw : (atMillisRaw as num).toInt();

    final answeredAt = DateTime.fromMillisecondsSinceEpoch(
      atMillis,
      isUtc: false,
    );
    final now = DateTime.now();

    if (wasCorrect) {
      final eligibleAfter = _addCalendarMonths(
        answeredAt,
        _monthsCooldownAfterCorrect,
      );
      return !now.isBefore(eligibleAfter);
    }

    const week = Duration(days: 7);
    return now.difference(answeredAt) >= week;
  }

  static Future<void> markQuestionAnswered(
    int questionId,
    bool isCorrect,
  ) async {
    await _ensureMigrated();
    final prefs = await SharedPreferences.getInstance();
    final outcomes = _loadOutcomes(prefs);

    outcomes[questionId.toString()] = {
      'c': isCorrect,
      't': DateTime.now().millisecondsSinceEpoch,
    };

    await _saveOutcomes(prefs, outcomes);
  }

  static Future<List<int>> filterAvailableQuestions(
    List<int> questionIds,
  ) async {
    final availableQuestions = <int>[];

    for (final questionId in questionIds) {
      if (await canShowQuestion(questionId)) {
        availableQuestions.add(questionId);
      }
    }

    return availableQuestions;
  }

  static Future<int> getAvailableQuestionCount(List<int> allQuestionIds) async {
    final available = await filterAvailableQuestions(allQuestionIds);
    return available.length;
  }

  /// Alte Historie löschen (z. B. für Tests oder Option in Einstellungen).
  static Future<void> clearAll() async {
    final prefs = await SharedPreferences.getInstance();
    await prefs.remove(_outcomesKey);
    await prefs.remove(_factRotationKey);
    await prefs.remove(_legacyAnsweredTodayKey);
    await prefs.remove(_legacyWrongAnswersKey);
    await prefs.remove(_legacyLastDateKey);
    await prefs.remove('question_history_legacy_cleared_v1');
  }
}
