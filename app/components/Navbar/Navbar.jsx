"use client";
import {
  Briefcase,
  ChevronRight,
  Mail,
  Menu,
  Rocket,
  User,
  X,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SiLichess } from "react-icons/si";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

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

          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(true)}
              className="ps-2 rounded-xl text-gray-700 focus:outline-none transition"
              aria-label="open menu"
            >
              <Menu size={26} />
            </button>
          </div>
        </div>

        <div
          className={`fixed inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
            isOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setIsOpen(false)}
        />

        <aside
          className={`fixed top-0 right-0 z-99 w-80 max-w-[85vw] h-full bg-black/80 shadow-2xl transition-transform duration-300 ease-out md:hidden flex flex-col ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-5 border-b border-gray-100">
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg text-white"
              aria-label="close menu"
            >
              <X size={22} />
            </button>
          </div>

          <div className="flex-1 py-4 px-3 space-y-1 overflow-y-auto">
            {navLinks.map((link) => {
              const Icon = link.ico;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between p-3.5 rounded-xl text-white/80 font-medium hover:bg-blue-50 hover:text-blue-600 transition group"
                >
                  <div className="flex items-center gap-3">
                    {Icon}
                    <span>{link.name}</span>
                  </div>
                  <ChevronRight
                    size={16}
                    className="text-white/80 group-hover:text-blue-600 transition"
                  />
                </Link>
              );
            })}
            <a
              href="#contact"
              className="w-full inline-block text-center py-5 mt-2 dark:bg-neon-green/50 bg-neon-green/30 border border-neon-green/50 px-5 text-white rounded-full text-sm font-semibold hover:bg-neon-green hover:text-black transition-all shadow-lg shadow-emerald-500/30 hover:shadow-emerald-600/60 cursor-pointer"
            >
              Hire Me
            </a>
          </div>
        </aside>
      </div>
    </nav>
  );
}
