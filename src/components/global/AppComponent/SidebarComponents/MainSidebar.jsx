"use client";
import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { TvMinimalPlay } from "lucide-react";
import NavMain from "./_children/NavMain";
import { useRouter } from "next/navigation";
import FooterSidebar from "./_children/FooterSidebar";

const MainSidebar = () => {
  const router = useRouter();
  return (
    <Sidebar collapsible="icon" className="max-w-[230px] ">
      <SidebarContent>
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuButton
              tooltip={"Veo-AI"}
              className="p-6 mt-2"
              onClick={() => router.push("/")}
            >
              <TvMinimalPlay className="w-16" />
              <h1 className="text-2xl ml-2">Veo-AI</h1>
            </SidebarMenuButton>
          </SidebarMenu>
        </SidebarHeader>
        <NavMain></NavMain>
      </SidebarContent>
      <FooterSidebar></FooterSidebar>
    </Sidebar>
  );
};

export default MainSidebar;
