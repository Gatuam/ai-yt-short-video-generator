"use client";
import React, { useState, useRef } from "react";
import VideoTopic from "./TopicComponents/VideoTopic";
import PreviewComponents from "./PrevewComponents/PreviewComponents";
import ImageComponent from "./ImageComponents/ImageComponent";
import CaptionComponents from "./CaptionsComponents/CaptionComponents";
import VoiceComponents from "./Voice/VoiceComponents";
import { Button } from "@/components/ui/button";
import { LoaderCircle, Sparkles, PlayCircle } from "lucide-react";
import axios from "axios";

const MainComponents = () => {
  const [formdata, setFromData] = useState({});
  const [title, setTitle] = useState();
  const [loading, setLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState(null);
  const audioRef = useRef(null);

  const onHandleInput = (fieldName, fieldValue) => {
    setFromData((pre) => ({ ...pre, [fieldName]: fieldValue }));
  };
  const onHandleTitle = (titel, titleValue) => {
    setTitle((pre) => ({ ...pre, [titel]: titleValue }));
  };

  const GenVideoData = async () => {
    if (
      !formdata.title ||
      !formdata.script ||
      !formdata.topic ||
      !formdata.selectedVoice ||
      !formdata.videoStyle
    ) {
      alert("required all fields");
      return;
    }
    setLoading(true);
    try {
      const res = await axios.post("/api/gen-audio", formdata, {
        responseType: "blob",
      });
      if (audioUrl) URL.revokeObjectURL(audioUrl);
      const url = URL.createObjectURL(res.data);
      setAudioUrl(url);
      audioRef.current?.load();
      audioRef.current?.play();
    } catch (err) {
      console.error(err);
      alert("TTS failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-3 gap-4 space-y-3">
      <div className="col-span-2 px-1 mt-4 border bg-gradient-to-b from-[#111] rounded-lg p-3 max-h-[87vh] overflow-y-auto scrollbar-hide">
        <VideoTopic
          onHandleInput={onHandleInput}
          onHandleTitle={onHandleTitle}
        />
        <ImageComponent onHandleInput={onHandleInput} />
        <VoiceComponents onHandleInput={onHandleInput} />
        <div className="px-4 flex flex-col mt-3 mb-3">
          <Button
            onClick={GenVideoData}
            variant="outline"
            className="border w-full bg-gradient-to-b from-[#d47f007a] to-[#111] cursor-pointer"
          >
            {loading ? (
              <LoaderCircle className="animate-spin" />
            ) : (
              <PlayCircle />
            )}
            Generate & Preview
          </Button>
        </div>
      </div>
      <div className="col-span-1 px-2 border mt-4 rounded-lg p-3 max-h-fit">
        <PreviewComponents
          formdata={formdata}
          audioRef={audioRef}
          audioUrl={audioUrl}
        />
      </div>
    </div>
  );
};

export default MainComponents;
