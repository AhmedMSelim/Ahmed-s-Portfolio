"use client";
import { motion, animate, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { FaReact } from "react-icons/fa6";
import { SiNextdotjs } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { SiTanstack } from "react-icons/si";
import { AiTwotoneDatabase } from "react-icons/ai";
import { SiModelcontextprotocol } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const SkillCircle = ({ title, icon: Icon, index, color }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isInView) {
      const controls = animate(isMobile ? 100 : 0, 100, {
        duration: 2,
        onUpdate: (value) => setCount(Math.floor(value)),
        ease: "easeOut",
      });
      return () => controls.stop();
    }
  }, [isInView]);

  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (count / 100) * circumference;
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5, scale: 1.05 }}
      className="flex flex-col items-center gap-4 group:"
    >
      <div className="relative w-24 h- 24 md:w-32 md:h-32 flex items-center justify-center ">
        <svg className="w-full h-full transform -rotate-90">
          <circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="transparent"
            stroke="currentColor"
            strokeWidth="6"
            className="text-white/5"
          />
          <motion.circle
            cx="50%"
            cy="50%"
            r={radius}
            fill="transparent"
            stroke="currentColor"
            strokeWidth="6"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={isInView ? { strokeDashoffset: offset } : {}}
            transition={
              isMobile ? { duration: 0 } : { duration: 2, ease: "easeOut" }
            }
            className="text-neon-green drop-shadow-[0_0_8px_rgba(70,120,40,0.2)]"
          />
        </svg>
        <div
          className={`absolute group flex flex-col items-center justify-center ${color}`}
        >
          <motion.div
            initial={isMobile ? { opacity: 1 } : { opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={isMobile ? { delay: 0 } : { delay: 2 }}
          >
            {Icon}
          </motion.div>
        </div>
      </div>
      <h3 className="text-slate-600 dark:text-slate-300 font-medium group-hover:text-white transition-colors">
        {title}
      </h3>
    </motion.div>
  );
};

export default function Skills() {
  const frontend = [
    {
      title: "HTML5",
      icon: <FaHtml5 size={30} />,
      color: "text-[#DB4C24]",
    },
    {
      title: "CSS3",
      icon: <IoLogoCss3 size={30} />,
      color: "text-[#1579B8]",
    },
    {
      title: "JavaScript",
      icon: <IoLogoJavascript size={30} />,
      color: "text-[#E2CC1C]",
    },
    {
      title: "TypeScript",
      icon: <SiTypescript size={30} />,
      color: "text-[#0076C6]",
    },
    {
      title: "Tailwind CSS",
      icon: <RiTailwindCssFill size={30} />,
      color: "text-[#16B5B3]",
    },
    {
      title: "Redux",
      icon: <SiRedux size={30} />,
      color: "text-[#7248B6]",
    },
    {
      title: "React",
      icon: <FaReact size={30} />,
      color: "text-[#5ED3F3]",
    },
    {
      title: "Next.js",
      icon: <SiNextdotjs size={30} />,
      color: "",
    },
  ];

  const tools = [
    {
      title: "TanStack Query",
      icon: <SiTanstack size={30} />,
      color: "text-[#B6D880]",
    },
    {
      title: "RESTful APIs",
      icon: <AiTwotoneDatabase size={30} />,
      color: "text-[#445762]",
    },
    {
      title: "Context API",
      icon: <SiModelcontextprotocol size={30} />,
      color: "text-[#F7CA58]",
    },
    {
      title: "Bootstrap",
      icon: <FaBootstrap size={30} />,
      color: "text-[#8210F5]",
    },
    {
      title: "Git",
      icon: <FaGitAlt size={30} />,
      color: "text-[#E84D30]",
    },
    {
      title: "Github",
      icon: <FaGithub size={30} />,
      color: "",
    },
  ];

  return (
    <section className="w-full md:w-[95%] px-2 mx-auto md:px-6 pt-20 relative">
      <div className="mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-4 text-green-600"
        >
          My Specialized Skillset
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
        >
          Leveraging cutting-edge technologies and deep motion design expertise
          to create experiences that resonate.
        </motion.p>
      </div>
      <h3 className="text-slate-800 dark:text-white font-bold text-2xl md:text-4xl">
        Frontend
      </h3>
      <div className="glassmorphism rounded-4xl p-5 md:p-8 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-neon-green/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-violet/10 blur-[100px] rounded-full" />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-x-8 relative z-10">
          {frontend.map((skill, i) => (
            <SkillCircle key={i} {...skill} index={i} />
          ))}
        </div>
      </div>

      <h3 className="text-slate-800 dark:text-white font-bold text-2xl md:text-4xl">
        Tools & Libs
      </h3>
      <div className="glassmorphism rounded-4xl p-5 md:p-8 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-neon-green/10 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-neon-violet/10 blur-[100px] rounded-full" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-y-12 gap-x-8 relative z-10">
          {tools.map((skill, i) => (
            <SkillCircle key={i} {...skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
