import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

type NavBarProps = {
  normalStyle: string;
  activeStyle: string;
};

function NavBar1({ normalStyle, activeStyle }: NavBarProps) {
  const router = useRouter();
  const [tab, setTab] = useState("/");

  // detect route change with useEffect dependency
  useEffect(() => {
    setTab(router.pathname.toLowerCase())
    console.log("route change with dependency", router.pathname);
  }, [router]);

  return (
    <>
      <nav className="min-h-[280px] min-w-full">
        <div className="flex flex-col items-center justify-center">
          <Link href={"/"} className={(tab === "/" ? activeStyle : normalStyle) + " navLink transition delay-150 ease-in-out duration-1000"}>
            Home
          </Link>
          {tab.toLowerCase() == "/" && (
            <div className="mx-auto my-0 h-[1px] w-[203.4px] bg-white ease-in-out transition delay-150 duration-500"></div>
          )}
        </div>
        <div className="flex flex-col items-center justify-center">
          <Link href={"/about"} className={(tab === "/about" ? activeStyle : normalStyle) + " navLink transition delay-150 ease-in-out duration-1000"}>
            About
          </Link>
          {tab == "/about" && (
            <div className="mx-auto my-0 h-[1px] w-[213px] bg-white transition delay-150 ease-in-out duration-500"></div>
          )}
        </div>
        <div className="flex flex-col items-center justify-center">
          <Link href={"/portfolio"} className={(tab === "/portfolio" ? activeStyle : normalStyle) + " navLink transition delay-150ease-in-out duration-1000"}>
            Portfolio
          </Link>
          {tab == "/portfolio" && (
            <div className="mx-auto my-0 h-[1px] w-[282px] bg-white  transition delay-150 ease-in-out duration-500"></div>
          )}
        </div>
        <div className="flex flex-col items-center justify-center">
          <Link href={"/contact"} className={(tab === "/contact" ? activeStyle : normalStyle) + " navLink transition delay-150ease-in-out duration-1000"}>
            Contract
          </Link>
          {tab == "/contact" && (
            <div className="mx-auto my-0 h-[1px] w-[256px] bg-white  transition delay-150 ease-in-out duration-500"></div>
          )}
        </div>
      </nav>
    </>
  );
}

function NavBar2({ normalStyle, activeStyle }: NavBarProps) {
  return (
    <>
      <Image
        src="logos/mobile/reactnative.svg"
        height={128}
        width={128}
        alt="Icon"
      />
      <nav>
        <ul className="navLinks">
          <li>
            <Link href="">Home</Link>
          </li>
          <li>
            <Link href="">About</Link>
          </li>
          <li>
            <Link href="">Portfolio</Link>
          </li>
          <li>
            <Link href="">Contact</Link>
          </li>
        </ul>
      </nav>
      <Link href="#">
        <button>Contact Pls</button>
      </Link>
    </>
  );
}

function NavBar3({ normalStyle, activeStyle }: NavBarProps) {
  return (
    <>
      <Image
        src="logos/mobile/reactnative.svg"
        height={128}
        width={128}
        alt="Icon"
      />
      <nav>
        <ul className="navLinks">
          <li>
            <Link href="">Home</Link>
          </li>
          <li>
            <Link href="">About</Link>
          </li>
          <li>
            <Link href="">Portfolio</Link>
          </li>
          <li>
            <Link href="">Contact</Link>
          </li>
        </ul>
      </nav>
      <Link href="#">
        <button>Contact Pls</button>
      </Link>
    </>
  );
}

function NavBar4({ normalStyle, activeStyle }: NavBarProps) {
  return (
    <>
      <Image
        src="logos/mobile/reactnative.svg"
        height={128}
        width={128}
        alt="Icon"
      />
      <nav>
        <ul className="navLinks">
          <li>
            <Link href="">Home</Link>
          </li>
          <li>
            <Link href="">About</Link>
          </li>
          <li>
            <Link href="">Portfolio</Link>
          </li>
          <li>
            <Link href="">Contact</Link>
          </li>
        </ul>
      </nav>
      <Link href="#">
        <button>Contact Pls</button>
      </Link>
    </>
  );
}

export default function NavBar() {
  const activeStyle = " font-Ibarra text-[100px] text-[#ffffff]";
  const normalStyle = "font-Ibarra text-white opacity-50 text-[50px]";
  return (
    <header>
      <NavBar1 activeStyle={activeStyle} normalStyle={normalStyle} />
    </header>
  );
}



// #! usr/bin/bash
// echo "Hello World"
// function gitAddCommitPush() {
//   # Get current branch 
//   current=$(git branch | grep "*" | cut -b 3-)

//   # Get inline message
//   message=\'"$@"\'
//   # Add git files 
//   # and commit 
//   git add . --all && git commit -a -m "$message"

//   echo "Where to push"
//   read -i "$current" -e branch

//   echo ""
//   read 
//   # Push the commit to branch 
//   if [ "$yn" = y ]; then 
//     git push origin "$branch"
//   else
//     echo "Have a nOice Day!"
//   fi
// }

// gitAddCommitPush $l
