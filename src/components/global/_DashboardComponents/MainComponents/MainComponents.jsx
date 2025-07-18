"use client";
import React, { useState } from "react";
import VideoTopic from "./TopicComponents/VideoTopic";
import PreviewComponents from "./PrevewComponents/PreviewComponents";
import ImageComponent from "./ImageComponents/ImageComponent";
import CaptionComponents from "./CaptionsComponents/CaptionComponents";
import VoiceComponents from "./Voice/VoiceComponents";
import { Button } from "@/components/ui/button";
import { LoaderCircle, Sparkles } from "lucide-react";

const MainComponents = () => {
  const [formdata, setFromData] = useState({});
  const [title, setTitle] = useState();
  const [loading, setLoading] = useState(false);
  const onHandleInput = (fieldName, fieldValue) => {
    setFromData((pre) => ({
      ...pre,
      [fieldName]: fieldValue,
    }));
    console.log("form data", formdata);
  };
  const onHandleTitle = (titel, titleValue) => {
    setTitle((pre) => ({
      ...pre,
      [titel]: titleValue,
    }));
    console.log(title);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-3 gap-4 space-y-3">
      <div className=" col-span-2 px-1 mt-4 border bg-gradient-to-b from-[#111] rounded-lg p-3 max-h-[87vh] overflow-y-auto scrollbar-hide  ">
        <VideoTopic
          onHandleInput={onHandleInput}
          onHandleTitle={onHandleTitle}
        />
        <ImageComponent onHandleInput={onHandleInput} />
        <VoiceComponents onHandleInput={onHandleInput} />
        <div className="px-4 flex mt-3 mb-3">
          <Button
            variant={"outline"}
            className="border w-full bg-gradient-to-b from-[#d47f007a] to-[#111] cursor-pointer"
          >
            {loading ? (
              <LoaderCircle className=" animate-spin" />
            ) : (
              <Sparkles />
            )}
            Generate Video
          </Button>
        </div>
      </div>
      <div className="col-span-1 px-2 border mt-4 rounded-lg p-3">
        <PreviewComponents formdata={formdata} />
      </div>
    </div>
  );
};

export default MainComponents;
