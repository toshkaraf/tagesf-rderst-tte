import 'package:audioplayers/audioplayers.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter_tts/flutter_tts.dart';
import 'package:http/http.dart' as http;
import 'package:shared_preferences/shared_preferences.dart';

/// Which TTS engine is currently active.
enum TtsEngine { serverApi, browserSpeechApi }

/// Singleton TTS service with two-level fallback.
///
/// Priority:
///   1. Vercel serverless function at [same-origin]/api/tts
///      → Microsoft de-DE-KatjaNeural (identical on every device/browser)
///   2. Web Speech API via flutter_tts (browser/OS built-in voice)
///      → Apple Anna (iPad), Microsoft Katja (Windows), Google Deutsch (Android)
///
/// The server endpoint is probed automatically with a fast health-check.
/// If /api/tts is unreachable the service falls back to the browser voice
/// instantly, with no visible delay for the user.
class TtsService {
  TtsService._();
  static final TtsService instance = TtsService._();

  // ── Preference keys ────────────────────────────────────────────────────────
  static const _prefVoiceName = 'tts.voice_name';
  static const _prefVoiceLocale = 'tts.voice_locale';
  static const _prefSpeechRate = 'tts.speech_rate';
  static const _prefPitch = 'tts.pitch';

  // ── Internal state ─────────────────────────────────────────────────────────
  final FlutterTts _webTts = FlutterTts();
  final AudioPlayer _player = AudioPlayer();

  bool _initialized = false;
  Map<String, String>? _activeWebVoice;
  double _speechRate = 0.85;
  double _pitch = 1.0;

  bool? _apiAvailable;       // null = not yet checked
  DateTime? _lastPingTime;
  TtsEngine _lastEngine = TtsEngine.browserSpeechApi;

  void Function()? _completionHandler;

  // ── Getters ────────────────────────────────────────────────────────────────
  Map<String, String>? get activeWebVoice => _activeWebVoice;
  double get speechRate => _speechRate;
  double get pitch => _pitch;
  bool? get apiAvailable => _apiAvailable;
  TtsEngine get lastEngine => _lastEngine;

  // ── Initialisation ─────────────────────────────────────────────────────────

  Future<void> initialize() async {
    if (_initialized) return;
    _initialized = true;

    final prefs = await SharedPreferences.getInstance();
    _speechRate = prefs.getDouble(_prefSpeechRate) ?? 0.85;
    _pitch      = prefs.getDouble(_prefPitch)       ?? 1.0;

    await _webTts.setLanguage('de-DE');
    await _webTts.setSpeechRate(_speechRate);
    await _webTts.setPitch(_pitch);
    await _webTts.setVolume(1.0);
    _webTts.setCompletionHandler(() => _completionHandler?.call());

    _player.onPlayerComplete.listen((_) {
      if (_lastEngine == TtsEngine.serverApi) _completionHandler?.call();
    });

    // Restore or auto-pick browser voice (runs in background)
    final savedName   = prefs.getString(_prefVoiceName);
    final savedLocale = prefs.getString(_prefVoiceLocale);
    if (savedName != null && savedLocale != null) {
      unawaited(_applyWebVoice({'name': savedName, 'locale': savedLocale}));
    } else {
      unawaited(_autoSelectBestVoice());
    }

    // Probe /api/tts in background
    unawaited(pingApi());
  }

  // ── Public API ─────────────────────────────────────────────────────────────

  /// Speaks [text]. Tries /api/tts (Vercel) first, falls back to browser.
  Future<void> speak(String text) async {
    await _ensureInit();
    await stop();
    if (await _tryServerApi(text)) return;
    _lastEngine = TtsEngine.browserSpeechApi;
    await _webTts.speak(text);
  }

  /// Speaks [text] directly via the browser voice (bypasses /api/tts).
  Future<void> speakWithWebVoice(String text) async {
    await _ensureInit();
    await stop();
    _lastEngine = TtsEngine.browserSpeechApi;
    await _webTts.speak(text);
  }

  Future<void> stop() async {
    await _webTts.stop();
    await _player.stop();
  }

  Future<void> pause() async {
    if (_lastEngine == TtsEngine.serverApi) {
      await _player.pause();
    } else {
      await _webTts.pause();
    }
  }

  void setCompletionHandler(void Function() handler) {
    _completionHandler = handler;
  }

  /// Pings [same-origin]/api/tts and updates [apiAvailable].
  Future<bool> pingApi() async {
    try {
      final resp = await http
          .get(_apiUri())
          .timeout(const Duration(milliseconds: 1500));
      _apiAvailable = resp.statusCode == 200;
    } catch (_) {
      _apiAvailable = false;
    }
    _lastPingTime = DateTime.now();
    return _apiAvailable!;
  }

  // ── Web voice helpers ──────────────────────────────────────────────────────

  Future<List<Map<String, String>>> getGermanVoices() async {
    await _ensureInit();
    try {
      final all = await _webTts.getVoices as List<dynamic>;
      final de = all
          .cast<Map>()
          .where((v) => (v['locale'] ?? '').toString().toLowerCase().startsWith('de'))
          .map((v) => {
                'name':   v['name']?.toString()   ?? '',
                'locale': v['locale']?.toString() ?? 'de-DE',
              })
          .where((v) => v['name']!.isNotEmpty)
          .toList();
      de.sort((a, b) => _voiceScore(b['name']!) - _voiceScore(a['name']!));
      return de;
    } catch (_) {
      return [];
    }
  }

  Future<void> setWebVoice(Map<String, String> voice) async {
    await _applyWebVoice(voice);
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString(_prefVoiceName,   voice['name']!);
    await prefs.setString(_prefVoiceLocale, voice['locale'] ?? 'de-DE');
  }

  Future<void> setSpeechRate(double rate) async {
    _speechRate = rate;
    await _webTts.setSpeechRate(rate);
    final prefs = await SharedPreferences.getInstance();
    await prefs.setDouble(_prefSpeechRate, rate);
  }

  Future<void> setPitch(double p) async {
    _pitch = p;
    await _webTts.setPitch(p);
    final prefs = await SharedPreferences.getInstance();
    await prefs.setDouble(_prefPitch, p);
  }

  // ── Private ────────────────────────────────────────────────────────────────

  Future<void> _ensureInit() async {
    if (!_initialized) await initialize();
  }

  /// Constructs the /api/tts URL using the current page origin.
  Uri _apiUri({Map<String, String>? queryParameters}) {
    final b = Uri.base;
    return Uri(
      scheme: b.scheme,
      host: b.host,
      port: b.hasPort ? b.port : null,
      path: '/api/tts',
      queryParameters: queryParameters,
    );
  }

  Future<bool> _tryServerApi(String text) async {
    // Use cached "unavailable" status for 30 s to avoid repeated pings
    if (_apiAvailable == false && _lastPingTime != null) {
      if (DateTime.now().difference(_lastPingTime!) < const Duration(seconds: 30)) {
        return false;
      }
    }

    if (_apiAvailable != true) {
      final ok = await pingApi();
      if (!ok) return false;
    }

    try {
      final uri = _apiUri(queryParameters: {
        'text':  text,
        'voice': 'de-DE-KatjaNeural',
      });
      await _player.play(UrlSource(uri.toString()));
      _lastEngine = TtsEngine.serverApi;
      return true;
    } catch (e) {
      debugPrint('TtsService: /api/tts error: $e');
      _apiAvailable = false;
      _lastPingTime = DateTime.now();
      return false;
    }
  }

  Future<void> _autoSelectBestVoice() async {
    List<Map<String, String>> voices = [];
    for (var i = 0; i < 3; i++) {
      voices = await getGermanVoices();
      if (voices.isNotEmpty) break;
      await Future<void>.delayed(const Duration(milliseconds: 500));
    }
    if (voices.isNotEmpty) {
      await _applyWebVoice(voices.first);
      debugPrint('TtsService: web voice → "${voices.first['name']}"');
    }
  }

  Future<void> _applyWebVoice(Map<String, String> voice) async {
    try {
      await _webTts.setVoice(voice);
      _activeWebVoice = voice;
    } catch (e) {
      debugPrint('TtsService: setVoice failed: $e');
    }
  }

  int _voiceScore(String name) {
    final n = name.toLowerCase();
    if (n.contains('natural')) return 100;
    if (n.contains('online') && (n.contains('katja') || n.contains('conrad'))) {
      return 80;
    }
    if (n.contains('online'))   return 60;
    if (n == 'anna'    || n.startsWith('anna '))    return 75;
    if (n == 'markus'  || n.startsWith('markus '))  return 55;
    if (n == 'yannick' || n.startsWith('yannick ')) return 50;
    if (n == 'helena'  || n.startsWith('helena '))  return 45;
    if (n.contains('google'))   return 40;
    if (n.contains('katja') || n.contains('conrad')) return 30;
    return 10;
  }
}

void unawaited(Future<void> future) => future.ignore();
