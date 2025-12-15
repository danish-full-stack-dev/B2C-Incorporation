"use client";

import Image from "next/image";
import { Volleyball } from "lucide-react";
import { BorderAnimation } from "@/app/componants/BorderAnimation";
export default function ContactUs() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-between px-20 bg-black text-white overflow-hidden">
      <div
        className="absolute left-0 top-0 w-[400px] h-[400px] 
              bg-blue-700/90 blur-[140px] rounded-full"
      ></div>

      <div
        className="absolute right-0 top-20 w-[400px] h-[400px] 
              bg-blue-700/90 blur-[140px] rounded-full"
      ></div>

      <div className="flex flex-col max-w-xl mt-10 ml-[150]">
        <h1 className="text-[48px] leading-tight font-medium">
          Let's make something <br />
          <span className="text-[#283f9e]">awesome together!</span>
        </h1>

        <div className="flex gap-16 mt-12">
          <div>
            <span className="px-4 py-1 rounded-full text-sm border border-white/30">
              #us_office
            </span>

            <p className="mt-4 text-[16px] leading-relaxed text-white/80">
              Cheyenne, WY 82002, US <br />
              Herschler Building East, 122 W 25th St, Suites 100 & 101
            </p>
          </div>

          <div>
            <span className="px-4 py-1 rounded-full text-sm border border-white/30">
              #european_office
            </span>

            <p className="mt-4 text-[16px] leading-relaxed text-white/80">
              Al Nahda 1, Dubai, UAE <br />
              Office 318, 3rd Floor, Al Noor Building 1,
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 mt-14">
          <BorderAnimation className="flex hover:cursor-pointer bg-blue-700">
            <button className="px-10 py-2">tell us about your project</button>
          </BorderAnimation>

          <button className="px-3 py-3 rounded-full w-fit outline-1 outline hover:bg-[#032077]">
            <Volleyball className="w-5 h-5" />
          </button>
          <button className="px-3 py-3 rounded-full w-fit outline-1 outline hover:bg-[#032077]">
            <Volleyball className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div className="absolute left-3/4 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] flex justify-center">
        <img
          src="/favicon.png"
          alt="logo"
          className="w-1/2 h-4/5 object-contain opacity-60 -rotate-45"
        />
      </div>
    </section>
  );
}
