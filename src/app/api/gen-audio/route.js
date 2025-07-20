import { ElevenLabsClient } from "@elevenlabs/elevenlabs-js";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { script, selectedVoice } = await req.json();

    if (!script || !selectedVoice) {
      return NextResponse.json({ error: "Missing script or voice id" }, { status: 400 });
    }

    const elevenlabs = new ElevenLabsClient({
      apiKey: process.env.ELEVENLABS_API_KEY,
    });

    const audio = await elevenlabs.textToSpeech.convert(selectedVoice, {
      text: script,
      modelId: "eleven_multilingual_v2",
    });

    return new NextResponse(audio, {
      headers: {
        "Content-Type": "audio/mpeg",
        "Content-Disposition": 'attachment; filename="speech.mp3"',
      },
    });
  } catch (err) {
    console.error("TTS Error:", err);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}