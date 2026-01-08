"use client";

import Image from "next/image";
import { Volleyball } from "lucide-react";
import { BorderAnimation } from "@/app/componants/BorderAnimation";

export default function ContactUs() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center lg:justify-between 
      px-4 sm:px-6 md:px-10 lg:px-16 xl:px-20 py-12 md:py-16 lg:py-0 
      bg-black text-white overflow-hidden">
      
      <div
        className="absolute left-0 top-0 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px]
          bg-blue-700/90 blur-[80px] sm:blur-[100px] md:blur-[140px] rounded-full"
      ></div>

      <div
        className="absolute right-0 top-10 sm:top-20 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px]
          bg-blue-700/90 blur-[80px] sm:blur-[100px] md:blur-[140px] rounded-full"
      ></div>

      <div className="flex flex-col max-w-full lg:max-w-xl w-full z-10 
        mt-0 md:mt-10 ml-0 lg:ml-[150px]">
        
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] 
          leading-tight font-medium text-center lg:text-left">
          Let's make something <br />
          <span className="text-[#283f9e]">awesome together!</span>
        </h1>

        <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 md:gap-16 
          mt-8 sm:mt-10 md:mt-12">
          
          <div className="flex-1">
            <span className="px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm 
              border border-white/30 inline-block">
              #us_office
            </span>

            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-[16px] 
              leading-relaxed text-white/80">
              Cheyenne, WY 82002, US <br />
              Herschler Building East, 122 W 25th St, Suites 100 & 101
            </p>
          </div>

          <div className="flex-1">
            <span className="px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm 
              border border-white/30 inline-block">
              #european_office
            </span>

            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-[16px] 
              leading-relaxed text-white/80">
              Al Nahda 1, Dubai, UAE <br />
              Office 318, 3rd Floor, Al Noor Building 1,
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start 
          gap-3 sm:gap-4 mt-10 sm:mt-12 md:mt-14">
          
          <BorderAnimation className="flex hover:cursor-pointer bg-blue-700 w-full sm:w-auto">
            <button className="px-6 sm:px-8 md:px-10 py-2 sm:py-2.5 
              text-sm sm:text-base w-full sm:w-auto whitespace-nowrap">
              tell us about your project
            </button>
          </BorderAnimation>

          <div className="flex gap-3 sm:gap-4">
            <button className="px-3 py-3 rounded-full w-fit outline-1 outline 
              hover:bg-[#032077] transition-colors">
              <Volleyball className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
            <button className="px-3 py-3 rounded-full w-fit outline-1 outline 
              hover:bg-[#032077] transition-colors">
              <Volleyball className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="hidden 2xl:block absolute left-3/4 top-1/2 
        -translate-x-1/2 -translate-y-1/2 w-[900px] ml-20">
        <img
          src="/favicon.png"
          alt="logo"
          className="w-1/2 h-4/5 object-contain opacity-50 -rotate-45"
        />
      </div>
    </section>
  );
}