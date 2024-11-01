"use client";

import { useLocale } from "next-intl";
import { Locale } from "@/config";
import { Link, usePathname } from "@/i18n/routing";
import Image from "next/image";

export default function LanguageSwitcher() {
  return (
    <div className="flex gap-2">
      <LocaleLink locale="en" />
      <LocaleLink locale="es" />
    </div>
  );
}

function LocaleLink({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const isActive = useLocale() === locale;

  return (
    <Link
      className={`flex items-center justify-center gap-1 rounded-md px-2 ${
        isActive ? "bg-red-400 text-white shadow-md drop-shadow-md" : "bg-slate-200 text-gray-800"
      }`}
      href={pathname}
      locale={locale}
    >
      <h6 className="block">{locale.toUpperCase()}</h6>
      <Image src={`/logos/flag-${locale}.png`} alt={locale + " flag"} width={25} height={25} />
    </Link>
  );
}
