import { SidebarProvider } from "@/components/ui/sidebar";
import React from "react";

const Provider = ({ children }) => {
  return <SidebarProvider>{children}</SidebarProvider>;
};

export default Provider;
