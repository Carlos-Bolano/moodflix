import { useTranslations } from "next-intl";
import Image from "next/image";

export default function SearchForm({
  prompt,
  setPrompt,
  loading,
  handleSubmit,
}: {
  prompt: string;
  setPrompt: (value: string) => void;
  loading: boolean;
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => Promise<void>;
}) {
  const t = useTranslations("HomePage.input");
  return (
    <div className="my-10">
      <form className="flex flex-col gap-4 justify-center items-center" onSubmit={handleSubmit}>
        <textarea
          className="focus:outline-red-400 border-2 p-4 w-full rounded-md text-gray-900 text-sm"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder={t("placeholder")}
          rows={3}
          cols={60}
          required
        />
        <button
          disabled={loading}
          type="submit"
          className="text-white bg-red-400 font-medium rounded-md text-sm px-5 py-2 text-center inline-flex items-center gap-1"
        >
          <span className="block">{loading ? t("button.loading") : t("button.label")}</span>

          <Image
            src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Clapper%20Board.png"
            alt="loader"
            width={20}
            height={20}
          />
        </button>
      </form>
    </div>
  );
}
