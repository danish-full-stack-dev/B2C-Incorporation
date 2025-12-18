"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import FadeSlideIn from "@/app/hooks/FadeSlideIn";
import { AboutSection } from "@/app/componants/AboulSlider";

const SLIDE_SCROLL_HEIGHT = 1000;

export default function MergedPage() {
  const points = [
    {
      label: "Empathy",
      hoverLabel: "We listen first",
      hoverSubtext: "And then respond with care",
      x: "50%",
      y: "10%",
    },
    {
      label: "Open mind",
      hoverLabel: "We stay flexible",
      hoverSubtext: "New perspectives welcome",
      x: "70%",
      y: "20%",
    },
    {
      label: "Respect",
      hoverLabel: "Mutual respect",
      hoverSubtext: "Always at the core",
      x: "55%",
      y: "45%",
    },
    {
      label: "Aftercare",
      hoverLabel: "We stay with you",
      hoverSubtext: "Even after it's done",
      x: "60%",
      y: "70%",
    },
    {
      label: "Deep expertise",
      hoverLabel: "Years of practice",
      hoverSubtext: "We don’t guess—we know",
      x: "35%",
      y: "65%",
    },
    {
      label: "Curiosity",
      hoverLabel: "We explore",
      hoverSubtext: "Curiosity drives excellence",
      x: "30%",
      y: "30%",
    },
  ];

  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  return (
    <div className="w-full h-full">
      <div className="relative w-full h-screen bg-black overflow-hidden">
        {points.map((p, index) => {
          const isHover = hoverIndex === index;
          return (
            <div
              key={index}
              className="absolute flex flex-col gap-3 items-start cursor-pointer mt-[80px] animate-slide"
              style={{
                left: p.x,
                top: p.y,
                transform: "translate(-50%, -50%)",
              }}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              {!isHover ? (
                <div className="h-2 w-2 bg-white rounded-full" />
              ) : (
                <svg
                  viewBox="0 0 100 100"
                  className="w-6 h-6 fill-blue-600 animate-spin"
                >
                  <path d="M50 5 L58 28 L83 17 L66 38 L90 50 L66 62 L83 83 L58 72 L50 95 L42 72 L17 83 L34 62 L10 50 L34 38 L17 17 L42 28 Z" />
                </svg>
              )}

              <span
                className={`text-3xl font-light tracking-wide transition-all duration-200 ${
                  isHover ? "text-blue-600" : "text-white"
                }`}
              >
                {isHover ? p.hoverLabel : p.label}
              </span>

              {isHover && (
                <span className="text-xl mt-1 text-white">
                  {p.hoverSubtext}
                </span>
              )}
            </div>
          );
        })}
      </div>
      <FadeSlideIn>
      <AboutSection/>
      </FadeSlideIn>
    </div>
  );
}
