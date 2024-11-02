import { useTranslations } from "next-intl";

const Loader = () => {
  const t = useTranslations("Loader");
  return (
    <div>
      <div className="flex space-x-2 justify-center items-center">
        <span className="sr-only">Loading...</span>
        <div className="h-8 w-8 bg-red-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
        <div className="h-8 w-8 bg-red-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
        <div className="h-8 w-8 bg-red-400 rounded-full animate-bounce"></div>
      </div>
      <span className="text-center text-sm text-slate-600 drop-shadow-sm">{t("loading")}</span>
    </div>
  );
};

export default Loader;
