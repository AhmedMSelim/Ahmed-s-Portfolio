"use client";
import {
  useMotionValue,
  useSpring,
  motion,
  useTransform,
  delay,
} from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import Social from "../Social/Social";

export default function Hero() {
  const containerRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 100, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 100, damping: 30 });
  const rotateX = useTransform(mouseYSpring, [-300, 300], [10, -10]);
  const rotateY = useTransform(mouseXSpring, [-300, 300], [-10, 10]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      x.set(clientX - innerWidth / 2);
      y.set(clientY - innerHeight / 2);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y]);

  const buttonRef = useRef(null);
  const [btnPos, setBtnPos] = useState({ x: 0, y: 0 });

  const handleBtnMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } =
      buttonRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    setBtnPos({ x: (clientX - centerX) * 0.4, y: (clientY - centerY) * 0.4 });
  };

  const handleBtnMouseLeave = () => {
    setBtnPos({ x: 0, y: 0 });
  };

  const headline = "Ahmed Magdy";
  const words = headline.split(" ");
  return (
    <section
      ref={containerRef}
      className="min-h-screen items-center justify-center py-20 overflow-hidden"
    >
      <div className="w-full md:w-[95%] px-2 mx-auto md:px-6 flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6 z-10">
          {/* Left Text Content*/}
          <div className="overflow-hidden">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="dark:text-neon-green text-green-600 font-semibold text-[13px] tracking-widest text-sm uppercase flex items-center gap-2"
            >
              <span className="w-4 h-px bg-green-600" />
              Creative Developer & UI/UX Expert
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 1.2,
            }}
            className="text-green-500 text-xl md:text-2xl max-w-xl leading-relaxed"
          >
            Hello, I'm
          </motion.p>
          <h1 className="text-5xl md:text-7xl text-neon-green font-bold leading[1.1] tracking-tight">
            {words.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                  ease: [0.2, 0.65, 0.3, 0.9],
                }}
                className="inline-block mr-[0.2em]"
              >
                {word}
              </motion.span>
            ))}
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 1.2,
            }}
            className="text-slate-600 dark:text-white text-2xl md:text-4xl max-w-xl leading-relaxed"
          >
            Frontend Developer
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 1.2,
            }}
            className="text-slate-600 dark:text-slate-400 text-lg md:text-xl max-w-xl leading-relaxed"
          >
            Specialized to building fast, scalable, and user-centric web
            applications. My expertise lies in the React ecosystem, where I
            leverage Next.js to create seamless, SEO-friendly experiences that
            don’t compromise on performance.
          </motion.p>

          <div className="mx-auto md:mx-0 flex flex-col md:flex-row gap-8 md:gap-4 mt-4">
            <motion.a
              ref={buttonRef}
              href="#projects"
              onMouseMove={handleBtnMouseMove}
              onMouseLeave={handleBtnMouseLeave}
              animate={{ x: btnPos.x, Y: btnPos.y }}
              transition={{ TYPE: "spring", stiffness: 150, damping: 15 }}
              whileTap={{ scale: 0.95 }}
              className="relative text-center px-8 py-4 bg-emerald-600 rounded-full font-bold text-white shadow-lg shadow-emerald-500 hover:shadow-emerald-600/60 cursor-pointer transition-shadow overflow-hidden group"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-linear-to-r from-emerald-600 to-[#1eb0b0] opacity-0 group-hover:opacity-1000 transition-opacity duration-300" />
            </motion.a>

            <motion.a
              href="/pdf/Ahmed_Magdy_Frontend_Developer_CV.pdf"
              download="Ahmed_Magdy_Frontend_Developer_CV"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="flex gap-2 px-8 py-4 border border-white/10 rounded-full font-bold text-black dark:text-white transition-colors dark:bg-neon-green/10 bg-neon-green/50 hover:bg-neon-green hover:text-black shadow-lg shadow-emerald-500/30 hover:shadow-emerald-600/60 cursor-pointer"
            >
              <IoDocumentTextOutline size={20} />
              <p>Download Cv</p>
            </motion.a>
          </div>
        </div>

        <motion.div
          style={{ rotateX, rotateY, perspective: 1000 }}
          className="relative flex justify-center items-center"
        >
          <div className="w-80 h-80 md:w-115 md:h-115 rounded-2xl relative">
            <div className="absolute inset-0 bg-linear-to-br from-emerald-500 via-blue-400 to-green-500 rounded-2xl opacity-40 blur-3xl animate-pulse" />
            <div className="absolute inset-4 bg-cosmic-blue/80 backdrop-blur-3xl rounded-2xl border border-white/10 shadow-[inner_0_0_50px_rgba(255,255,255,0.1)] overflow-hidden">
              {[
                ...Array(20).map((_, i) => (
                  <div
                    key={i}
                    className="absolute rounded-2xl bg-white/20"
                    style={{
                      width: Math.random() * 20 + 5 + "px",
                      height: Math.random() * 20 + 5 + "px",
                      top: Math.random() * 100 + "%",
                      left: Math.random() * 100 + 5 + "%",
                    }}
                  />
                )),
              ]}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div className="w-70 h-70 md:w-105 md:h-105 bg-[url('/assets/developer.webp')] bg-cover bg-center bg-no-repeat drop-shadow-[0_0_20px_rgba(70,120,40,0.2)] rounded-2xl" />
              </div>
            </div>
          </div>
          <div className="absolute inset-0 pointer-events-none">
            {[Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ rotate: 360 }}
                transition={{
                  duration: 10 + i * 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-12.5 rounded-full border border-white/5"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
