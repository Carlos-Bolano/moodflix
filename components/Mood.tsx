import { useTranslations } from "next-intl";
import Image from "next/image";

export interface Props {
  item: { url: string; key: string };
  mood: { title: string; url: string; key: string };
  handleMood: (mood: { title: string; url: string; key: string }) => void;
}
const Mood = ({ item, mood, handleMood }: Props) => {
  const t = useTranslations("MoodsPage");
  return (
    <button
      type="button"
      onClick={() => handleMood({ title: item.key, url: item.url, key: item.key })}
      key={item.url}
      className={`flex flex-col gap-1 justify-center items-center p-4 max-w-[270px] rounded-md cursor-pointer hover:bg-slate-500 text-gray-700 hover:text-white transition-all duration-100 ease-in-out drop-shadow-sm ${
        mood.title === item.key ? "bg-red-400 text-white" : ""
      }`}
    >
      {item.url && (
        <Image
          className="w-[50px] h-[50px]"
          src={item.url}
          width={50}
          height={50}
          alt={`${item.key} mood emoji`}
        />
      )}
      <span>{t(`Moods.${item.key}.title`)}</span>
    </button>
  );
};

export default Mood;
