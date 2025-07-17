"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { suggestions } from "@/lib/constant";
import axios from "axios";
import { Loader2, LoaderCircle, SparkleIcon } from "lucide-react";
import React, { useState } from "react";

const VideoTopic = ({ onHandleInput, onHandleTitle }) => {
  const [selected, setSelected] = useState();
  const [scripts, setScripts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedScript, setSelecetedScript] = useState();

  const generateSceipt = async () => {
    setLoading(true);
    setSelecetedScript(null);
    try {
      const response = await axios.post("/api/gen-veo", { topic: selected });
      console.log(response?.data);
      setScripts(response?.data?.scripts || []);
      console.log(selected);
    } catch (error) {
      console.error("API call failed:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-3 px-4 space-y-6">
      <div>
        <h1 className="text-3xl font-semibold ">Create New Video</h1>
        <p className="text-sm text-neutral-400 mb-3">Project title</p>
        <Input
          onChange={(e) => onHandleTitle("title", e.target.value)}
          className="focus-visible:ring-0 focus-visible:outline-none w-[100%]"
          placeholder="type video idea"
        />
      </div>

      <div className="space-y-1">
        <h2 className="text-2xl">Video Topic</h2>
        <p className="text-sm tracking-wider text-neutral-300  mb-2">
          Selected topic for your video
        </p>
        <div className="border border-[#ff7b0011] bg-gradient-to-b from-[#ff7b0004] to-[#180b0000] rounded-lg p-3 w-full">
          <Tabs defaultValue="Suggestion">
            <TabsList className="bg-gradient-to-b from-[#ff7b0009] to-[#180b0005] border ">
              <TabsTrigger
                className="bg-gradient-to-b from-[#ff7b0009] to-[#180b0005] "
                value="Suggestion"
              >
                Suggestion
              </TabsTrigger>
              <TabsTrigger
                className="bg-gradient-to-t from-[#ff7b0009] to-[#180b0005]"
                value="Your Topic"
              >
                Your Topic
              </TabsTrigger>
            </TabsList>
            <TabsContent value="Suggestion">
              <div className="flex p-2 flex-wrap w-full ">
                {suggestions.map((suggestion, i) => (
                  <div key={i} className="p-1">
                    <Button
                      onClick={() => {
                        setSelected(suggestion);
                        onHandleInput("topic", suggestion);
                      }}
                      variant={"ghost"}
                      className={`text-sm border border-[#83838346] rounded-md bg-gradient-to-b from-[#ff7b000e] cursor-pointer hover:text-gray-300 ${suggestion === selected && "bg-gradient-to-b from-[#f78c0057] to-[#111] "}`}
                    >
                      {suggestion}
                    </Button>
                  </div>
                ))}
              </div>
            </TabsContent>
            <TabsContent value="Your Topic">
              <div>
                <Textarea
                  onChange={(e) => onHandleInput("topic", e.target.value)}
                  className="focus-visible:ring-0 focus-visible:outline-none w-[100%] border border-[#ffbb0009] bg-gradient-to-b from-[#8b4f000c] to-[#111] "
                  placeholder="type your video topic"
                />
              </div>
            </TabsContent>
          </Tabs>
          {scripts.length > 0 && (
            <div className=" cursor-pointer">
              <h2 className="text-2xl mt-5 mb-2 font-bold text-neutral-400">
                Selected Script
              </h2>
              <div className="border border-[#ff7b000c] bg-gradient-to-b  from-[#ff880002]  to-[#180b0000] rounded-lg p-3 w-full grid grid-cols-2 gap-6 overflow-hidden">
                {scripts.map((script, i) => {
                  return (
                    <h2
                      onClick={() => setSelecetedScript(i)}
                      className={` line-clamp-4 tracking-wide leading-8 text-sm text-neutral-600 border p-2 overflow-hidden rounded-lg border-[#fc710013] ${selectedScript === i && " bg-gradient-to-b from-[#fc71000e] to-[#22222207] "}`}
                      key={i}
                    >
                      {script.content}
                    </h2>
                  );
                })}
              </div>{" "}
            </div>
          )}
        </div>
      </div>
      {!scripts && (
        <div className="px-2">
          <Button
            disabled={loading}
            onClick={() => generateSceipt()}
            variant={"outline"}
            className="border bg-gradient-to-b from-[#ff990067] to-[#111] cursor-pointer"
          >
            {loading ? (
              <LoaderCircle className=" animate-spin" />
            ) : (
              <SparkleIcon />
            )}
            Generate Video
          </Button>
        </div>
      )}
    </div>
  );
};

export default VideoTopic;
