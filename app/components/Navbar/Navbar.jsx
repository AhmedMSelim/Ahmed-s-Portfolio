"use client";
import { Briefcase, Mail, Rocket, User } from "lucide-react";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SiLichess } from "react-icons/si";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", ico: <Rocket size={18} /> },
    { name: "Skills", href: "#skills", ico: <User size={18} /> },
    { name: "Projects", href: "#projects", ico: <Briefcase size={18} /> },
    { name: "Contact", href: "#contact", ico: <Mail size={18} /> },
  ];
  return (
    <nav
      className={`fixed bg-white/50 dark:bg-black/50 top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? "py-4 glassmorphism" : "py-6 bg-transparent"}`}
    >
      <div className="w-full md:w-[95%] mx-auto px-2 md:px-6 flex justify-between items-center">
        <motion.a
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl flex gap-1 items-center font-bold tracking-tighter"
        >
          <SiLichess size={30} className="text-neon-green me-2" />
          <span className="hidden md:flex text-black dark:text-white">
            Ahmed-
          </span>
          <span className="text-neon-green">Portfolio</span>
        </motion.a>

        <div className="hidden lg:flex gap-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative group text-black dark:text-slate-300 hover:text-neon-green transition-colors flex items-center gap-2 text-sm font-medium"
            >
              {link.ico}
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px transition-all bg-neon-green duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </div>
        <div className="flex gap-2">
          <ThemeToggle />
          <motion.a
            href="#contact"
            whileHove={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="dark:bg-neon-green/10 bg-neon-green/30 border border-neon-green/50 px-5 py-2 text-black dark:text-white rounded-full text-sm font-semibold hover:bg-neon-green hover:text-black transition-all shadow-lg shadow-emerald-500/30 hover:shadow-emerald-600/60 cursor-pointer"
          >
            Hire Me
          </motion.a>
        </div>
      </div>
    </nav>
  );
}
