#!/usr/bin/env python3
"""
Lokaler TTS-Server für das Geschichtsquiz.
Nutzt Microsoft Edge-TTS (kostenlos, keine API-Keys nötig).

Installation (einmalig):
    pip install edge-tts aiohttp

Starten:
    python edge_tts_server.py

Der Server lauscht auf http://localhost:5050
Solange er läuft, wird im Quiz die hochwertige Microsoft-Stimme
(de-DE-KatjaNeural) verwendet. Wenn er nicht läuft, schaltet das
Quiz automatisch auf die Browser-Stimme zurück.

Endpunkte:
    GET /ping               → "ok"  (Erreichbarkeitstest)
    GET /tts?text=...       → MP3-Audio
         &voice=de-DE-KatjaNeural   (optional, Standard s.u.)
"""

import asyncio
import io
import sys

PORT = 5050
DEFAULT_VOICE = "de-DE-KatjaNeural"

CORS = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "*",
}

try:
    from aiohttp import web
    import edge_tts
except ImportError:
    print("Fehlende Pakete. Bitte installieren:")
    print("    pip install edge-tts aiohttp")
    sys.exit(1)


async def handle_ping(request):
    return web.Response(text="ok", headers=CORS)


async def handle_tts(request):
    text = request.rel_url.query.get("text", "").strip()
    voice = request.rel_url.query.get("voice", DEFAULT_VOICE)

    if not text:
        return web.Response(status=400, text="Parameter 'text' fehlt", headers=CORS)

    try:
        communicate = edge_tts.Communicate(text, voice)
        buf = io.BytesIO()
        async for chunk in communicate.stream():
            if chunk["type"] == "audio":
                buf.write(chunk["data"])
        buf.seek(0)
        audio_bytes = buf.read()
        if not audio_bytes:
            return web.Response(status=500, text="Keine Audiodaten erhalten", headers=CORS)
        return web.Response(body=audio_bytes, content_type="audio/mpeg", headers=CORS)
    except Exception as exc:
        return web.Response(status=500, text=str(exc), headers=CORS)


async def handle_options(request):
    return web.Response(status=204, headers=CORS)


def main():
    app = web.Application()
    app.router.add_get("/ping", handle_ping)
    app.router.add_get("/tts", handle_tts)
    app.router.add_route("OPTIONS", "/{path_info:.*}", handle_options)

    print(f"✓ edge-tts Server läuft auf http://localhost:{PORT}")
    print(f"  Stimme: {DEFAULT_VOICE}")
    print("  Stoppen mit Ctrl+C\n")
    web.run_app(app, host="127.0.0.1", port=PORT, print=lambda *a: None)


if __name__ == "__main__":
    main()
