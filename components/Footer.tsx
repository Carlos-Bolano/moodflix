import { useTranslations } from "next-intl";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();
  const t = useTranslations("Footer");
  return (
    <footer className="py-4 text-center z-10">
      <div className="bg-[#faf7de]/40 backdrop-blur-sm max-w-max mx-auto rounded-xl border-2 px-2 border-[#faf7de]">
        <p className="text-center text-gray-600 text-sm drop-shadow-md">
          {t("createdWith")} <span className="text-red-400 text-lg animate-pulse"> ❤ </span> {t("by")}
          <Link href="https://carlos-bolano.vercel.app/" target="_blank" rel="noreferrer">
            <span className="text-red-400 font-medium"> Carlos Bolaño</span>
          </Link>
        </p>
        <p className="text-center text-gray-600 text-sm drop-shadow-md">
          &copy; {year} Moodflix. {t("allRightsReserved")}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
