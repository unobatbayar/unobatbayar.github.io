"use client"
import { useState, useEffect } from 'react';

const DynamicText = () => {
  const texts = [
    'building things',
    'security and privacy',
    'technology',
    'Judo',
    'Vagabond (manga)',
    'Nujabes ♫'
  ];
  
  const colors = [
    'text-pink-500',
    'text-green-500',
    'text-yellow-500',
    'text-purple-500',
    'text-red-500',
    'text-blue-500',
    'text-indigo-500',
    'text-teal-500',
    'text-orange-500',
    'text-emerald-500',
    'text-fuchsia-500',
    'text-cyan-500',
    'text-rose-500',
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState(texts[0]);
  const [colorClass, setColorClass] = useState(colors[0]);
  const [shuffledIndexes, setShuffledIndexes] = useState<number[]>([]);

  // Helper: Shuffle array using Fisher-Yates algorithm
  const shuffleArray = (arr: number[]) => {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  useEffect(() => {
    // Initialize shuffled order once
    setShuffledIndexes(shuffleArray(texts.map((_, i) => i)));
  }, []);

  useEffect(() => {
    if (shuffledIndexes.length === 0) return;

    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % shuffledIndexes.length;
      setCurrentTextIndex(shuffledIndexes[index]);
    }, 3000);

    return () => clearInterval(interval);
  }, [shuffledIndexes]);

  useEffect(() => {
    setDisplayText(texts[currentTextIndex]);
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setColorClass(randomColor);
  }, [currentTextIndex]);

  return (
    <div className="text-xl font-semibold">
      I like <span className={colorClass}>{displayText}</span>.
    </div>
  );
};

export default DynamicText;
