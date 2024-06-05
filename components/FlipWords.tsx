import React from "react";
import { FlipWord } from "./ui/flip-word";
import { flipWords } from "@/data";

export function FlipWords() {
  return (
    <div className="h-auto flex flex-col justify-center items-center px-4 mt-10 text-center">
      <div className="text-3xl md:text-6xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        Keep Scrolling <br />
        <p className="text-sky-300/100 text-center text-2xl md:text-4xl mt-3">
          for
        </p>
        <FlipWord words={flipWords} />
      </div>
    </div>
  );
}
