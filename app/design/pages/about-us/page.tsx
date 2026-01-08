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
      mobileX: "50%",
      mobileY: "15%",
    },
    {
      label: "Open mind",
      hoverLabel: "We stay flexible",
      hoverSubtext: "New perspectives welcome",
      x: "70%",
      y: "20%",
      mobileX: "62%",
      mobileY: "30%",
    },
    {
      label: "Respect",
      hoverLabel: "Mutual respect",
      hoverSubtext: "Always at the core",
      x: "55%",
      y: "45%",
      mobileX: "50%",
      mobileY: "50%",
    },
    {
      label: "Aftercare",
      hoverLabel: "We stay with you",
      hoverSubtext: "Even after it's done",
      x: "60%",
      y: "70%",
      mobileX: "65%",
      mobileY: "70%",
    },
    {
      label: "Deep expertise",
      hoverLabel: "Years of practice",
      hoverSubtext: "We don't guess—we know",
      x: "35%",
      y: "65%",
      mobileX: "30%",
      mobileY: "60%",
    },
    {
      label: "Curiosity",
      hoverLabel: "We explore",
      hoverSubtext: "Curiosity drives excellence",
      x: "30%",
      y: "30%",
      mobileX: "25%",
      mobileY: "35%",
    },
  ];

  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <div className="w-full h-full bg-black">
      <div className="relative w-full h-screen bg-black overflow-hidden">
        {points.map((p, index) => {
          const isHover = hoverIndex === index;
          const posX = isMobile ? p.mobileX : p.x;
          const posY = isMobile ? p.mobileY : p.y;
          
          return (
            <div
              key={index}
              className="absolute flex flex-col gap-1 sm:gap-2 md:gap-4 items-start cursor-pointer mt-[60px] sm:mt-[70px] md:mt-[80px] animate-slide"
              style={{
                left: posX,
                top: posY,
                transform: "translate(-50%, -50%)",
              }}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
              onTouchStart={() => setHoverIndex(index)}
              onTouchEnd={() => setTimeout(() => setHoverIndex(null), 2000)}
            >
              {!isHover ? (
                <div className="h-1.5 w-1.5 sm:h-2 sm:w-2 bg-white rounded-full" />
              ) : (
                <svg
                  viewBox="0 0 100 100"
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 fill-blue-600 animate-spin"
                >
                  <path d="M50 5 L58 28 L83 17 L66 38 L90 50 L66 62 L83 83 L58 72 L50 95 L42 72 L17 83 L34 62 L10 50 L34 38 L17 17 L42 28 Z" />
                </svg>
              )}

              <span
                className={`font-medium sm:text-xl md:text-2xl lg:text-3xl font-sans tracking-wide transition-all duration-200 whitespace-nowrap ${
                  isHover ? "text-blue-600" : "text-white"
                }`}
              >
                {isHover ? p.hoverLabel : p.label}
              </span>

              {isHover && (
                <span className="text-xs sm:text-sm md:text-base lg:text-xl mt-0.5 sm:mt-1 text-white whitespace-nowrap max-w-[200px] sm:max-w-none">
                  {p.hoverSubtext}
                </span>
              )}
            </div>
          );
        })}
      </div>
      <FadeSlideIn>
        <AboutSection />
      </FadeSlideIn>
    </div>
  );
}