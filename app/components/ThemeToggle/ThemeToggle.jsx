"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa6";
import { CgSun } from "react-icons/cg";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-9 h-9" />;
  }

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="bg-transparent cursor-pointer p-2 transition-all flex items-center justify-center"
      aria-label="Toggle Theme"
    >
      {isDark ? (
        <CgSun size={20} className="text-white hover:animate-spin" />
      ) : (
        <FaMoon size={20} className="text-black hover:animate-spin" />
      )}
    </button>
  );
}
