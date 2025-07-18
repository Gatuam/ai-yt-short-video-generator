"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useContext } from "react";
import Link from "next/link";
import { signIn, signOut } from "next-auth/react";
import { AuthContext } from "@/app/context/AuthContext";
import { TvMinimalPlay } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const { authUser } = useContext(AuthContext);
  console.log(authUser);
  return (
    <div className="p-5 w-full h-30 flex justify-between items-center shadow-xs">
      <div className="flex items-center ">
        <TvMinimalPlay />
        <h1 className="text-2xl ml-3 text-white">Veo-AI</h1>
      </div>
      {!authUser ? (
        <div className="flex gap-3">
          <Button
            onClick={() => signIn()}
            className={`px-8 py-[1px] cursor-pointer`}
          >
            Signin
          </Button>
        </div>
      ) : (
        <div className="flex justify-center items-center cursor-pointer">
          <Link href={"/dashboard"}>
            <Button className="mr-5"> Dashboard</Button>
          </Link>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar>
                <AvatarImage src={authUser.image || "/logo.svg"} />
                <AvatarFallback>User</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>My Account</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => signOut()}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </div>
  );
};

export default Header;
