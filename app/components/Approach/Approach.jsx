"use client";
import React, { useState } from "react";

import { AnimatePresence, motion } from "motion/react";
import { CanvasRevealEffect } from "./CanvasRevealEffect";

export default function Approach() {
  return (
    <section className="w-full md:w-[95%] px-2 mx-auto md:px-6 pt-20 mb-16 text-center">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 text-green-600">
        My Approach
      </h1>
      <div className="py-20 flex flex-col lg:flex-row items-center justify-center gap-4">
        <Card
          title="Planning & Strategy"
          icon={<AceternityIcon order="Phase 1" />}
          description="We'll callaborate to map out your website's goals, target audience, and key functionalities, We'll discuss things like design preferences, content structure, and any specific features you want to include."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900"
          />
        </Card>
        <Card
          title="Developmebt & Progress Update"
          icon={<AceternityIcon order="Phase 2" />}
          description="Once we agree on the plane, From initial sketches to polished code, I keep you update every step of the way."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-black"
            colors={[
              [236, 72, 153],
              [232, 121, 249],
            ]}
            dotSize={2}
          />
          {/* Radial gradient for the cute fade */}
        </Card>
        <Card
          title="Development & Launch"
          icon={<AceternityIcon order="Phase 3" />}
          description="This is where the magic happens !
          Based on the approved design, I'll translate
          everything into functional code, bullding your
          website from the ground up."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
}

const Card = ({ title, icon, children, description }) => {
  const [show, setShow] = useState(false);
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onClick={() => setShow(!show)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border bg-green-300 dark:bg-transparent border-black/20 group/canvas-card flex items-center justify-center dark:border-white/20  max-w-sm w-full mx-auto p-4 relative lg:h-100 rounded-3xl"
    >
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
      <AnimatePresence>
        {(hovered || show) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-full w-full absolute inset-0"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
      <div className="relative z-20">
        <div
          className={`text-center group-hover/canvas-card:-translate-y-4 ${show && "translate-y-4"} absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 ${show && "opacity-0"} transition duration-200 w-full  mx-auto flex items-center justify-center`}
        >
          {icon}
        </div>
        <h2
          className={`dark:text-white text-3xl opacity-0 group-hover/canvas-card:opacity-100 ${show && "opacity-100"}  relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white ${show && "text-white"} group-hover/canvas-card:-translate-y-2 ${show && "translate-y-2"} transition duration-200 text-center`}
        >
          {title}
        </h2>
        <p
          className={`dark:text-white text-sm opacity-0 group-hover/canvas-card:opacity-100 ${show && "opacity-100"} relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white ${show && "text-white"} group-hover/canvas-card:-translate-y-2 ${show && "translate-y-2"} transition duration-200 text-center`}
          style={{ color: "#e4ecff" }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }) => {
  return (
    <div>
      <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-4 py-2 text-white backdrop-blur-3xl text-2xl font-bold">
          {order}
        </span>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
