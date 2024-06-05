"use client";

import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { testimonials, words2 } from "@/data";
import { TextGenerateEffect } from "./ui/text-generate-effect";

export function Testimonials() {
  return (
    <section>
      <TextGenerateEffect className="text-white" words={words2} />
      <div className="h-[30rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
}
