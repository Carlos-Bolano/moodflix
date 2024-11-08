import { useTranslations } from "next-intl";
import { Button } from "./Button";
import Clapper from "@/icons/Clapper";

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
          className="focus:outline-red-400 resize-none border-2 p-4 w-full rounded-md text-gray-900 text-sm"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder={t("placeholder")}
          rows={3}
          cols={60}
          required
        />
        <Button disabled={loading} type="submit">
          <span className="block">{loading ? t("button.loading") : t("button.label")}</span>
          <Clapper />
        </Button>
      </form>
    </div>
  );
}
