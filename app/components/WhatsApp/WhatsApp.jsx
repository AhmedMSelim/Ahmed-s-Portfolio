import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
export default function WhatsApp() {
  return (
    <div className="fixed rounded-full bottom-15 right-5 z-30 animate-bounce">
      <a
        href="https://wa.me/201090319818"
        target="_blank"
        rel="noopener noreferrer"
      >
        <IoLogoWhatsapp
          size={50}
          className="text-[#25D366] hover:text-green-600 transition-colors duration-300"
        />
      </a>
    </div>
  );
}
