"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight, User2Icon } from "lucide-react";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { BorderAnimation } from "./BorderAnimation";
// import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  logo: string;
  logoColor: string;
  text: string;
  author: string;
  position: string;
}
const TestimonialsSection: React.FC = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const testimonials: Testimonial[] = [
    {
      logo: "/sironaReview.png",
      logoColor: "text-green-600",
      text: "…significant increase in both traffic and sales. I couldn’t be more pleased with the outcome and highly recommend their services.",
      author: "Mark Burrell | MD",
      position: "Sirona Medical",
    },
    {
      logo: "/medisonReview.png",
      logoColor: "text-blue-500",
      text: "We’ve noticed a substantial improvement in our online presence, which has translated into far more client inquiries for Madison Brook.",
      author: "John Lipper | MD",
      position: "Madison Brook",
    },
    {
      logo: "/NerfReview.png",
      logoColor: "text-teal-600",
      text: "We’ve seen a remarkable 27.5% reduction ad spend while achieving a significant 32% increase in conversions… I highly recommended!",
      author: "Ryan Musk | MD",
      position: "RHG & Nerf Wars",
    },
    {
      logo: "/WsCLondon.png",
      logoColor: "text-teal-600",
      text: "The team is exceptionally responsive and committed to our success, providing detailed reports and strategic guidance. They come highly recommended for any business aiming to enhance their SEO performance.",
      author: "Axel Aaron | WsC London",
      position: "CMO",
    },

    {
      logo: "/Rye-review.png",
      logoColor: "text-teal-600",
      text: "I’m always on the lookout for ways to improve ROI, and ClickExpose delivered beyond my expectations.",
      author: "Ryan M | Rye House Karting",
      position: "Managing Director",
    },

    {
      logo: "/NerfReview.png",
      logoColor: "text-teal-600",
      text: "The results speak for themselves. Unlike most so-called marketing companies, these guys are a credit to their industry.",
      author: "Craig D | TPI",
      position: "Managing Director",
    },

    {
      logo: "/ellis&cco.png",
      logoColor: "text-teal-600",
      text: "We’ve seen a significant boost in leads since they took over, and they seem genuinely invested in our success. A 5- star service all day long.",
      author: "Laura Dennick | Ellis & Co",
      position: "Managing Director",
    },
  ];
  const [scrollIndex, setScrollIndex] = useState(0);
  return (
    <div className="md:px-8 px-5 flex text-gray-200 w-full mx-auto flex-col">
      <div className="w-full mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="md:text-sm text-xs uppercase tracking-wider mb-2">
            TESTIMONIALS
          </p>
          <h2 className="md:text-4xl text-xl font-bold w-fit">
            Our clients say it best
          </h2>
        </div>
        <div className="overflow-hidden w-full py-5">
          <motion.div
            className="flex gap-10 py-8"
            animate={{ x: ["0%", "-115%"] }}
            transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="min-w-[320px] rounded-lg shadow-md hover:shadow-lg transition shrink-0 bg-white"
              >
                <div className="p-8 ">
                  {/* Logo */}
                  <div className="md:mb-8 mb-4">
                    <Image
                      width={100}
                      height={100}
                      src={testimonial.logo}
                      alt="logo"
                      className={`text-2xl font-bold ${testimonial.logoColor}`}
                    />
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-600 md:mb-8 min-h-40 max-w-[40vh]">
                    {testimonial.text}
                  </p>

                  {/* Author Info */}
                  <div className="flex items-center gap-4 bottom-5">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center">
                      <span className="text-black border border-black p-3 rounded-full font-semibold text-lg">
                        <User2Icon className="" />
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">
                        {testimonial.author}
                      </p>
                      <p className="text-sm text-gray-500">
                        {testimonial.position}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
