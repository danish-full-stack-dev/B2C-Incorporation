
"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function MergedPage() {
  const points = [
    { label: "Empathy", hoverLabel: "We listen first", hoverSubtext: "And then respond with care", x: "50%", y: "10%" },
    { label: "Open mind", hoverLabel: "We stay flexible", hoverSubtext: "New perspectives welcome", x: "70%", y: "20%" },
    { label: "Respect", hoverLabel: "Mutual respect", hoverSubtext: "Always at the core", x: "55%", y: "45%" },
    { label: "Aftercare", hoverLabel: "We stay with you", hoverSubtext: "Even after it's done", x: "60%", y: "70%" },
    { label: "Deep expertise", hoverLabel: "Years of practice", hoverSubtext: "We don’t guess—we know", x: "35%", y: "65%" },
    { label: "Curiosity", hoverLabel: "We explore", hoverSubtext: "Curiosity drives excellence", x: "30%", y: "30%" },
  ];

  const [hoverIndex, setHoverIndex] = useState<number|null>(null);

  /** ScrollSlider Data */
  const slides = [
    {
      id: 1,
      image: "/AI.png",
      title: "our journey",
      description:
        "Our design studio was founded within an outsourcing software development company...",
    },
    {
      id: 2,
      image: "/AI.png",
      title: "our approach",
      description: "We pair research-led strategy with pixel-perfect execution...",
    },
    {
      id: 3,
      image: "/AI.png",
      title: "our impact",
      description: "From startups to enterprises, our solutions have helped teams...",
    },
  ];

  const [current, setCurrent] = useState(0);
  const goTo = (index:number) => setCurrent(Math.max(0, Math.min(index, slides.length - 1)));
  const slide = slides[current];

  return (
    <div className="w-full h-full">
      <div className="relative w-full h-screen bg-black overflow-hidden">
        {points.map((p, index) => {
          const isHover = hoverIndex === index;
          return (
            <div
              key={index}
              className="absolute flex flex-col gap-3 items-start cursor-pointer mt-[80px] animate-slide"
              style={{ left: p.x, top: p.y, transform: "translate(-50%, -50%)" }}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              {!isHover ? (
                <div className="h-2 w-2 bg-white rounded-full" />
              ) : (
                <svg viewBox="0 0 100 100" className="w-6 h-6 fill-blue-600 animate-spin duration-0">
                  <path d="M50 5 L58 28 L83 17 L66 38 L90 50 L66 62 L83 83 L58 72 L50 95 L42 72 L17 83 L34 62 L10 50 L34 38 L17 17 L42 28 Z" />
                </svg>
              )}

              <span className={`text-3xl font-light tracking-wide transition-all duration-200 ${isHover ? "text-blue-600" : "text-white"}`}>
                {isHover ? p.hoverLabel : p.label}
              </span>

              <span className="`text-xl mt-1 transition-all duration-200 text-white">
                {isHover ? p.hoverSubtext : ""}
              </span>
            </div>
          );
        })}
      </div>

      {/* Scroll Slider */}
      <div className="h-screen w-full flex flex-row overflow-hidden bg-black text-white">
        <motion.div
          key={slide.image}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-1/2 h-full"
        >
          <img src={slide.image} className="w-full h-full object-cover" />
        </motion.div>

        <div className="w-1/2 bg-[#3E50FB] h-full flex flex-col justify-start px-28 py-24">
          <div className="max-w-xl mt-[50px] ml-[30px] ">
            <div className="text-sm uppercase mb-6 text-white/60">
              {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </div>

            <h2 className="text-5xl font-light lowercase mb-6">{slide.title}</h2>
            <p className="text-lg text-white/85 leading-relaxed mb-6">{slide.description}</p>

            <div className="flex items-center justify-start gap-4 mt-[300px]">
              <button onClick={() => goTo(current - 1)} className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M15 6L9 12L15 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <button onClick={() => goTo(current + 1)} className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path d="M9 6L15 12L9 18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}