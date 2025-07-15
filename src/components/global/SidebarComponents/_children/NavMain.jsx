"use client";
import {
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { navMain } from "@/lib/constant";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavMain = () => {
  const path = usePathname();
  return (
    <SidebarGroup>
      <SidebarMenu>
        {navMain.map((item, i) => (
          <SidebarMenuItem key={i} className=" py-[1px]">
            <SidebarMenuButton
              asChild
              tooltip={item.title}
              className={`${path.includes(item.url) && "bg-muted"}`}
            >
              <Link
                className={`${path.includes(item.url) ? "bg-gray-100 font-semibold" : ""}`}
                href={item.url}
              >
                <item.icon></item.icon>
                <h3 className="text-neutral-300 ml-1">{item.title}</h3>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
};

export default NavMain;
