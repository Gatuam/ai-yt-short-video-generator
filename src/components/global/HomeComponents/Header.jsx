"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useContext } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { AuthContext } from "@/app/context/AuthContext";
import {  TvMinimalPlay } from "lucide-react";

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
          {
            <Image
              src={authUser.image || "/logo.svg"}
              alt="userimg"
              width={40}
              height={40}
              className="rounded-full"
            ></Image>
          }
        </div>
      )}
    </div>
  );
};

export default Header;
