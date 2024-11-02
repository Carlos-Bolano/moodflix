"use client";
import React, { useState } from "react";
import { useTranslations } from "next-intl";

const FAQComponent: React.FC = () => {
  const t = useTranslations("AboutPage");
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="w-full mx-auto px-4 py-8">
      <h2 className="font-semibold my-5 text-center text-3xl sm:text-4xl  text-red-400 drop-shadow-sm ">
        {t("faq.title")}
      </h2>
      <ul className="space-y-4 text-slate-700">
        {[1, 2, 3, 4].map((i) => (
          <li key={i} className="border-b border-gray-200">
            <button
              onClick={() => toggleFAQ(i)}
              className={`w-full flex justify-between items-center py-4 text-left text-lg font-medium  ${
                activeIndex === i ? "text-red-400" : ""
              }`}
              aria-expanded={activeIndex === i}
            >
              {t(`faq.question${i}.question`)}
              <span
                className={`ml-2 transition-transform duration-200 ${
                  activeIndex === i ? "rotate-180 text-red-400" : "rotate-0"
                }`}
              >
                ▼
              </span>
            </button>
            {activeIndex === i && (
              <p className="px-4 py-2 text-gray-600  rounded-md">{t(`faq.question${i}.answer`)}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQComponent;
