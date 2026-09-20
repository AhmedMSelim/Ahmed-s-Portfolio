"use client";

import Marquee from "react-fast-marquee";
import { FaCode } from "react-icons/fa6";

export default function AnnouncementBar() {
  const tracks = [
    "Software Engineer",
    "Frontend",
    "Developer",
    "Web & Development",
    "Software Developer",
    "SEO-friendly",
    "Development",
    "Performance",
  ];
  return (
    <div className="text-neon-green dark:text-white bg-black py-2 overflow-hidden border-b border-t border-neon-green text-xs sm:text-sm font-medium">
      <Marquee speed={45} pauseOnHover={true} gradient={false}>
        <div className="flex items-center gap-12 pr-12">
          {tracks.map((item, i) => (
            <div key={i} className="flex items-center gap-12">
              <span>{item}</span>
              <span className="text-neutral-600">
                <FaCode />
              </span>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}
