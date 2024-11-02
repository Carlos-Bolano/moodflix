"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Emoji } from "@/constans";
import { generateRandomEmoji } from "@/utils/GenerateEmojis";

export default function EmojiRain() {
  const [emojiArray, setEmojiArray] = useState<Emoji[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setEmojiArray((prevEmojis) => [...prevEmojis, generateRandomEmoji()]);

      setEmojiArray((prevEmojis) => prevEmojis.filter((emoji) => Date.now() - emoji.id < 9000));
    }, 999);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="emojiRainContainer">
      {emojiArray.map(({ id, emoji, left }) => (
        <Image
          src={emoji}
          alt="emoji"
          key={id}
          className="emoji"
          style={{ left }}
          width={50}
          height={50}
          unoptimized={true}
        />
      ))}
    </div>
  );
}
