"use client";
import { useEffect, useState } from "react";

export const ServicesHero: React.FC = () => {
 const texts: string[] = [
  "STRATEGIC, SCALABLE,RESULTS-DRIVEN SERVICES",
  "DIGITAL, CLOUD, AI & BUSINESS TRANSFORMATION",
  "END-TO-END SOLUTIONS DESIGNED FOR SUSTAINABLE GROWTH"
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
    <section className="relative pt-32 pb-20 bg-black overflow-hidden h-screen ">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      >
        <source src="/servicesvideo.mp4" type="video/mp4" />
      </video>

      <div className="w-8/12 flex justify-center  relative z-10 mx-auto h-full">
        <div className="gap-6 flex flex-col justify-center  w-full h-5/6">
          <h1 className="font-pt text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight min-h-24">
            <span
              className={`block text-white transition-all duration-500 ${
                fade ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
              }`}
            >
              {texts[index]}
            </span>
          </h1>
        </div>
      </div>
    </section>
  );
};
