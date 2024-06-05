"use client";
import { words } from "@/data";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export function TextGenerateEffects() {
  return <TextGenerateEffect className="h-[1vh] text-cyan-200" words={words} />;
}
