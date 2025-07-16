import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";

const VideoTopic = () => {
  return (
    <div className="p-2 space-y-4">
      <div>
        <h1 className="text-3xl font-semibold ">Create New Video</h1>
        <p className="text-sm text-neutral-400 mb-3">Project title</p>
        <Input
          className="focus-visible:ring-0 focus-visible:outline-none w-[100%] mb-3"
          placeholder="type video idea"
        />
      </div>

      <div className="space-y-1">
        <h2 className="text-2xl">Video Topic</h2>
        <p className="text-sm tracking-wider text-neutral-300  mb-2">
          Selected topic for your video
        </p>
        <div className="border border-[#9b9b9b52] bg-[#11111142] rounded-lg p-3">
          <Tabs defaultValue="account" className="w-[400px]">
            <TabsList>
              <TabsTrigger value="account">Account</TabsTrigger>
              <TabsTrigger value="password">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account">
              Make changes to your account here.
            </TabsContent>
            <TabsContent value="password">
              Change your password here.
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default VideoTopic;
