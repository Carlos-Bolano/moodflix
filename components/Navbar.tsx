"use client";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("Navbar");

  const navLinks = [
    {
      title: "home",
      href: `/${locale}`,
    },
    {
      title: "about",
      href: `/${locale}/about`,
    },
    {
      title: "choose",
      href: `/${locale}/choose`,
    },
  ];

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="bg-[#faf7de]/70 border-b-2 border-b-[#faf7de] fixed left-0 right-0 py-4 w-full backdrop-blur-sm z-50">
      <nav className="flex justify-between items-center w-[90%] gap-4 max-w-[1600px] mx-auto">
        <Logo />
        <div
          className={` text-slate-700 gap-6 transition-all duration-300 ease-in-out fixed w-[75%] h-screen -left-full bottom-0 top-0 ${
            showMenu ? "left-0 bg-[#faf7de]/95 backdrop-blur-sm" : "-left-full"
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
              {t(tab.title)}
            </Link>
          ))}
          <LanguageSwitcher />
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
