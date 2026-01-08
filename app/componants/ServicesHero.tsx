"use client";
import { useEffect, useState } from "react";

export const ServicesHero: React.FC = () => {
  const texts: string[] = [
    "STRATEGIC, SCALABLE, RESULTS-DRIVEN SERVICES",
    "DIGITAL, CLOUD, AI & BUSINESS TRANSFORMATION",
    "END-TO-END SOLUTIONS DESIGNED FOR SUSTAINABLE GROWTH",
  ];
  const [index, setIndex] = useState<number>(0);
  const [fade, setFade] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length);
        setFade(true);
      }, 400);
    }, 2500);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <section className="relative pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20 bg-black overflow-hidden min-h-screen h-screen">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-40 sm:opacity-50 md:opacity-60"
      >
        <source src="/servicesvideo.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/40 md:hidden" />

      <div className="w-11/12 sm:w-10/12 md:w-9/12 lg:w-8/12 flex justify-center items-center relative z-10 mx-auto h-full px-4 sm:px-6">
        <div className="gap-4 sm:gap-6 flex flex-col justify-center items-center text-center w-full h-full py-8 sm:py-12">
          <h1 className="font-pt text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight sm:leading-tight md:leading-tight lg:leading-tight min-h-[80px] sm:min-h-[100px] md:min-h-[120px] lg:min-h-24 flex items-center justify-center">
            <span
              className={`block text-white transition-all duration-500 px-2 ${
                fade ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
              }`}
            >
              {texts[index]}
            </span>
          </h1>

          <div className="flex gap-2 mt-4 sm:mt-6">
            {texts.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 sm:h-2 rounded-full transition-all duration-500 ${
                  i === index
                    ? "w-8 sm:w-10 md:w-12 bg-blue-600"
                    : "w-1.5 sm:w-2 bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};