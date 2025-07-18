import { genStyle } from "@/lib/constant";
import Image from "next/image";
import React, { useState } from "react";

const ImageComponent = ({ onHandleInput }) => {
  const [selectedIdx, setSelectIdx] = useState(null);
  return (
    <div className="p-4 space-y-1 ">
      <h2 className="text-2xl ">Video Style</h2>
      <p className="text-sm tracking-wider">Selected video style</p>
      <div className="flex gap-4 flex-wrap w-full cursor-pointer">
        {genStyle.map((style, i) => (
          <div
            key={i}
            onClick={() => {
              setSelectIdx(style.name);
              onHandleInput("videoStyle", style.name);
            }}
            className={`group border p-2 rounded-lg bg-gradient-to-b from-[#ffbb0007] to-[#111] transition-all ease-in-out hover:scale-102 ${selectedIdx === style.name && "scale-103 bg-black border border-[#fd870088] bg-gradient-to-b from-[#ffa6001c] "} `}
          >
            <h2
              className={`mb-1 text-white group-hover:text-amber-200 transition
        `}
            >
              {style.name}
            </h2>
            <Image
              className={`rounded-lg transition group-hover:brightness-110 group-hover:contrast-125
           ${selectedIdx === i && "scale-103 transition brightness-110 contrast-125 shadow-lg border border-[#fd87004f]"}
          `}
              src={style.image}
              width={105}
              height={105}
              alt={style.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageComponent;
