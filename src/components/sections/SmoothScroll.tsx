
"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { ReactLenis, type LenisRef } from "lenis/react";
import { cancelFrame, frame } from "motion/react";
import "lenis/dist/lenis.css";

export function SmoothScroll({
  children,
}: {
  children: ReactNode;
}) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    function update({ timestamp }: { timestamp: number }) {
      lenisRef.current?.lenis?.raf(timestamp);
    }

    frame.setup(update, true);

    return () => cancelFrame(update);
  }, []);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        autoRaf: false,
        lerp: 0.08,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1,
        anchors: true,
      }}
    >
      {children}
    </ReactLenis>
  );
}
