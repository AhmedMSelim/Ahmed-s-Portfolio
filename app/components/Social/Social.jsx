import React from "react";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

export default function Social() {
  const social = [
    {
      ico: <FaLinkedinIn size={30} />,
      ref: "https://www.linkedin.com/in/ahmed-magdy-80a675244/",
    },
    {
      ico: <FaGithub size={30} />,
      ref: "https://github.com/AhmedMSelim",
    },
    {
      ico: <CgMail size={30} />,
      ref: "https://mail.google.com/mail/?view=cm&fs=1&to=ahmedmselim9@gmail.com",
    },
  ];
  return (
    <div className="w-[40%] md:w-[10%] flex justify-between items-center">
      {social.map((item, index) => (
        <a
          key={index}
          href={item.ref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-950 dark:text-white hover:text-neon-green transition-colors duration-300"
        >
          {item.ico}
        </a>
      ))}
    </div>
  );
}
