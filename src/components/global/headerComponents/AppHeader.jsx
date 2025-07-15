import { SidebarInset, SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

const AppHeader = () => {
  return (
    <div className="h-20 border-b w-full ">
      <SidebarInset className="py-3">
        <SidebarTrigger />
      </SidebarInset>
    </div>
  );
};

export default AppHeader;
