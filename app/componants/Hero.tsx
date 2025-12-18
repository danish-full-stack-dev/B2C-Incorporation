"use client";
import { useEffect, useState } from "react";

export const Hero: React.FC = () => {
  const texts: string[] = [
    "DYNAMIC, INTELLIGENT, CREATIVE, POWERFUL",
    "AI-ENABLED, CLOUD-NATIVE, DIGITAL & FINTECH-FOCUSED",
    "DESIGN-LED DIGITAL, FINTECH & REPUTATION SOLUTIONS FOR BUSINESS GROWTH"
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
    <section className="relative pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12 sm:pb-16 md:pb-20 bg-black overflow-hidden min-h-screen">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-95"
      >
        <source src="/main-video-mp4.mp4" type="video/mp4" />
      </video>

      {/* <div className="absolute inset-0 bg-[#1B3C53]"></div> */}

      {/* <div className="absolute top-0 right-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse delay-1000"></div> */}

      <div className="w-full px-4 sm:px-6 md:px-8 lg:w-11/12 xl:w-10/12 2xl:w-8/12 flex justify-center relative z-10 mx-auto min-h-[calc(100vh-8rem)]">
        <div className="gap-4 sm:gap-5 md:gap-6 flex flex-col  justify-center w-full">
          {/* LEFT CONTENT */}
          <h1 className="font-pt text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-5 md:mb-6 leading-tight min-h-[4rem] sm:min-h-[5rem] md:min-h-[6rem] lg:min-h-24">
            <span
              className={`block text-blue-300 transition-all duration-500 ${
                fade ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0"
              }`}
            >
              {texts[index]}
            </span>
          </h1>

          {/* CTA BUTTONS */}
          <div className=" flex flex-col sm:flex-row gap-3 sm:gap-4 ">
            <a
              href="/"
              className="font-serif px-6 sm:px-8 md:px-10 py-2 bg-blue-600 hover:bg-blue-800 transition-all duration-500 text-white/90 text-center text-sm sm:text-base"
            >
              Let's Talk
            </a>
          </div>

          {/* STATS */}
          {/* <div className="grid grid-cols-3 gap-6 mt-12">
              <div>
                <div className="text-4xl font-bold text-blue-300">25+</div>
                <div className="text-gray-200 mt-1">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-300">800+</div>
                <div className="text-gray-200 mt-1">Projects Delivered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-blue-300">98%</div>
                <div className="text-gray-200 mt-1">Client Satisfaction</div>
              </div>
            </div> */}

          {/* RIGHT CONTENT */}
          {/* <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-100 to-purple-900 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition duration-300">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="space-y-4">
                  <div className="h-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded w-3/4 animate-pulse"></div>
                  <div className="h-4 bg-gradient-to-r from-purple-400 to-purple-600 rounded w-full animate-pulse delay-100"></div>
                  <div className="h-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded w-5/6 animate-pulse delay-200"></div>

                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="bg-blue-100 rounded-lg p-4 h-24"></div>
                    <div className="bg-purple-100 rounded-lg p-4 h-24"></div>
                  </div>
                </div>
              </div>

              {/* <div className="absolute -top-4 -right-4 bg-yellow-400 rounded-full w-16 h-16 flex items-center justify-center shadow-lg">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div> */}
          {/* </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};
