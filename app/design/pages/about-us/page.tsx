"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const SLIDE_SCROLL_HEIGHT = 1000;

export default function MergedPage() {
  const points = [
    { label: "Empathy", hoverLabel: "We listen first", hoverSubtext: "And then respond with care", x: "50%", y: "10%" },
    { label: "Open mind", hoverLabel: "We stay flexible", hoverSubtext: "New perspectives welcome", x: "70%", y: "20%" },
    { label: "Respect", hoverLabel: "Mutual respect", hoverSubtext: "Always at the core", x: "55%", y: "45%" },
    { label: "Aftercare", hoverLabel: "We stay with you", hoverSubtext: "Even after it's done", x: "60%", y: "70%" },
    { label: "Deep expertise", hoverLabel: "Years of practice", hoverSubtext: "We don’t guess—we know", x: "35%", y: "65%" },
    { label: "Curiosity", hoverLabel: "We explore", hoverSubtext: "Curiosity drives excellence", x: "30%", y: "30%" },
  ];

  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

   const slides = [
    {
      image: "/AI.png",
      title: "our journey",
      description:
        "Our design studio was founded within a outsourcing software development company, giving us a distinct advantage. Having worked across numerous industries, we've gained invaluable insights into various domains. This broad experience allows us to design with a deep understanding of different user needs, creating intuitive and impactful user experiences that address specific business challenges."
    },
    {
      image: "/AI.png",
      title: "our approach",
      description:
        "One of our key differentiators is the synergy we’ve built with our in-house development team. Our designers collaborate closely with developers, ensuring that the designs we create are not only visually appealing but also technically sound. This means we deliver solutions that leverage the latest technologies, optimized for performance, scalability, and ease of implementation.",
    },
    {
      image: "/AI.png",
      title: "our impact",
      description:
        "What truly sets us apart is our focus on creating designs that drive results. We believe that UX isn’t just about beautiful interfaces—it's about delivering user-centered solutions that align with business goals. By combining our expertise in various domains with our technical know-how, we ensure that every design decision contributes to a seamless user experience and the project’s success.",
    },
  ];

  const ref = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!ref.current) return;

      const start = ref.current.offsetTop;
      const scrollY = window.scrollY;
      const distance = scrollY - start;

      if (distance < 0) return;

      const index = Math.min(
        slides.length - 1,
        Math.floor(distance / SLIDE_SCROLL_HEIGHT)
      );

      setCurrent(index);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
                <svg viewBox="0 0 100 100" className="w-6 h-6 fill-blue-600">
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
      <div
        ref={ref}
        className="relative bg-black"
        style={{ height: `${slides.length * SLIDE_SCROLL_HEIGHT}px` }}
      >
        <div className="sticky top-0 h-screen flex overflow-hidden">
          {/* Image */}
          <motion.div
            key={slides[current].image}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-1/2 h-full"
          >
            <img
              src={slides[current].image}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <div className="w-1/2 bg-[#3E50FB] text-white px-28 py-12 flex flex-col justify-between">
            <div>
              <div className="text-sm opacity-60 mb-6">
                {String(current + 1).padStart(2, "0")} /{" "}
                {String(slides.length).padStart(2, "0")}
              </div>

              <motion.h2
                key={slides[current].title}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="text-5xl font-light lowercase mb-6"
              >
                {slides[current].title}
              </motion.h2>

              <motion.p
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-lg opacity-90 max-w-xl"
              >
                {slides[current].description}
              </motion.p>
            </div>
            <div className="flex gap-4 mb-20">
              <button
                onClick={() => {
                  const next = Math.max(0, current - 1);
                  setCurrent(next);
                  window.scrollTo({
                    top: ref.current!.offsetTop + next * SLIDE_SCROLL_HEIGHT,
                    behavior: "smooth",
                  });
                }}
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M15 6L9 12L15 18"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button
                onClick={() => {
                  const next = Math.min(slides.length - 1, current + 1);
                  setCurrent(next);
                  window.scrollTo({
                    top: ref.current!.offsetTop + next * SLIDE_SCROLL_HEIGHT,
                    behavior: "smooth",
                  });
                }}
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:bg-white/10"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M9 6L15 12L9 18"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
