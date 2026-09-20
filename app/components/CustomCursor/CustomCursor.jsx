"use client";
import { useMotionValue, useSpring, motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [cursorX, cursorY, isVisible]);
  if (typeof window !== "undefined" && window.innerWidth < 768) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full border border-neon-green pointer-events-none z-999 flex items-center justify-center mix-blend-difference"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
    >
      <div className="w-1 h-1 bg-neon-green rounded-full"></div>
    </motion.div>
  );
}
