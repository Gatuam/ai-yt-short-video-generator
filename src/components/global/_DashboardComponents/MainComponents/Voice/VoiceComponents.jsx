import { voices } from "@/lib/constant";
import Image from "next/image";
import React, { useState } from "react";

const VoiceComponents = ({ onHandleInput }) => {
  const [selectedVoice, setSelectedVoice] = useState(null);
  return (
    <div className="w-full p-3 space-y-1">
      <div className="border border-[#ff890217] rounded-lg px-3 py-4 bg-gradient-to-b from-[#ff730005] ">
        <div className="px-1">
          <h1 className="text-2xl ">Choose the vioce from your video</h1>
          <p>Select voice</p>
        </div>
        <div className="flex items-center p-2 gap-2 flex-wrap">
          {voices.map((voice) => (
            <div
              key={voice.id}
              onClick={() => {
                setSelectedVoice(voice.id);
                onHandleInput("selectedVioce", voice.id);
              }}
              className={`border space-x-[1px] px-2 py-[4px] border-[#ffa47010] rounded-full flex justify-center items-center gap-2 bg-gradient-to-b  from-[#fbff0007] cursor-pointer  hover:bg-[#fdb0832c] ${selectedVoice === voice.id && "bg-gradient-to-b from-[#ff910059] scale-106"}`}
            >
              <Image
                className={`rounded-full border-2 border-[#ff89021c] ${selectedVoice === voice.id && " brightness-95 contrast-120"}`}
                src={voice.avatar}
                width={30}
                height={40}
                alt="avatar"
              />
              <p className="text-sm ">{voice.name}</p>

              <p>{voice.flag}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VoiceComponents;
