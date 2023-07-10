import React from "react";
import { useState } from "react";
import Hamburger from "hamburger-react";
import Link from "next/link";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Hamburger toggled={isOpen} toggle={setIsOpen} color="#000" /><span>MENU</span>
      <div
        className={`top-20 right-0 fixed bg-white w-[35vw] h-screen p-10 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-300`}
      >
        <div className="bg-white w-[35vw]">
        <h2 className="text-lg text-black">Menu</h2>
        <ul className="mt-10">
          <li className="text-black">
          <Link href="/" passHref onClick={() => setIsOpen(false)}>
            Home
             </Link>
            </li>
          <li className="text-black"><Link href="/about" passHref onClick={() => setIsOpen(false)} >About</Link></li>
          <li className="text-black"><Link href="/calendar" passHref onClick={() => setIsOpen(false)} >Calendar</Link></li>
          <li className="text-black"><Link href="/contact" passHref onClick={() => setIsOpen(false)}>Contact</Link> </li>
          <li className="text-black">
            <Link href="/login" passHref onClick={() => setIsOpen(false)}>
              Log In
            </Link>
          </li>
        </ul>
      </div>
      </div>
    </>
  );
}
