"use client";
import { useEffect, useState } from "react";

const emojis = [
  "😀",
  "😁",
  "😂",
  "😃",
  "😄",
  "😅",
  "😇",
  "🥰",
  "😍",
  "😋",
  "😜",
  "😝",
  "🤗",
  "😔",
  "😢",
  "😭",
  "😡",
  "🤯",
  "😱",
  "🤔",
  "😳",
  "🥳",
  "🤪",
  "😬",
  "😴",
  "😮",
  "🤩",
  "🥺",
  "😤",
  "😺",
  "😻",
  "🧐",
];

interface Emoji {
  id: number;
  emoji: string;
  left: string;
}

export default function EmojiRain() {
  const [emojiArray, setEmojiArray] = useState<Emoji[]>([]);

  const generateRandomEmoji = () => {
    const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
    const randomLeft = Math.floor(Math.random() * 100);
    return { id: Date.now(), emoji: randomEmoji, left: `${randomLeft}%` };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setEmojiArray((prevEmojis) => [...prevEmojis, generateRandomEmoji()]);

      setEmojiArray((prevEmojis) =>
        prevEmojis.filter((emoji) => Date.now() - emoji.id < 9000)
      );
    }, 999);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="emojiRainContainer">
      {emojiArray.map((emoji) => (
        <span key={emoji.id} className="emoji" style={{ left: emoji.left }}>
          {emoji.emoji}
        </span>
      ))}
    </div>
  );
}
