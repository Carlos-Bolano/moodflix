import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-4 text-center z-10">
      <div className="bg-[#faf7de]/40 backdrop-blur-sm max-w-max mx-auto rounded-xl border-2 px-2 border-[#faf7de]">
        <p className="text-center text-gray-600 text-sm drop-shadow-md">
          Created wtih <span className="text-red-400 text-lg animate-pulse"> ❤ </span> by{" "}
          <Link href="https://carlos-bolano.vercel.app/" target="_blank" rel="noreferrer">
            <span className="text-red-400 font-medium">Carlos Bolaño</span>
          </Link>
        </p>
        <p className="text-center text-gray-600 text-sm drop-shadow-md">
          &copy; {new Date().getFullYear()} Moodflix. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
