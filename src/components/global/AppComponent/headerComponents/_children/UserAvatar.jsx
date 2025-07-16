import { AuthContext } from "../../../../../app/context/AuthContext";
import Image from "next/image";
import React, { useContext } from "react";

const UserAvatar = () => {
  const { authUser } = useContext(AuthContext);
  return (
    <div className="p-2 rounded-full bg-gray-400 text-black cursor-pointer">
      <Image
        src={authUser?.image || "/logo.svg"}
        alt="userimg"
        width={25}
        height={25}
        className="rounded-full "
      ></Image>
    </div>
  );
};

export default UserAvatar;
