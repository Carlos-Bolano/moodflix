import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

import type { Metadata } from "next";
import "../globals.css";
import { Poppins } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EmojiRain from "@/components/EmojiRain";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Moodflix - Movie Recommendations Based on Your Mood",
  description:
    "Moodflix is an AI-powered movie recommendation app that suggests movies based on your mood. Discover your next movie based on how you feel!",
  icons: {
    icon: [
      {
        url: "/icon.png",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "Moodflix: Movie Recommendations Based on Your Mood",
    description:
      "Moodflix is an AI-powered movie recommendation app that suggests movies based on your mood. Discover your next movie based on how you feel!",
    url: "https://moodflix-by-calisto.vercel.app",
    siteName: "Moodflix",
    images: [
      {
        url: "https://moodflix-by-calisto.vercel.app/moodflix-latest-screenshot.png",
        width: 1200,
        height: 630,
        alt: "Moodflix - Movie recommendations based on your mood",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Moodflix: Movie Recommendations Based on Your Mood",
    description:
      "Moodflix is an AI-powered movie recommendation app that suggests movies based on your mood. Discover your next movie based on how you feel!",
    site: "https://moodflix-by-calisto.vercel.app",

    images: [
      {
        url: "https://moodflix-by-calisto.vercel.app/moodflix-latest-screenshot.png",
        width: 1200,
        height: 630,
        alt: "Moodflix - Movie recommendations based on your mood",
      },
    ],
  },
  themeColor: "#000000",
};

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={poppins.className}>
        <NextIntlClientProvider messages={messages}>
          <div className="relative min-h-screen justify-between flex flex-col ">
            <Navbar />
            <main className="pt-8 md:pt-20 container mx-auto px-2">{children}</main>
            <Footer />
            <EmojiRain />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
