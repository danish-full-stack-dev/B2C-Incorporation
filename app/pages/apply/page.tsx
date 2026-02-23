"use client";

import Image from "next/image";
import { Facebook, Linkedin, Send, Link2, X } from "lucide-react";

export default function JobHero() {
  return (
    <section className="relative w-full min-h-[70vh] bg-blue-600 overflow-hidden">
      {/* LEFT CURVE IMAGE */}
      <div className="absolute left-0 bottom-0 w-[360px] h-[260px] overflow-hidden rounded-tr-[200px]">
        <Image
          src="/left-team.jpg" // replace with your image
          alt="Team discussion"
          fill
          className="object-cover"
        />
      </div>

      {/* RIGHT CURVE IMAGE */}
      <div className="absolute right-0 bottom-0 w-[360px] h-[260px] overflow-hidden rounded-tl-[200px]">
        <Image
          src="/right-team.jpg" // replace with your image
          alt="Office discussion"
          fill
          className="object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center text-white">
        {/* COMPANY */}
        <p className="text-sm tracking-wide mb-2">Txkel | Full time</p>

        {/* TITLE */}
        <h1 className="text-4xl lg:text-6xl font-semibold mb-4">GenAI Engineer</h1>

        {/* META */}
        <p className="text-sm opacity-90 mb-8">
          Lahore, Pakistan <span className="mx-2">|</span> Posted on 12/10/2025
        </p>

        {/* ACTION BUTTONS */}
        <div className="flex justify-center gap-4 mb-8">
          <button className="bg-black text-white px-6 py-3 rounded-md font-medium hover:bg-gray-900 transition">
            I'm interested
          </button>
          <button className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:text-blue-600 transition">
            Share job via email
          </button>
        </div>

        {/* SHARE */}
        <p className="text-sm mb-4">Share this job with your network</p>

        <div className="flex justify-center gap-4">
          {[Facebook, X, Linkedin, Send, Link2].map((Icon, i) => (
            <div
              key={i}
              className="w-10 h-10 flex items-center justify-center rounded-full border border-white/70 hover:bg-white hover:text-blue-600 transition cursor-pointer"
            >
              <Icon size={18} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
