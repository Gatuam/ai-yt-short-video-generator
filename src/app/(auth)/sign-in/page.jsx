"use client";
import { Button } from "@/components/ui/button";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Component() {
  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        Signed in as {session.user.email} <br />
        <Button variant={"outline"} onClick={() => signOut()}>
          Sign out
        </Button>
      </div>
    );
  }
  return (
    <>
      <div
        className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#ff730000] to-[#111]"
        style={{
          backgroundImage: `radial-gradient(circle at 0.5px 0.45px, rgba(6,182,212,0.2) 1px, transparent 0)`,
          backgroundSize: "8px 8px",
          backgroundRepeat: "repeat",
        }}
      >
        <Button
          onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
          className="bg-gradient-to-b from-[#080808] to-[#222222] text-white px-4 py-2 rounded border cursor-pointer"
        >
          Sign in with Google
        </Button>
      </div>
    </>
  );
}
