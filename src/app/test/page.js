"use client";
import { useRef, useState } from "react";
import axios from "axios";

export default function Home() {
  const [audioUrl, setAudioUrl] = useState(null);   // preview url
const audioRef = useRef(null);
  const [form, setForm] = useState({
    script: "",
    selectedVoice: "6OzrBCQf8cjERkYgzSg8", 
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if (!form.script || !form.selectedVoice) {
      alert("Script and voice are required");
      return;
    }

    setLoading(true);
    try {
      const { data } = await axios.post(
        "/api/gen-audio",
        { script: form.script, selectedVoice: form.selectedVoice },
        { responseType: "blob" } 
      );
        if (audioUrl) URL.revokeObjectURL(audioUrl);
      const url = URL.createObjectURL(data);
      new Audio(url).play();
       setAudioUrl(url);
       const a = document.createElement("a");
      a.href = url;
      a.download = "speech.mp3";
      a.click();

    } catch (err) {
      console.error(err);
      alert("TTS failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 space-y-4 max-w-md">
    <h1 className="text-xl font-bold">Generate Speech</h1>

    <textarea
      name="script"
      rows={4}
      placeholder="Enter your script"
      value={form.script}
      onChange={handleChange}
      className="w-full border rounded p-2"
    />

    <input
      name="selectedVoice"
      placeholder="Voice ID"
      value={form.selectedVoice}
      onChange={handleChange}
      className="w-full border rounded p-2"
    />

    <button
      onClick={handleSubmit}
      disabled={loading}
      className="bg-blue-600 text-white rounded px-4 py-2"
    >
      {loading ? "Generating…" : "Generate & Preview"}
    </button>

    {/* show player only after we have a url */}
    {audioUrl && (
      <audio
        ref={audioRef}
        src={audioUrl}
        controls
        autoPlay
        className="w-full mt-4"
      />
    )}
  </div>
  );
}