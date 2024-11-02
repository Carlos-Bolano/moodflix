import { Emojis } from "@/constans";

export const generateRandomEmoji = () => {
  const randomEmoji = Emojis[Math.floor(Math.random() * Emojis.length)];
  const randomLeft = Math.floor(Math.random() * 100);
  return { id: Date.now(), emoji: randomEmoji, left: `${randomLeft}%` };
};
