import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import TechStack from "~/components/TechStack";

import { api } from "~/utils/api";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
<div className=" h-100vh flex min-h-screen items-center bg-black ">

          <div className="menu-items ml-[clamp(4rem,20vw,48rem)]">
            <a
              className="menu-item font-Ibarra ml-48rem pt-[clamp(0.25rem,] pb-[1rem)] block pl-0 pr-[0.5vw,] text-[clamp(3rem,8vw,8rem)] text-white hover:placeholder-opacity-100"
              href="#"
            >
              Home
            </a>
            <Link
              className="menu-item  font-Ibarra ml-48rem pt-[clamp(0.25rem,] pb-[1rem)] block pl-0 pr-[0.5vw,] text-[clamp(3rem,8vw,8rem)] text-white"
              href="/about"
            >
              About
            </Link>
            <a
              className="menu-item font-Ibarra ml-48rem pt-[clamp(0.25rem,] pb-[1rem)] block pl-0 pr-[0.5vw,] text-[clamp(3rem,8vw,8rem)] text-white"
              href=""
            >
              Portfolio
            </a>
            <a
              className="menu-item font-Ibarra ml-48rem pt-[clamp(0.25rem,] pb-[1rem)] block pl-0 pr-[0.5vw,] text-[clamp(3rem,8vw,8rem)] text-white"
              href=""
            >
              Contact
            </a>
          </div>
          
          
          {/* <div className="dotted-menu-background-pattern"></div> */}
        </div>
        
    </> 
  );
}

function AuthShowcase() {
  const { data: sessionData } = useSession();

  const { data: secretMessage } = api.example.getSecretMessage.useQuery(
    undefined, // no input
    { enabled: sessionData?.user !== undefined },
  );

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <p className="text-center text-2xl text-white">
        {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
        {secretMessage && <span> - {secretMessage}</span>}
      </p>
      <button
        className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
        onClick={sessionData ? () => void signOut() : () => void signIn()}
      >
        {sessionData ? "Sign out" : "Sign in"}
      </button>
    </div>
  );
}
