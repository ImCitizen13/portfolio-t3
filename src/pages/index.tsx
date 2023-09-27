import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";

import { api } from "~/utils/api";

export default function Home() {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Name Place holder</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:wght@400;500;700&display=swap" rel="stylesheet"></link>
        <meta name="description" content="Portfolion website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div className=" bg-black min-h-screen h-100vh flex items-center ">
          <div className="menu-items ml-[clamp(4rem,20vw,48rem)]">
            <a className="menu-item hover:placeholder-opacity-100 text-white font-Ibarra text-[clamp(3rem,8vw,8rem)] ml-48rem block pl-0 pr-[0.5vw,] pt-[clamp(0.25rem,] pb-[1rem)]" href="">Home</a>
            <a className="menu-item  text-white font-Ibarra text-[clamp(3rem,8vw,8rem)] ml-48rem block pl-0 pr-[0.5vw,] pt-[clamp(0.25rem,] pb-[1rem)]" href="">About</a>
            <a className="menu-item text-white font-Ibarra text-[clamp(3rem,8vw,8rem)] ml-48rem block pl-0 pr-[0.5vw,] pt-[clamp(0.25rem,] pb-[1rem)]" href="">Portfolio</a>
            <a className="menu-item text-white font-Ibarra text-[clamp(3rem,8vw,8rem)] ml-48rem block pl-0 pr-[0.5vw,] pt-[clamp(0.25rem,] pb-[1rem)]" href="">Contact</a>
          </div>
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
