"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaGithub } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";

const ProjectCard = ({
  title,
  category,
  description,
  image,
  live,
  git,
  index,
}) => {
  const cardRef = useRef(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const { left, top, width, height } =
      cardRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setRotate({ x: y * -20, y: x * 20 });
  };

  const handleMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
        rotateX: rotate.x,
        rotateY: rotate.y,
      }}
      className="relative group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-2xl glassmorphism aspect-4/3 border border-white/5 transition-colors group-hover:border-neon-green/40">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-100"
          style={{ backgroundImage: `URL(${image})` }}
        >
          <div className="absolute inset-0 bg-cosmic-black/40 group-hover:bg-cosmic-black/20 transition-colors" />
        </div>

        <div
          className={`absolute inset-0 flex flex-col justify-end p-8 translate-z-20 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-linear-to-t from-cosmic-black via-cosmic-black/60 to-transparent`}
        >
          <div
            className={`transform md:translate-y-4 group-hover:translate-y-0 transition-transform duration-300`}
          >
            <span className="text-neon-green text-xs font-bold uppercase tracking-wider">
              {category}
            </span>
            <h3 className="text-2xl font-bold mb-2 text-white">{title}</h3>
            <p className="text-slate-300 text-sm mb-6 line-clamp-2">
              {description}
            </p>

            <div className="flex gap-4">
              <a
                target="_blank"
                href={git}
                className="flex gap-2 p-2 bg-white/10 hover:bg-neon-green rounded-full transition-colors text-white"
              >
                <FaGithub size={18} /> <span>Source Code</span>
              </a>
              <a
                target="_blank"
                href={live}
                className="flex gap-2 p-2 bg-white/10 hover:bg-neon-green rounded-full transition-colors text-white"
              >
                <LuExternalLink size={18} /> <span>Live Demo</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeTab, setActiveTab] = useState("All");

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const categories = ["All", "Web App", "UI/UX"];

  const projects = [
    {
      title: "Social Media Application",
      category: "Web App",
      description:
        "SocialHub is a modern social media platform designed to let users connect, interact, and share content seamlessly.",
      image: "/assets/socialhub.webp",
      live: "https://social-hub-omega.vercel.app/login",
      git: "https://github.com/AhmedMSelim/SocialHub.git",
    },
    {
      title: "Adasa Lens",
      category: "Web App",
      description:
        "Adasa is a visual media platform designed for showcasing, sharing, and discovering high-quality photography.",
      image: "/assets/adasa.webp",
      live: "https://adasa-alpha-nine.vercel.app/",
      git: "https://github.com/AhmedMSelim/Adasa.git",
    },
    {
      title: "E-Commerce Application",
      category: "Web App",
      description:
        "E-Commerce Application is a modern online shopping platform designed to let users browse products, manage their cart, and complete purchases seamlessly.",
      image: "/assets/e-commerce.webp",
      live: "https://e-commerce-beta-beryl.vercel.app/",
      git: "https://github.com/AhmedMSelim/E-Commerce.git",
    },
    {
      title: "Contact Hub",
      category: "Web App",
      description:
        "ContactHub is a simple web application or tool  for managing and organizing contact information.",
      image: "/assets/contacthub.webp",
      live: "https://ahmedmselim.github.io/ContactHub/",
      git: "https://github.com/AhmedMSelim/ContactHub.git",
    },
    {
      title: "Game Arena",
      category: "Web App",
      description:
        "GameArena is a gaming-related web application or platform repository",
      image: "/assets/gamearena.webp",
      live: "https://ahmedmselim.github.io/GameArena/",
      git: "https://github.com/AhmedMSelim/GameArena.git",
    },
    {
      title: "Clarity",
      category: "Web App",
      description:
        "Clarity is a software repository  to provide clean, structured, and straightforward utility solutions.",
      image: "/assets/clarity.webp",
      live: "https://ahmedmselim.github.io/Clarity/",
      git: "https://github.com/AhmedMSelim/Clarity.git",
    },
    {
      title: "The UX Review",
      category: "UI/UX",
      description:
        "The UX Review Blog is a web application repository  to publish and share articles, insights, and reviews related to user experience design.",
      image: "/assets/ux.webp",
      live: "https://ahmedmselim.github.io/The-UX-Review-Blog/",
      git: "https://github.com/AhmedMSelim/The-UX-Review-Blog.git",
    },
  ];

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  const displayedProjects =
    isMobile && !showAll ? filteredProjects.slice(0, 3) : filteredProjects;
  return (
    <section className="w-full md:w-[95%] px-2 mx-auto pt-20 md:px-6 relative">
      <div className="mx-auto text-center flex flex-col gap-8 mb-16">
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl text-green-500 font-bold mb-4"
          >
            Featured <span className="text-gradient">Creations</span>
          </motion.h2>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 dark:text-slate-400"
          >
            A curated selection of my most ambitious projects where design meets
            performance.
          </motion.h2>
        </div>

        <div className="w-fit bg-black/70 dark:bg-white/5 p-1 rounded-full border border-white/10 overflow-x-auto no-scrollbar">
          {categories.map((category, i) => (
            <button
              key={i}
              onClick={() => {
                setActiveTab(category);
                setShowAll(false);
              }}
              className={`relative px-6 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap cursor-pointer ${activeTab === category ? "text-black dark:text-white" : "text-slate-400 hover:text-white"}`}
            >
              {activeTab === category && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bg-blue-500 inset-0 rounded-full shadow-[0_0_15px_rgba(70,120,40,0.2)]"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {displayedProjects.map((project, i) => (
            <ProjectCard key={i} {...project} index={i} />
          ))}
        </AnimatePresence>
        {isMobile && projects.length > 3 && (
          <div className="text-center mt-8 md:hidden">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2.5 cursor-pointer rounded-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300 shadow-lg active:scale-95"
            >
              {showAll ? "Show Less" : "Show More"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
