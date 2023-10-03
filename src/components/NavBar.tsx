import Link from "next/link";

export default function NavBar() {
    const activeStyle = " font-Ibarra text-[128px] text-[#ffffff]"
    const normalStyle = "font-Ibarra text-white opacity-50 text-[64px]"
    return <nav className="p-[50px] not-italic font-normal flex gap-12 bg-[#262525] z-[1] items-center justify-center">
        <Link href={"#"} className={normalStyle}>Home</Link>
        <Link href={"/about"} className={activeStyle}>About</Link>
        <Link href={"/portfolio"} className={normalStyle}>Portfolio</Link>
        <Link href={"/contact"} className={normalStyle}>Contract</Link>
        <div className=" font-"></div>
    </nav>
}