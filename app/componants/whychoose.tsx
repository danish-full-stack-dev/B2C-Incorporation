"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import FadeSlideIn from "../hooks/FadeSlideIn";

const WhyChooseUs: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "center start"],
  });

  const textColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#1f2937", "#ffffff"]
  );

  const brands: string[] = [
    "/ters.png",
    "/D&J.png",
    "/ellis&cco.png",
    "/goodies.png",
    "/outfiters.png",
    "/lvi-info.png",
    "/mpower.png",
    "/NERF.png",
    "/Rising Phonex.png",
    "/rye-assic.png",
    "/saya.png",
    "/sirona.png",
    "/WealthWise.png",
    "/zero.png",
    "/medisonbrook.png",
  ];

  return (
    <FadeSlideIn>
      <motion.section
        ref={sectionRef}
        className="py-32 transition-colors duration-300 relative bg-[#00091f]"
      >
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-200 capitalize">
            WHY BUSINESSES CHOOSE B2C INC. FOR GROWTH AND INNOVATION
          </motion.h2>

          <motion.p className="text-xl max-w-3xl mx-auto leading-relaxed mb-16 text-gray-200">
            We at B2C INC. deliver end-to-end solutions in Design, Digital
            Marketing, Fintech, Trading, AI, and ORM, driven by deep insights
            and innovative technology.
          </motion.p>
        </div>

        {/* Brand Marquee */}
        <div className="overflow-hidden w-full py-5 bg-black/60">
          <motion.div
            className="flex gap-16"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
          >
            {[...brands, ...brands, ...brands].map((logo, idx) => (
              <Link key={idx} href={"/design"} className="">
                <div className="shrink-0 w-32 h-16 flex items-center  grayscale hover:grayscale-0 justify-center group relative">
                  <img
                    src={logo}
                    alt={`Brand ${idx % brands.length}`}
                    className="max-h-20 object-contain"
                  />
                  <div className="absolute inset-0" />
                </div>
              </Link>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </FadeSlideIn>
  );
};

export default WhyChooseUs;
