import { Button } from "@/components/ui/button";
import { SidebarFooter, SidebarGroup } from "@/components/ui/sidebar";
import React from "react";

const FooterSidebar = () => {
  return (
    <SidebarGroup>
      <SidebarFooter>
        <div className="w-full px-3 py-4 rounded-lg bg-[#1111112a] border border-[#f08e0f2a] flex flex-col justify-baseline gap-2 group-data-[collapsible=icon]:hidden ">
          <p className="text-gray-200 txt-lg font-semibold ">Create Video</p>
          <p className="text-orange-400 text-sm mb-1 ">
            Creative veo platform with 100M free credit
          </p>
          <Button className=" cursor-pointer" size={"sm"} variant={"outline"}>
            Buy Credit
          </Button>
        </div>
      </SidebarFooter>
    </SidebarGroup>
  );
};

export default FooterSidebar;
