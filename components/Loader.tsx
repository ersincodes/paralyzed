"use client";
import React, { useState } from "react";
import { MultiStepLoader } from "./ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";
import { loadingStates } from "@/data";
import MagicButton from "./ui/magic-button";
import { FaHandPointUp } from "react-icons/fa6";

export function Loader() {
  const [loading, setLoading] = useState(false);
  return (
    <section id="steps">
      <div className="w-full h-[30vh] mt-0 flex items-center justify-center bg-slate-950 relative">
        <MultiStepLoader
          loadingStates={loadingStates}
          loading={loading}
          duration={2000}
        />
        <MagicButton
          handleClick={() => setLoading(true)}
          title="Try the Loader"
          icon={<FaHandPointUp />}
          position="right"
        />
        {loading && (
          <button
            className="fixed top-4 right-4 text-black dark:text-white z-[120]"
            onClick={() => setLoading(false)}>
            <IconSquareRoundedX className="h-10 w-10" />
          </button>
        )}
      </div>
    </section>
  );
}
