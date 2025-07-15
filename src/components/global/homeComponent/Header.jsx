"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useContext } from "react";
import Link from "next/link";
import { AuthContext } from "../../../app/context/AuthContext";
import { signIn } from "next-auth/react";

const Header = () => {
  const { authUser } = useContext(AuthContext);
  return (
    <div className="p-5 w-full h-30 flex justify-between items-center shadow-xs">
      <div className="flex items-center ">
        <Image
          width={49}
          height={49}
          alt="logo"
          src={"/logo.svg"}
          className=" bg-white ml-3 mr-3"
        />
        <h1 className="text-2xl font-bold text-white">Veo-Generator</h1>
      </div>
      {authUser ? (
        <div className="flex gap-3">
          <Button
            // onClick={()=>  signIn()}
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
          {/* <Image
            src={authUser.ptc || "/logo.svg"}
            alt="userimg"
            width={40}
            height={40}
            className="rounded-full"
          ></Image> */}
        </div>
      )}
    </div>
  );
};

export default Header;
