"use client";
import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="bg-[#faf7de]/50 fixed left-0 right-0 py-4 w-full backdrop-blur-sm z-50">
      <nav className="flex justify-between items-center w-[90%] gap-4 max-w-[1600px] mx-auto">
        <Logo />
        <div
          className={`bg-[#faf7de]/90 backdrop-blur-sm text-slate-700 lg:bg-transparent gap-6 transition-all duration-300 ease-in-out fixed w-[75%] h-screen -left-full bottom-0 top-0 ${
            showMenu ? "left-0" : "-left-full"
          } lg:static flex flex-col lg:flex-row items-center pt-52 gap-x-6 lg:p-0 lg:max-w-max lg:h-full`}
        >
          {/* TODO: create a list of items */}
          <Link className={``} href="/">
            Home
          </Link>
          <Link href="/">Choose</Link>
          <div className="px-2 bg-slate-300 rounded-sm">English</div>
          {/* TODO: create a language changer */}
        </div>

        <button className="lg:hidden" onClick={handleMenu}>
          {showMenu ? "close" : "Open"}
          {/* TODO: put icons  */}
        </button>
      </nav>
    </header>
  );
}
