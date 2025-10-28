"use client"
import { useState, useEffect } from 'react';

const DynamicText = () => {
  // Dynamic texts based on your interests
  const texts = [
    'building things',
    'security and privacy',
    'technology',
    'Judo',
    'Vagabond (manga)',
    'Nujabes'
  ];
  
  // Beautiful colors 
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);  // Loop through texts
    }, 3000); // Change text and color every n seconds

    return () => clearInterval(interval);  // Clean up the interval when component unmounts
  }, [currentTextIndex]);

  useEffect(() => {
    setDisplayText(texts[currentTextIndex]);  // Update the text when the index changes
    // Pick a random color each time the text changes
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
