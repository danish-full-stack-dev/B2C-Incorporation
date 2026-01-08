"use client"
import React, { useRef, useEffect, useState } from 'react';
import { motion } from "framer-motion";

interface AboutCard {
  id: number;
  title: string;
  description: string;
  image: string;
}

const SLIDE_SCROLL_HEIGHT = 1000;

export const AboutSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);

  const aboutCards: AboutCard[] = [
    {
      id: 1,
      title: 'our journey',
      description: 'Our design studio was founded within an outsourcing software development company, giving us a distinct advantage. Having worked across numerous industries, we\'ve gained invaluable insights into various domains.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80'
    },
    {
      id: 2,
      title: 'our approach',
      description: 'One of our key differentiators is the synergy we\'ve built with our in-house development team. Our designers collaborate closely with developers, ensuring that the designs we create are not only visually appealing but also technically sound.',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80'
    },
    {
      id: 3,
      title: 'our impact',
      description: 'What truly sets us apart is our focus on creating designs that drive results. We believe that UX isn\'t just about beautiful interfaces—it\'s about delivering user-centered solutions that align with business goals.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !scrollRef.current) return;

      const container = containerRef.current;
      const scrollContainer = scrollRef.current;
      const rect = container.getBoundingClientRect();
      
      if (rect.top <= 0 && rect.bottom > window.innerHeight) {
        const containerHeight = container.offsetHeight;
        const scrollProgress = -rect.top / (containerHeight - window.innerHeight);
        
        const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        const scrollAmount = scrollProgress * maxScrollLeft;
        
        scrollContainer.scrollLeft = scrollAmount;

        const index = Math.min(
          aboutCards.length - 1,
          Math.floor(scrollProgress * aboutCards.length)
        );
        setCurrent(index);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [aboutCards.length]);

  return (
    <div className="w-full">
      <div
        ref={containerRef}
        className="relative bg-black"
        style={{ height: `${aboutCards.length * SLIDE_SCROLL_HEIGHT}px` }}
      >
        <div className="sticky top-0 h-screen flex overflow-hidden">
          <div
            className="absolute right-0 top-10 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px]
              bg-blue-700/50 blur-[80px] sm:blur-[100px] md:blur-[120px] rounded-full pointer-events-none z-10"
          ></div>
          
          <div
            ref={scrollRef}
            className="flex overflow-x-hidden w-full"
          >
            {aboutCards.map((card, index) => (
              <div
                key={card.id}
                className="flex-shrink-0 w-full h-screen flex flex-col md:flex-row"
              >
                <motion.div
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ 
                    opacity: current === index ? 1 : 0.3, 
                    scale: 1 
                  }}
                  transition={{ duration: 0.5 }}
                  className="w-full md:w-1/2 h-1/2 md:h-full relative"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-black/20 to-transparent"></div>
                </motion.div>
                
                <div className="w-full md:w-1/2 h-1/2 md:h-full bg-transparent text-white 
                  px-6 py-8 sm:px-12 sm:py-16 md:px-16 md:py-24 lg:px-28 lg:py-36 
                  flex flex-col justify-between overflow-y-auto md:overflow-visible">
                  <div>
                    <div className="text-xs sm:text-sm opacity-60 mb-4 sm:mb-6">
                      {String(current + 1).padStart(2, "0")} / {String(aboutCards.length).padStart(2, "0")}
                    </div>

                    <motion.h2
                      key={`${card.title}-${index}`}
                      initial={{ y: 40, opacity: 0 }}
                      animate={{ 
                        y: current === index ? 0 : 40, 
                        opacity: current === index ? 1 : 0 
                      }}
                      transition={{ duration: 0.6 }}
                      className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light lowercase mb-4 sm:mb-6"
                    >
                      {card.title}
                    </motion.h2>

                    <motion.div
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ 
                        y: current === index ? 0 : 30, 
                        opacity: current === index ? 1 : 0 
                      }}
                      transition={{ delay: 0.05 }}
                      className="flex flex-wrap gap-2 mb-4 sm:mb-6"
                    >
                    </motion.div>

                    <motion.p
                      initial={{ y: 30, opacity: 0 }}
                      animate={{ 
                        y: current === index ? 0 : 30, 
                        opacity: current === index ? 1 : 0 
                      }}
                      transition={{ delay: 0.1 }}
                      className="text-sm sm:text-base md:text-lg opacity-90 max-w-xl leading-relaxed"
                    >
                      {card.description}
                    </motion.p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}