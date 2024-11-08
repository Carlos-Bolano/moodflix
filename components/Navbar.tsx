"use client";
import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import CloseMenu from "@/icons/CloseMenu";
import OpenMenu from "@/icons/OpenMenu";

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
      title: "moods",
      href: `/${locale}/moods`,
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
              onClick={handleMenu}
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
          {showMenu ? <CloseMenu /> : <OpenMenu />}
        </button>
      </nav>
    </header>
  );
}
