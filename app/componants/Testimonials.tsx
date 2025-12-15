"use client";
import { User2Icon } from "lucide-react";
import Image from "next/image";
import React, { useState, useRef } from "react";
// import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  logo: string;
  logoColor: string;
  text: string;
  author: string;
  position: string;
}

const TestimonialsSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollPosition, setScrollPosition] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [startX, setStartX] = useState<number>(0);
  const [scrollLeft, setScrollLeft] = useState<number>(0);

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
      logo: "/NerfReview.png",
      logoColor: "text-teal-600",
      text: "The team is exceptionally responsive and committed to our success, providing detailed reports and strategic guidance. They come highly recommended for any business aiming to enhance their SEO performance.",
      author: "Axel Aaron | WsC London",
      position: "CMO",
    },

    {
      logo: "/NerfReview.png",
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
      logo: "/NerfReview.png",
      logoColor: "text-teal-600",
      text: "We’ve seen a significant boost in leads since they took over, and they seem genuinely invested in our success. A 5- star service all day long.",
      author: "Laura Dennick | Ellis & Co",
      position: "Managing Director",
    },
  ];

  const handleScroll = (): void => {
    if (scrollContainerRef.current) {
      setScrollPosition(scrollContainerRef.current.scrollLeft);
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>): void => {
    const container = scrollContainerRef.current;
    if (!container) return;

    setIsDragging(true);
    setStartX(e.pageX - container.offsetLeft);
    setScrollLeft(container.scrollLeft);
    container.style.cursor = "grabbing";
  };

  const handleMouseLeave = (): void => {
    setIsDragging(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = "grab";
    }
  };

  const handleMouseUp = (): void => {
    setIsDragging(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = "grab";
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (!isDragging) return;
    e.preventDefault();

    const container = scrollContainerRef.current;
    if (!container) return;

    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 2; // Multiply by 2 for faster scrolling
    container.scrollLeft = scrollLeft - walk;
  };

  const getProgressPercentage = (): number => {
    const container = scrollContainerRef.current;
    if (!container) return 0;

    const maxScroll = container.scrollWidth - container.clientWidth;
    if (maxScroll === 0) return 0;

    return Math.min(100, (scrollPosition / maxScroll) * 100);
  };

  return (
    <div className="bg-gray-50 px-8 h-screen flex items-center">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-2">
            TESTIMONIALS
          </p>
          <h2 className="text-4xl font-bold text-gray-900 hover:text-blue-500">
            Our clients say it best
          </h2>
        </div>

        {/* Testimonials Container */}
        <div className="relative">
          {/* Left Arrow */}
          {/* <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2  -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100 transition"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-gray-700" />
          </button> */}

          {/* Scrollable Testimonials */}
          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="flex gap-6 overflow-x-hidden px-12 pb-4 cursor-grab"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="min-w-[350px] bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition shrink-0"
              >
                {/* Logo */}
                <div className="mb-8">
                  <Image
                    width={100}
                    height={100}
                    src={testimonial.logo}
                    alt="logo"
                    className={`text-2xl font-bold ${testimonial.logoColor}`}
                  />
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-600 mb-8 min-h-40 max-w-[40vh]">
                  {testimonial.text}
                </p>

                {/* Author Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-semibold text-lg">
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
            ))}
          </div>

          {/* Right Arrow */}
          {/* <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-100 transition"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-gray-700" />
          </button> */}
        </div>

        {/* Progress Indicator */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <span className="text-sm text-gray-500">01</span>
          <div className="w-80 h-1 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-600 transition-all duration-300"
              style={{ width: `${getProgressPercentage()}%` }}
            />
          </div>
          <span className="text-sm text-gray-500">
            {testimonials.length.toString().padStart(2, "0")}
          </span>
        </div>
      </div>

      <style>{`
        .scrollbar-thin::-webkit-scrollbar {
          height: 8px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: #e5e7eb;
          border-radius: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #2563eb;
          border-radius: 4px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #1d4ed8;
        }
      `}</style>
    </div>
  );
};

export default TestimonialsSection;
