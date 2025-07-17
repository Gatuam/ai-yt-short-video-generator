"use client";
import React, { useState } from "react";
import VideoTopic from "./TopicComponents/VideoTopic";
import PreviewComponents from "./PrevewComponents/PreviewComponents";
import ImageComponent from "./ImageComponents/ImageComponent";
import CaptionComponents from "./CaptionsComponents/CaptionComponents";

const MainComponents = () => {
  const [formdata, setFromData] = useState({});
  const [title, setTitle] = useState();
  const onHandleInput = (fieldName, fieldValue) => {
    setFromData((pre) => ({
      ...pre,
      [fieldName]: fieldValue,
    }));
    console.log(formdata);
  };
  const onHandleTitle = (titel, titleValue) => {
    setTitle((pre) => ({
      ...pre,
      [titel]: titleValue,
    }));
    console.log(title);
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 p-3 gap-4">
      <div className=" col-span-2 border-r px-2 mt-4 border rounded-lg p-3">
        <VideoTopic
          onHandleInput={onHandleInput}
          onHandleTitle={onHandleTitle}
        />
        <ImageComponent />
        <CaptionComponents />
      </div>
      <div className="col-span-1 px-2 border mt-4 rounded-lg p-3">
        <PreviewComponents />
      </div>
    </div>
  );
};

export default MainComponents;
