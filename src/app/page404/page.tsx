"use client";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import Image from "next/image";

import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../components/ui/lamp";
const words = [
  {
    text: "Oops!!",
    className: "text-black-500 dark:text-black-500",
  },
  {
    text: "This Page is under",
  },
  {
    text: "Development.",
    className: "text-black-500 dark:text-black-50",
  },
];
function page() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
      >
        <TypewriterEffectSmooth className="text-3xl font-bold" words={words} />
      </motion.h1>
    </LampContainer>
  );
}

export default page;
