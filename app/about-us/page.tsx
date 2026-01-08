"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

export default function AboutUs() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 100%", "end"],
  });

  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  return (
    <div className="bg-black">
      <section className="relative pt-32 pb-20 overflow-hidden md:h-screen h-[50vh] ">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full md:object-cover object-contain opacity-95"
        >
          <source src="/main-video-mp4.mp4" type="video/mp4" />
        </video>

        <div className="md:w-8/12 w-10/12 flex justify-center items-center mx-auto relative h-full">
          {/* LEFT CONTENT */}
          <h1 className="font-pt md:text-5xl text-2xl lg:text-6xl font-bold text-white mb-6 leading-tight md:min-h-24">
            Have you know About Us..?
          </h1>
        </div>
      </section>

      <section className="h-[90dvh] flex max-w-7xl mx-auto text-white">
        <div className="flex justify-center h-[50vh] my-auto">
          <aside className="w-1/2 flex">
            <div className="flex gap-6">
              <img
                src="/sayaCaseStudy.png"
                alt="CEO Image"
                className="w-3/4 object-cover"
              />
              <div className="flex flex-col justify-between">
                <p className="text-2xl">Gulfam Tasawar</p>
                <span className="text-gray-400 text-xl">CEO</span>
              </div>
            </div>
          </aside>
          <aside className="w-1/2 flex justify-end items-end">
            <div className="w-3/4">
              <h2 className="text-6xl">
                We don’t just get things done,we{" "}
                <span className="text-blue-600">think bold.</span> It’s our
                team’s mindset.
              </h2>
            </div>
          </aside>
        </div>
      </section>

      <section className="relative pt-32 pb-20 overflow-hidden md:h-screen h-[50vh] ">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full md:object-cover object-contain opacity-95"
        >
          <source src="/main-video-mp4.mp4" type="video/mp4" />
        </video>
      </section>

      <section className="flex relative text-white bg-[#00021f] h-screen">
        <div className="w-1/2 sticky top-0 flex justify-center min-h-screen">
          <div className="h-1/4 flex items-end relative">
            <h2 className="text-2xl">WHAT WE STAND FOR?</h2>
          </div>
        </div>
        <div className="flex flex-col w-1/2" ref={ref}>
          <div className="flex h-1/2 w-1/2 mx-auto text-wrap justify-center">
            <div className="flex justify-center ">
              <motion.span
                style={{ width }}
                className="whitespace overflow-hidden h-[50dvh] flex-nowrap"
              >
                We build strong, healthy relationships by valuing each person in
                every interaction—whether they’re a client or an employee.
              </motion.span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
