"use client"
import { useState, useEffect } from 'react';

const DynamicText = () => {
  // Dynamic texts based on your interests
  const texts = [
    'building apps',
    'playing chess',
    'security and privacy',
    'going for a run'
  ];


  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState(texts[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);  // Loop through texts
    }, 3000); // Change text and color every n seconds

    return () => clearInterval(interval);  // Clean up the interval when component unmounts
  }, [currentTextIndex]);

  useEffect(() => {
    setDisplayText(texts[currentTextIndex]);  // Update the text when the index changes
  }, [currentTextIndex]);

  return (
    <div className="text-xl font-semibold">
      I like <span className="text-blue-500">{displayText}</span>.
    </div>
  );
};

export default DynamicText;
