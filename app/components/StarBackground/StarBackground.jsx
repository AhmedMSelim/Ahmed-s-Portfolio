"use client";
import React, { useEffect, useState } from "react";

export default function StarBackground() {
  const [stars, setStars] = useState([]);
  const [shootingStars, setshootingStars] = useState([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 60 }).map(() => ({
      size: Math.random() * 2 + 1,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 5,
      duration: Math.random() * 3 + 2,
      opacity: Math.random() * 0.8 + 0.2,
    }));

    const generatedShootingStars = Array.from({ length: 5 }).map(() => ({
      top: Math.random() * 50,
      left: Math.random() * 100,
      delay: Math.random() * 20,
    }));

    setStars(generatedStars);
    setshootingStars(generatedShootingStars);
  }, []);
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-gray-200 dark:bg-cosmic-black" />
      {/* Stars*/}
      <div className="absolute inset-0 ">
        {stars.map((star, i) => (
          <div
            key={`star-${i}`}
            className="absolute rounded-full bg-black dark:bg-white animate-pulse"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              top: `${star.top}%`,
              left: `${star.left}%`,
              opacity: star.opacity,
              animationDelay: `${star.delay}s`,
              animationDirection: `${star.duration}s`,
            }}
          ></div>
        ))}
      </div>
      {/* Shooting Stars*/}
      <div className="absolute inset-0 ">
        {shootingStars.map((star, i) => (
          <div
            key={`shooting-${i}`}
            className="absolute w-0.5 h-24 bg-linear-to-t from-transparent via-black dark:via-white to-transparent rotate-45 animate-shooting-star"
            style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              animationDelay: `${star.delay}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
