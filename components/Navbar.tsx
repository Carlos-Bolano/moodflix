"use client";
import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Choose",
      href: "/choose",
      isWorking: true,
    },
  ];

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="bg-[#faf7de]/90  border-b-2 border-b-[#faf7de] fixed left-0 right-0 py-4 w-full backdrop-blur-sm z-50">
      <nav className="flex justify-between items-center w-[90%] gap-4 max-w-[1600px] mx-auto">
        <Logo />
        <div
          className={`bg-[#faf7de]/95 backdrop-blur-sm text-slate-700 lg:bg-transparent gap-6 transition-all duration-300 ease-in-out fixed w-[75%] h-screen -left-full bottom-0 top-0 ${
            showMenu ? "left-0" : "-left-full"
          } lg:static flex flex-col lg:flex-row items-center pt-52 gap-x-6 lg:p-0 lg:max-w-max lg:h-full`}
        >
          {navLinks.map((tab) => (
            <Link
              className={`${
                pathname === tab.href ? "text-red-400 drop-shadow-md" : ""
              } hover:drop-shadow-md transition-all duration-300 ease-in-out`}
              href={tab.href}
              key={tab.title}
            >
              {tab.title}
            </Link>
          ))}
          <div className="px-2 rounded-md flex items-center justify-between gap-1 bg-slate-300 text-gray-600  cursor-pointer">
            <Image src="/logos/flag-usa.png" alt="usa flag" width={25} height={25} />
            <span>English</span>
          </div>
          {/* TODO: create a language changer */}
        </div>

        <button
          className="lg:hidden transition-all duration-700 ease-in-out text-slate-700"
          onClick={handleMenu}
          title="Menu button"
        >
          {showMenu ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          )}
        </button>
      </nav>
    </header>
  );
}
