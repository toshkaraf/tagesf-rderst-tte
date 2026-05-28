import 'dart:math' as math;

import 'package:flutter/material.dart';
import 'package:flutter_tts/flutter_tts.dart';
import 'package:shared_preferences/shared_preferences.dart';

/// Ein einzelner Fakt; «Weiter» als breite FilledButton-Leiste unten (kein Text-Link).
class FactsDialog extends StatefulWidget {
  final String fact;

  const FactsDialog({super.key, required this.fact});

  @override
  State<FactsDialog> createState() => _FactsDialogState();
}

class _FactsDialogState extends State<FactsDialog> {
  static const _autoReadPrefKey = 'quiz.auto_read_dialogs';

  final FlutterTts _flutterTts = FlutterTts();
  final ScrollController _scrollController = ScrollController();
  bool _isPlaying = false;
  bool _isPaused = false;
  bool _autoReadEnabled = false;

  @override
  void initState() {
    super.initState();
    _initTts();
    _loadAutoReadPreference();
  }

  Future<void> _loadAutoReadPreference() async {
    final prefs = await SharedPreferences.getInstance();
    final value = prefs.getBool(_autoReadPrefKey) ?? false;
    if (!mounted) return;
    setState(() {
      _autoReadEnabled = value;
    });
    if (value) {
      await _startPlayback();
    }
  }

  Future<void> _setAutoReadEnabled(bool enabled) async {
    setState(() {
      _autoReadEnabled = enabled;
    });
    final prefs = await SharedPreferences.getInstance();
    await prefs.setBool(_autoReadPrefKey, enabled);
    if (enabled) {
      await _startPlayback();
    }
  }

  Future<void> _startPlayback() async {
    final text = widget.fact;
    await _flutterTts.stop();
    await _flutterTts.setLanguage('de-DE');
    await _flutterTts.speak(text);
    if (!mounted) return;
    setState(() {
      _isPlaying = true;
      _isPaused = false;
    });
  }

  Future<void> _initTts() async {
    await _flutterTts.setLanguage('de-DE');
    _flutterTts.setCompletionHandler(() {
      if (mounted) {
        setState(() {
          _isPlaying = false;
          _isPaused = false;
        });
      }
    });
  }

  @override
  void dispose() {
    _flutterTts.stop();
    _scrollController.dispose();
    super.dispose();
  }

  Future<void> _togglePlayPause() async {
    if (_isPlaying && !_isPaused) {
      await _flutterTts.pause();
      setState(() {
        _isPaused = true;
      });
    } else if (_isPlaying && _isPaused) {
      await _startPlayback();
      setState(() {
        _isPaused = false;
      });
    } else {
      await _startPlayback();
    }
  }

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.sizeOf(context);
    final pad = MediaQuery.paddingOf(context);
    final maxW = math.min(560.0, size.width - 24);
    final maxH = math.min(640.0, size.height * 0.82);

    return Dialog(
      insetPadding: EdgeInsets.fromLTRB(12, 16, 12, math.max(16, pad.bottom + 8)),
      shape: RoundedRectangleBorder(borderRadius: BorderRadius.circular(16)),
      clipBehavior: Clip.antiAlias,
      child: ConstrainedBox(
        constraints: BoxConstraints(maxWidth: maxW, maxHeight: maxH),
        child: SafeArea(
          minimum: const EdgeInsets.all(4),
          child: Padding(
            padding: const EdgeInsets.fromLTRB(18, 14, 18, 10),
            child: Column(
              crossAxisAlignment: CrossAxisAlignment.stretch,
              children: [
                Row(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Expanded(
                      child: Text(
                        'Interessant, dass …',
                        style: Theme.of(context).textTheme.titleLarge?.copyWith(
                              fontSize: 36,
                              fontWeight: FontWeight.bold,
                            ),
                      ),
                    ),
                    IconButton(
                      constraints: const BoxConstraints(minWidth: 44, minHeight: 44),
                      padding: EdgeInsets.zero,
                      icon: Icon(
                        _isPlaying && !_isPaused
                            ? Icons.pause_circle_filled
                            : Icons.volume_up,
                        size: 38,
                        color: Colors.blue,
                      ),
                      onPressed: _togglePlayPause,
                      tooltip:
                          _isPlaying && !_isPaused ? 'Pause' : 'Vorlesen',
                    ),
                    const SizedBox(width: 8),
                    Column(
                      crossAxisAlignment: CrossAxisAlignment.end,
                      children: [
                        const Text(
                          'Читать автоматически',
                          style: TextStyle(
                            fontSize: 12,
                            fontWeight: FontWeight.w600,
                          ),
                        ),
                        Switch(
                          value: _autoReadEnabled,
                          onChanged: _setAutoReadEnabled,
                          materialTapTargetSize: MaterialTapTargetSize.shrinkWrap,
                        ),
                      ],
                    ),
                  ],
                ),
                const SizedBox(height: 6),
                Expanded(
                  child: Scrollbar(
                    controller: _scrollController,
                    thumbVisibility: true,
                    child: SingleChildScrollView(
                      controller: _scrollController,
                      physics: const BouncingScrollPhysics(),
                      padding: const EdgeInsets.only(right: 6, bottom: 4),
                      child: Text(
                        widget.fact,
                        style: const TextStyle(
                          fontSize: 34,
                          height: 1.45,
                        ),
                        softWrap: true,
                      ),
                    ),
                  ),
                ),
                const SizedBox(height: 12),
                FilledButton(
                  onPressed: () => Navigator.of(context).pop(),
                  style: FilledButton.styleFrom(
                    minimumSize: const Size.fromHeight(54),
                    padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 14),
                    textStyle: const TextStyle(
                      fontSize: 26,
                      fontWeight: FontWeight.w600,
                    ),
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(12),
                    ),
                  ),
                  child: const Text('Weiter'),
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
