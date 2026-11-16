
"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const BRAND_NAME = "Oakstone";
const BRAND_SUBTITLE = "RENOVATIONS";
const SESSION_KEY = "oakstone-intro-played";

const INTRO_DURATION = 1050;
const EXIT_DURATION = 550;

const EASE_REVEAL: [number, number, number, number] = [
  0.16, 1, 0.3, 1,
];

const EASE_EXIT: [number, number, number, number] = [
  0.76, 0, 0.24, 1,
];

type IntroPhase = "checking" | "visible" | "exiting" | "done";

interface IntroOverlayProps {
  onComplete: () => void;
}

export function IntroOverlay({ onComplete }: IntroOverlayProps) {
  const [phase, setPhase] = useState<IntroPhase>("checking");
  const prefersReducedMotion = useReducedMotion();

  // Check session and motion preferences before the first paint.
  useLayoutEffect(() => {
    let alreadyPlayed = false;

    try {
      alreadyPlayed = sessionStorage.getItem(SESSION_KEY) === "true";
    } catch {
      alreadyPlayed = false;
    }

    if (alreadyPlayed || prefersReducedMotion) {
      setPhase("done");
      onComplete();
      return;
    }

    setPhase("visible");
  }, [onComplete, prefersReducedMotion]);

  // Start the exit transition after the wordmark animation.
  useEffect(() => {
    if (phase !== "visible") return;

    const timer = window.setTimeout(() => {
      setPhase("exiting");
    }, INTRO_DURATION);

    return () => window.clearTimeout(timer);
  }, [phase]);

  // Finish the transition and remember that the intro has played.
  useEffect(() => {
    if (phase !== "exiting") return;

    const timer = window.setTimeout(() => {
      try {
        sessionStorage.setItem(SESSION_KEY, "true");
      } catch {
        // Continue normally if session storage is unavailable.
      }

      setPhase("done");
      onComplete();
    }, EXIT_DURATION);

    return () => window.clearTimeout(timer);
  }, [phase, onComplete]);

  if (phase === "checking" || phase === "done") return null;

  return (
    <motion.div
      aria-hidden="true"
      initial={{ y: "0%" }}
      animate={{
        y: phase === "exiting" ? "-100%" : "0%",
      }}
      transition={{
        duration: EXIT_DURATION / 1000,
        ease: EASE_EXIT,
      }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-[#f4f1eb]"
      style={{ willChange: "transform" }}
    >
      <div className="flex flex-col items-center px-6">
        {/* Main wordmark */}
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 0.75,
              ease: EASE_REVEAL,
            }}
            className="text-center text-[clamp(2.5rem,8vw,5rem)] font-semibold tracking-[-0.065em] text-[#183d30]"
          >
            {BRAND_NAME}
          </motion.h1>
        </div>

        {/* Subtitle */}
        <div className="mt-1 overflow-hidden">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.45,
              delay: 0.25,
              ease: EASE_REVEAL,
            }}
            className="text-[10px] font-medium tracking-[0.42em] text-[#183d30]/75 sm:text-xs"
          >
            {BRAND_SUBTITLE}
          </motion.p>
        </div>

        {/* Expanding underline */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            duration: 0.55,
            delay: 0.35,
            ease: EASE_REVEAL,
          }}
          className="mt-6 h-px w-16 origin-center bg-[#183d30]/70"
        />
      </div>
    </motion.div>
  );
}
