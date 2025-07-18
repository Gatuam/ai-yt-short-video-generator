import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";
import CreateVideo from "./_children/CreateVideo";
import UserAvatar from "./_children/UserAvatar";

const AppHeader = () => {
  return (
    <div className="h-20 border-b  w-[95%] flex justify-center items-center gap-3 bg-neutral-950 ">
      <SidebarInset className="py-3">
        <SidebarTrigger />
      </SidebarInset>
      <CreateVideo />
    </div>
  );
};

export default AppHeader;
