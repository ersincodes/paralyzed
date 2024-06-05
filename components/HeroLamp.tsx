"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import { TextGenerateEffects } from "./TextGenerate";

export function HeroLamp() {
  return (
    <section id="hero">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-3xl font-medium tracking-tight text-transparent sm:text-5xl md:text-7xl">
          <TextGenerateEffects />
        </motion.h1>
      </LampContainer>
    </section>
  );
}
