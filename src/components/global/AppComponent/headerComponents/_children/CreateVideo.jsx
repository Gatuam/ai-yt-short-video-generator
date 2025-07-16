import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React from "react";

const CreateVideo = () => {
  return (
    <div>
      <Button className="cursor-pointer" size={"sm"}>
        <Plus />
        Create Video
      </Button>
    </div>
  );
};

export default CreateVideo;
