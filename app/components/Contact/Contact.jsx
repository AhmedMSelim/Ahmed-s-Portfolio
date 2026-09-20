"use client";
import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneFlip } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { motion } from "framer-motion";
import { CheckCircle, MessageSquare, Send } from "lucide-react";
import { div } from "framer-motion/client";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleChangeName(e) {
    setName(e.target.value);
  }
  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }
  function handleChangeSubject(e) {
    setSubject(e.target.value);
  }
  function handleChangeMessage(e) {
    setMessage(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const myPhone = "201090319818";

    // 2. تجهيز نص الرسالة
    const textMessage = `New Message from Portfolio Contact Form :
Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}`;

    const whatsappUrl = `https://wa.me/${myPhone}?text=${encodeURIComponent(textMessage)}`;
    window.open(whatsappUrl, "_blank");

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <MdEmail size={25} className="text-neon-green" />,
      label: "Email",
      value: "ahmedmselim9@gmail.com",
    },
    {
      icon: <FaPhoneFlip size={25} className="text-neon-violet" />,
      label: "Phone",
      value: "01090319818",
    },
    {
      icon: <FaLocationDot size={25} className="text-neon-green" />,
      label: "Location",
      value: "Cairo,Egypt",
    },
  ];
  return (
    <section className="w-full md:w-[95%] px-2 mx-auto md:px-6 pt-20 relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-10">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-green-500 text-3xl md:text-5xl font-bold mb-6"
            >
              Let's<span>Connect</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-slate-600 dark:text-slate-400 text-lg max-w-md"
            >
              Ready to blast off your next projects? Drop me a message and let's
              craft something legendary together.
            </motion.p>
          </div>

          <div className="flex flex-col gap-6">
            {contactInfo.map((info, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-center gap-6"
              >
                <div className="w-12 h-12 rounded-xl glassmorphism flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  {info.icon}
                </div>

                <div>
                  <p className="text-xm text-slate-500 uppercase font-bold tracking-widest">
                    {info.label}
                  </p>

                  <p className="text-black dark:text-white font-medium">
                    {info.value}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full h-48 rounded-3xl overflow-hidden relative glassmorphism border-t-white/5"
          >
            <div className="absolute inset-0 bg-linear-to-tr from-neon-green/20 to-neon-violet/20" />
            <div className="absolute inset-0 flex items-center justify-center">
              <MessageSquare
                size={64}
                className="text-black/10 dark:text-white/10 animate-pulse"
              />
            </div>

            {[Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0 - 20, 0],
                  x: [0, 10, 0],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute w-4 h-4 rounded-full bg-black/10 dark:bg-white/10"
                style={{
                  top: 20 + i * 15 + "%",
                  left: 10 + i * 20 + "%",
                }}
              />
            ))}
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glassmorphism p-8 md:p-12 rounded-4xl border-white/5 relative overflow-hidden"
        >
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-neon-green/70 dark:bg-neon-green/10 blur-[80px] rounded-full" />
          <form
            onSubmit={handleSubmit}
            className="relative z-10 flex flex-col gap-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col gap-2"
              >
                <label className="text-sm font-medium text-slate-600 dark:text-slate-300 ml-1">
                  Your Name
                </label>
                <input
                  required
                  value={name}
                  onChange={handleChangeName}
                  type="text"
                  placeholder="Ahmed Magdy"
                  className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl px-5 py-4 text-slate-600 dark:text-white
                   placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-neon-green focus:ring-1
                    focus:ring-neon-green/50 transition-all"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col gap-2"
              >
                <label className="text-sm font-medium text-slate-600 dark:text-slate-300 ml-1">
                  Your Email
                </label>
                <input
                  required
                  value={email}
                  onChange={handleChangeEmail}
                  type="email"
                  placeholder="ahmed@example.com"
                  className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl px-5 py-4 text-slate-600 dark:text-white
                   placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-neon-green focus:ring-1
                    focus:ring-neon-green/50 transition-all"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex flex-col gap-2"
            >
              <label className="text-sm font-medium text-slate-600 dark:text-slate-300 ml-1">
                Subject
              </label>
              <input
                required
                value={subject}
                onChange={handleChangeSubject}
                type="text"
                placeholder="Project Inquiry"
                className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl px-5 py-4 text-slate-600 dark:text-white
                   placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-neon-green focus:ring-1
                    focus:ring-neon-green/50 transition-all"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-2"
            >
              <label className="text-sm font-medium text-slate-600 dark:text-slate-300 ml-1">
                Message
              </label>
              <textarea
                required
                value={message}
                onChange={handleChangeMessage}
                rows={4}
                placeholder="Tell me about your vision..."
                className="bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl px-5 py-4 text-slate-600 dark:text-white
                   placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-neon-green focus:ring-1
                    focus:ring-neon-green/50 transition-all resize-none"
              />
            </motion.div>

            <motion.button
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`mt-2 py-4 rounded-2xl font-bold flex items-center justify-center
                gap-2 transition-all ${isSuccess ? "bg-green-500 text-white" : "bg-neon-green text-white hover:shadow-[0_0_20px_rgba(59,190,246,0.5)]"} cursor-pointer`}
            >
              {isSuccess ? (
                <>
                  <CheckCircle size={20} /> Message Sent!
                </>
              ) : isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-pulse" />
              ) : (
                <>
                  <Send size={20} /> Transmit Message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
