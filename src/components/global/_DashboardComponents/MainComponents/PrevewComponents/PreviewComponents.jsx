import { genStyle } from "@/lib/constant";
import { PlayCircle } from "lucide-react";
import Image from "next/image";
import React from "react";

const PreviewComponents = ({ formdata }) => {
  const videoStyle =
    formdata && genStyle.find((style) => style?.name === formdata?.videoStyle);
  const videoTitle = formdata?.title;
  const videoTopic = formdata?.topic;
  const videoVoice = formdata?.selectedVioce;
  return (
    <div className="p-4 border rounded-lg bg-gradient-to-b from-[#ffffff0e] flex flex-col gap-3">
      <div className="relative">
        <Image
          className=" rounded-lg "
          width={600}
          height={700}
          alt="preview"
          src={videoStyle?.image || "/7.jpg"}
        ></Image>
        <PlayCircle className=" absolute right-3 bottom-4" />
      </div>

      <div>
        <h2 className="text-xl "> {videoTitle || "Video title"}</h2>
        <h2 className="text-11px] tracking-wider mt-1">
          {videoTopic || "Video Topic"}
        </h2>
      </div>
    </div>
  );
};

export default PreviewComponents;
