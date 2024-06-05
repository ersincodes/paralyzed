"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  words,
  words2,
  className,
}: {
  words: string;
  words2?: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray1 = words.split(" ");
  let wordsArray2 = words2 ? words2.split(" ") : [];

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 4,
        delay: stagger(0.4),
      }
    );
  }, [scope.current]);

  const renderWords = (wordsArray: string[], isSecondRow: boolean) => {
    return (
      <div className="flex justify-center flex-wrap">
        {wordsArray.map((word, idx) => (
          <motion.span key={word + idx} className="text-center opacity-0 mx-1 ">
            {word}
          </motion.span>
        ))}
      </div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div>
        <div className="text-center text-3xl sm:text-5xl leading-snug tracking-wide">
          <motion.div ref={scope}>
            {renderWords(wordsArray1, false)}
            {wordsArray2.length > 0 && (
              <div className="mt-10">{renderWords(wordsArray2, true)}</div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
