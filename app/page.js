import AnnouncementBar from "./components/AnnouncementBar/AnnouncementBar";
import Approach from "./components/Approach/Approach";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Social from "./components/Social/Social";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneFlip } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="w-full flex flex-col gap-20 md:gap-40 pt-20">
      <section id="home">
        <Hero />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="approach">
        <Approach />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <div className="bg-black/10">
        <AnnouncementBar />
        <footer className="w-[95%] mx-auto flex flex-col justify-center gap-4 md:flex-row md:justify-between items-center py-10 text-center text-black dark:text-slate-400 text-sm">
          <Social />
          <div>
            <div className="pb-2 flex gap-2">
              <FaPhoneFlip size={15} />
              <span>01090313818</span>
            </div>
            <div className="flex gap-2">
              <FaLocationDot size={15} />
              <span>Cairo,Egypt</span>
            </div>
          </div>
          <div className="w-full md:w-fit flex flex-col items-center gap-2">
            <hr className="w-full md:w-0 border-t border-slate-600 " />
            &copy; {new Date().getFullYear()} Ahmed magdy. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}
