import FAQComponent from "@/components/FAQComponent";
import Email from "@/icons/Email";
import Github from "@/icons/Github";
import Linkedin from "@/icons/Linkedin";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const AboutPage = () => {
  const t = useTranslations("AboutPage");
  return (
    <section className="flex flex-col items-center py-10 z-10">
      <div className="flex flex-col items-center max-w-[900px] bg-yellow-50/50 backdrop-blur-sm border-2 border-white rounded-xl py-5">
        <article className="w-full flex flex-col items-center max-w-[900px] p-2 lg:px-5 pb-10">
          <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
            <Image
              src="https://carlos-bolano.vercel.app/me.webp"
              alt="developer"
              width={200}
              height={200}
              className="mt-5 w-50 h-50 rounded-xl border-2 border-red-400 -rotate-3"
            />
            <div className="text-center lg:text-start">
              <Link
                className="font-semibold text-slate-900 text-lg hover:underline transition-all duration-200 hover:text-red-400"
                href="https://carlos-bolano.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Carlos Bolaño
              </Link>
              <p className="mt-2 text-slate-700 drop-shadow-sm max-w-[450px] text-center lg:text-start">
                {t("aboutDev")}
              </p>
              <div className="flex gap-6 mt-3 justify-center lg:justify-start ">
                <Link
                  className="text-slate-700 transition-all duration-300 hover:-translate-y-1.5 hover:text-red-400 "
                  title="Email"
                  href="mailto:carlostutos828@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Email className="w-8 h-8" />
                </Link>
                <Link
                  title="Github"
                  href="https://github.com/Carlos-Bolano"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 transition-all duration-300 hover:-translate-y-1.5 hover:text-red-400 "
                >
                  <Github className="w-8 h-8" />
                </Link>
                <Link
                  title="LinkedIn"
                  href="https://www.linkedin.com/in/carlos-bola%C3%B1o-716926191/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 transition-all duration-300 hover:-translate-y-1.5 hover:text-red-400 "
                >
                  <Linkedin className="w-8 h-8" />
                </Link>
              </div>
            </div>
          </div>
        </article>
        <article className=" flex flex-col items-center  max-w-[900px] p-2 lg:px-5">
          <h1 className="font-semibold mt-5 text-center text-3xl sm:text-4xl text-red-400 drop-shadow-sm ">
            {t("whatsMoodflix.title")}
          </h1>
          <p className="mt-5 text-center text-slate-700 drop-shadow-sm">{t("whatsMoodflix.description")}</p>
        </article>
        <article className="  flex flex-col items-center  max-w-[900px] p-2 lg:px-5">
          <h1 className="font-semibold mt-5 text-center text-3xl sm:text-4xl text-red-400 drop-shadow-sm ">
            {t("howItWorks.title")}
          </h1>
          <div>
            <p className="mt-5 text-center text-slate-700 drop-shadow-sm">{t("howItWorks.description1")}</p>
            <p className="mt-5 text-center text-slate-700 drop-shadow-sm">{t("howItWorks.description2")}</p>
          </div>
        </article>
        <article className="flex flex-col items-center  max-w-[1000px] p-2 lg:px-5">
          <h1 className="font-semibold mt-5 text-center text-3xl sm:text-4xl text-red-400 drop-shadow-sm ">
            {t("technology.title")}
          </h1>
          <div>
            <p className="my-5 text-center text-slate-700 drop-shadow-sm">{t("technology.description1")}</p>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(270px,1fr))] text-center">
              <div>
                <h2 className="font-semibold">{t("technology.tech.next.title")}</h2>
                <p className="text-slate-700 drop-shadow-sm">{t("technology.tech.next.description")}</p>
              </div>
              <div>
                <h2 className="font-semibold"> {t("technology.tech.gemini.title")} </h2>
                <p className="text-slate-700 drop-shadow-sm">{t("technology.tech.gemini.description")}</p>
              </div>
              <div>
                <h2 className="font-semibold">{t("technology.tech.TMDB.title")}</h2>
                <p className="text-slate-700 drop-shadow-sm">{t("technology.tech.TMDB.description")}</p>
              </div>
            </div>
            <p className="my-5 text-center text-slate-700 drop-shadow-sm">{t("technology.description2")}</p>
          </div>
        </article>
        <FAQComponent />
        <article className="  flex flex-col items-center  max-w-[900px] p-2 lg:px-5">
          <h1 className="font-semibold mt-5 text-center text-3xl sm:text-4xl text-red-400 drop-shadow-sm ">
            {t("thanks.title")}
          </h1>
          <div>
            <p className="mt-5 text-center text-slate-700 drop-shadow-sm">{t("thanks.description")}</p>
          </div>
          <div className="flex gap-6 mt-3 justify-center lg:justify-start ">
            <Link
              className="text-slate-700 transition-all duration-300 hover:-translate-y-1.5 hover:text-red-400 "
              title="Email"
              href="mailto:carlostutos828@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Email className="w-9 h-9" />
            </Link>
            <Link
              title="Github"
              href="https://github.com/Carlos-Bolano"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 transition-all duration-300 hover:-translate-y-1.5 hover:text-red-400 "
            >
              <Github className="w-9 h-9" />
            </Link>
            <Link
              title="LinkedIn"
              href="https://www.linkedin.com/in/carlos-bola%C3%B1o-716926191/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-700 transition-all duration-300 hover:-translate-y-1.5 hover:text-red-400 "
            >
              <Linkedin className="w-9 h-9" />
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
};

export default AboutPage;
