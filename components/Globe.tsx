"use client";
import React from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { globeConfig, sampleArcs } from "@/data";

const World = dynamic(() => import("./ui/globe").then((m) => m.World), {
  ssr: false,
});

export function Globe() {
  return (
    <>
      <h1 className="heading">We work with all the timezones</h1>
      <p className="text-center text-base md:text-2xl font-normal text-neutral-700 dark:text-neutral-200 mt-5 mx-auto">
        Have customizable and interactive components like this
        <span className="text-cyan-300"> Globe</span>
      </p>
      <div className="flex flex-col items-center justify-center py-5 md:py-10 h-full dark:bg-slate-950 bg-slate-950 relative w-full">
        <div className="max-w-7xl mx-auto w-full relative overflow-hidden h-[20rem] md:h-[40rem] px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}></motion.div>
          <div className="absolute w-full bottom-0 inset-x-0 h-40 pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
          <div className="relative w-full h-full z-10">
            <World data={sampleArcs} globeConfig={globeConfig} />
          </div>
        </div>
      </div>
    </>
  );
}
