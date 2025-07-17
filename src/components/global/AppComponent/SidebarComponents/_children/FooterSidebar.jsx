"use client";
import { AuthContext } from "@/app/context/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import {
  SidebarFooter,
  SidebarGroup,
  SidebarMenu,
} from "@/components/ui/sidebar";
import { signOut } from "next-auth/react";
import Image from "next/image";

import React, { useContext } from "react";

const FooterSidebar = () => {
  const { authUser } = useContext(AuthContext);
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
        <div className="bg-[#1d1d1d91] border border-[#f3f3f315] rounded-sm flex justify-center items-center p-2 gap-3 w-full group-data-[collapsible=icon]:hidden ">
         <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar>
                <AvatarImage src={authUser?.image || "/logo.svg"} />
                <AvatarFallback>User</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>My Account</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
              onClick={()=> signOut()}
              >Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <div className="">
            <p className="text-sm font-normal text-neutral-300">
              {authUser?.name}
            </p>
            <p className="text-sm font-normal text-neutral-300">
              {authUser?.email}
            </p>
          </div>
        </div>
      </SidebarFooter>
    </SidebarGroup>
  );
};

export default FooterSidebar;
