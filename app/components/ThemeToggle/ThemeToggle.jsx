"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa6";
import { CgSun } from "react-icons/cg";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme("dark");
  const [mounted, setMounted] = useState(false);

  // تجنب مشاكل الـ Hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="bg-transparent cursor-pointer p-2 transition-all"
    >
      {theme === "dark" ? (
        <CgSun size={20} className="text-white hover:animate-spin" />
      ) : (
        <FaMoon size={20} className="hover:animate-spin" />
      )}
    </button>
  );
}
