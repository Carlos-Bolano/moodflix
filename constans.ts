export type Genre = {
  id: number;
  name: string;
};

export const GENRES = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

//TODO: make a custom prompt to each mood
export const Moods = [
  {
    url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Neutral%20Face.png",
    title: "Neutral",
    prompt:
      "I'm feeling pretty neutral right now. I want to watch a movie that keeps me in this balanced, chill mood, nothing too emotional or intense.",
  },
  {
    url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Loudly%20Crying%20Face.png",
    title: "Sad",
    prompt:
      "I'm feeling sad, and I want to watch a movie that deepens this emotion, something that allows me to fully feel and process my sadness.",
  },
  {
    url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Beaming%20Face%20with%20Smiling%20Eyes.png",
    title: "Happy",
    prompt:
      "I'm in a happy mood, and I want to keep the good vibes going. Show me a movie that will make me even happier!",
  },
  {
    url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Angry%20Face.png",
    title: "Angry",
    prompt:
      "I'm feeling angry and I want to channel this emotion. Show me a movie that matches my intensity and lets me stay in this mood.",
  },
  {
    url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Fearful%20Face.png",
    title: "Fearful",
    prompt:
      "I'm feeling a bit fearful, and I want to dive deeper into that feeling. Show me a movie that will give me a thrill and keep me on edge.",
  },
  {
    url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Anxious%20Face%20with%20Sweat.png",
    title: "Anxious",
    prompt:
      "I'm feeling anxious, and I want a movie that lets me sit in that tension, something that heightens this anxious feeling.",
  },
  {
    url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Thinking%20Face.png",
    title: "Reflexive",
    prompt:
      "I'm in a reflective mood, and I want to watch a movie that keeps me deep in thought, something introspective or philosophical.",
  },
  {
    url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Woozy%20Face.png",
    title: "Brain-dead",
    prompt:
      "I feel totally brain-dead right now, and I want a movie that lets me stay in this state—something light, easy, and not too complicated.",
  },
  {
    url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Objects/Light%20Bulb.png",
    title: "Creative",
    prompt:
      "I'm feeling creative, and I want a movie that will inspire me even more, something artistic or imaginative that fuels my creativity.",
  },
  {
    url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Beating%20Heart.png",
    title: "Romantic",
    prompt:
      "I'm feeling romantic, and I want to watch a movie that enhances this mood, something that makes me feel even more in love.",
  },
  {
    url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Broken%20Heart.png",
    title: "Broken",
    prompt:
      "I'm heartbroken right now, and I want to watch a movie that lets me stay in that feeling, something that resonates with my pain.",
  },
  {
    url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People%20with%20activities/Person%20Rowing%20Boat%20Medium%20Skin%20Tone.png",
    title: "Adventurous",
    prompt:
      "I'm feeling adventurous, and I want to watch a movie that makes me feel even more excited for adventure and exploration.",
  },
  {
    url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20Holding%20Back%20Tears.png",
    title: "Nostalgic",
    prompt:
      "I'm feeling nostalgic, and I want to watch a movie that takes me back, something that makes me feel even more connected to the past.",
  },
  {
    url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Astonished%20Face.png",
    title: "Astonished",
    prompt:
      "I'm feeling amazed right now, and I want a movie that keeps me in that sense of wonder—something that makes me go 'wow!'",
  },
  {
    url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Hot%20Face.png",
    title: "Hot",
    prompt: "I'm feeling a little hot right now, iwant to wach some porns videos that make me feel hot.",
  },
  {
    url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Money-Mouth%20Face.png",
    title: "MoneyMaker",
    prompt:
      "I'm feeling ambitious and money-driven. Show me a movie that keeps me in that mindset, something about success and making it big.",
  },
  {
    url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Hand%20gestures/Flexed%20Biceps%20Medium%20Skin%20Tone.png",
    title: "Motivation",
    prompt:
      "I'm feeling super motivated, and I want to watch a movie that pumps me up even more, something inspiring that keeps my drive alive.",
  },
  {
    url: "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Exploding%20Head.png",
    title: "Wow",
    prompt:
      "I'm in a 'wow' mood and I want to keep it going. Show me something epic, mind-blowing, and visually stunning!",
  },
];
