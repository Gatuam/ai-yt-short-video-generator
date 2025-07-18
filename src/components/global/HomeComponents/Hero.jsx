import { Button } from "@/components/ui/button";
import React from "react";
import { genStyles } from "@/lib/constant";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="p-5 flex flex-col justify-center items-center space-y-8 gap-3">
      <h2 className="font-bold text-6xl text-[#f6fdffdc] text-center mt-30 mb-1">
        AI Free YT Short Video <br></br> Generater
      </h2>
      <p className="mt-3 mb-3 text-center text-neutral-500">
        Create videos with AI, no editing skills needed. Just type your idea —{" "}
        <br></br>
        we’ll turn it into video. Fast. Easy. 100% Free.
      </p>
      <div className="flex mt-5">
        <Button variant={"outline"} className="mr-4 px-7">
          View template
        </Button>
        <Button className=" px-7 ">Start Create Video</Button>
      </div>
      <div className="overflow-hidden">
  <div className="flex gap-5 animate-scroll-left mt-5">
    {genStyles.concat(genStyles).map((ele, i) => (
      <div key={i} className="flex-shrink-0">
        <Image 
          className="rounded-lg border border-[#ff5e144b]"
          width={140}
          height={140}
          src={ele.image}
          alt="images"
        />
      </div>
    ))}
  </div>
</div>


      
    </div>
  );
};

export default Hero;
