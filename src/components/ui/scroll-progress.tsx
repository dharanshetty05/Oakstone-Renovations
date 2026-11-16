
"use client";

import { useEffect, useRef, useState } from "react";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useReducedMotion,
  useMotionValueEvent,
} from "motion/react";

export function ScrollProgress() {
  const { scrollY, scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();

  const [isVisible, setIsVisible] = useState(false);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Smooth progress tracking
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.4,
    restDelta: 0.001,
  });

  const progress = shouldReduceMotion
    ? scrollYProgress
    : smoothProgress;

  // Handle position follows scroll progress
  const handlePosition = useTransform(
    progress,
    [0, 1],
    ["1%", "99%"]
  );

  // Detect scrolling and control visibility
  useMotionValueEvent(scrollY, "change", () => {
    setIsVisible(true);

    if (hideTimer.current) {
      clearTimeout(hideTimer.current);
    }

    hideTimer.current = setTimeout(() => {
      setIsVisible(false);
    }, 900);
  });

  // Clean up timer
  useEffect(() => {
    return () => {
      if (hideTimer.current) {
        clearTimeout(hideTimer.current);
      }
    };
  }, []);

  return (
    <motion.div
      aria-hidden="true"
      initial={false}
      animate={{
        opacity: isVisible ? 1 : 0,
        x: isVisible ? 0 : 8,
      }}
      transition={{
        duration: shouldReduceMotion ? 0 : 0.3,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="
        pointer-events-none
        fixed
        right-[16px]
        top-[36px]
        bottom-[32px]
        z-[55]
        hidden
        w-[4px]
        sm:block
      "
    >
      {/* Background track */}
      <div className="absolute inset-0 rounded-full bg-[#242C26]" />

      {/* Progress fill */}
      <motion.div
        className="
          absolute inset-0
          origin-top
          rounded-full
          bg-[#ccc612]
        "
        style={{
          scaleY: progress,
        }}
      />

      {/* Moving circular handle */}
      <motion.div
        className="
          absolute
          left-1/2
          top-0
          h-[17px]
          w-[17px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          border border-[#D8D8D8]
          bg-[#F4F1E8]
          shadow-[0_2px_6px_rgba(0,0,0,0.22)]
        "
        style={{
          top: handlePosition,
        }}
      />
    </motion.div>
  );
}
