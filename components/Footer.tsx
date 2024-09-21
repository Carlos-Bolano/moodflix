import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="py-4 text-center">
      <p className="text-center text-gray-500 text-sm">
        Created wtih{" "}
        <span className="text-red-400 text-lg animate-pulse"> ❤ </span> by{" "}
        <Link
          href="https://carlos-bolano.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <span className="text-red-400 font-semibold">Carlos Bolaño</span>
        </Link>
      </p>
      <p className="text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Moodflix. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
