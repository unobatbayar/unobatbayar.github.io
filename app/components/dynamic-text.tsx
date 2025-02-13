﻿"use client"
import { useState, useEffect } from 'react';

const DynamicText = () => {
  // Dynamic texts based on your interests
  const texts = [
    'building apps',
    'playing chess',
    'cryptocurrency',
    'streaming',
    'building websites',
    'security and privacy',
    'going for a run'
  ];

  // Corresponding colors for each theme
  const colors = [
    'text-teal-500',        // Building apps (technology) - Cool and innovative
    'text-indigo-500',      // Chess (strategy, intellectual) - Deep and thoughtful
    'text-green-600',       // Cryptocurrency (growth, financial stability) - Strong and dynamic
    'text-pink-500',        // Streaming (entertainment, engagement) - Bold and lively
    'text-cyan-500',        // Websites (creativity, calm) - Bright and fresh
    'text-red-600',         // Privacy & Security (alert, security) - Strong, assertive
    'text-yellow-500'       // Running (energy, vitality) - Energizing and active
  ];

  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState(texts[0]);
  const [currentColor, setCurrentColor] = useState(colors[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);  // Loop through texts
      setCurrentColor(colors[(currentTextIndex + 1) % colors.length]); // Loop through colors
    }, 7000); // Change text and color every n seconds

    return () => clearInterval(interval);  // Clean up the interval when component unmounts
  }, [currentTextIndex]);

  useEffect(() => {
    setDisplayText(texts[currentTextIndex]);  // Update the text when the index changes
  }, [currentTextIndex]);

  return (
    <div className="text-xl font-semibold">
      I like <span className={`${currentColor}`}>{displayText}</span>
    </div>
  );
};

export default DynamicText;
