"use client";
import Link from "next/link";
import Image from "next/image";
import Sidebar from "./Sidebar";

function Navbar() {
  return (
    <nav className="flex items-center py-2 bg-white p-2 mt-0 fixed w-full z-10 top-0 drop-shadow">
      <div className="flex-auto">
        <Link href="/" passHref>
          <Image
            src="https://d1hd3rokkj5cpu.cloudfront.net/next/MovementLab_Logo_100h.png"
            width="301"
            height="100"
            className="text-2xl font-bold text-grey-800 pl-12"
            alt="MovementLab Logo"
          />
        </Link>
      </div>
      <div className="flex-auto">
        <Sidebar />
      </div>
    </nav>
  );
}

export default Navbar;