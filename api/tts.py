"""
Vercel Serverless Function: /api/tts
Gibt deutschen Text als MP3 aus (Microsoft Edge-TTS, kostenlos).

GET /api/tts                       → {"status":"ok","voice":"de-DE-KatjaNeural"}
GET /api/tts?text=Hallo%20Welt     → audio/mpeg (MP3)
GET /api/tts?text=...&voice=de-DE-ConradNeural  → MP3 mit anderem Sprecher

Verfügbare deutsche Stimmen:
  de-DE-KatjaNeural   – Frau, natürlich (Standard)
  de-DE-ConradNeural  – Mann, warm
  de-DE-AmalaNeural   – Frau, klar
"""

from http.server import BaseHTTPRequestHandler
import asyncio
import io
import json
import urllib.parse

DEFAULT_VOICE = "de-DE-KatjaNeural"

CORS = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "*",
}


class handler(BaseHTTPRequestHandler):
    def log_message(self, *args):  # silence default access log
        pass

    def _cors(self):
        for k, v in CORS.items():
            self.send_header(k, v)

    def do_OPTIONS(self):
        self.send_response(204)
        self._cors()
        self.end_headers()

    def do_GET(self):
        params = urllib.parse.parse_qs(
            urllib.parse.urlparse(self.path).query
        )
        text = params.get("text", [""])[0].strip()
        voice = params.get("voice", [DEFAULT_VOICE])[0]

        # Health-check when no text supplied
        if not text:
            body = json.dumps({"status": "ok", "voice": voice}).encode()
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.send_header("Content-Length", str(len(body)))
            self._cors()
            self.end_headers()
            self.wfile.write(body)
            return

        try:
            audio = asyncio.run(_synthesise(text, voice))
            self.send_response(200)
            self.send_header("Content-Type", "audio/mpeg")
            self.send_header("Content-Length", str(len(audio)))
            self._cors()
            self.end_headers()
            self.wfile.write(audio)
        except Exception as exc:
            msg = str(exc).encode()
            self.send_response(500)
            self.send_header("Content-Type", "text/plain")
            self.send_header("Content-Length", str(len(msg)))
            self._cors()
            self.end_headers()
            self.wfile.write(msg)


async def _synthesise(text: str, voice: str) -> bytes:
    import edge_tts  # imported lazily so cold-start is faster on other routes

    communicate = edge_tts.Communicate(text, voice)
    buf = io.BytesIO()
    async for chunk in communicate.stream():
        if chunk["type"] == "audio":
            buf.write(chunk["data"])
    data = buf.getvalue()
    if not data:
        raise RuntimeError("edge-tts lieferte keine Audiodaten")
    return data
