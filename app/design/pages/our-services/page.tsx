"use client";
import React, { useRef, useState } from "react";
import { BorderAnimation } from "@/app/componants/BorderAnimation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Snowflake, Volleyball } from "lucide-react";

export default function DesignPage() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeCard, setActiveCard] = useState(0);
  const [open, setOpen] = useState<number | null>(null);

  const cards = [
    {
      id: 0,
      title: "Real State",
      description:
        "Protect and enhance your brand's online reputation with expert ORM services.",
      outputs: [
        "Monitor and manage online reviews and feedback",
        "Customized strategies to build trust and credibility",
        "Social media reputation management",
      ],
    },
    {
      id: 1,
      title: "ORM Services",
      description: "Safeguard and enhance your brand's image with professional ORM services.",
      outputs: [
        "Monitor and manage online reviews and mentions",
        "Continuous reputation tracking and reporting",
        "Build and maintain a trustworthy online reputation",
      ],
    },
    {
      id: 2,
      title: "Blockchain Development",
      description: "Build secure, scalable, and innovative blockchain solutions for your business.",
      outputs: ["Smart contract development and auditing", "Cryptocurrency and token creation", "Blockchain integration with existing systems"],
    },
    {
      id: 3,
      title: "Trading Platform",
      description:"Develop robust and user-friendly trading platforms for seamless financial transactions.",
      outputs: ["Real-time trading and market data integration", "Secure payment gateways and transaction processing", "Advanced analytics and reporting tools"],
    },
    {
      id: 4,
      title: "AI Automation",
      description: "Streamline business processes and boost efficiency with intelligent AI automation solutions.",
      outputs: ["Automate repetitive tasks and workflows", "AI-powered data analysis and decision-making","Predictive analytics for smarter business strategies"],
    },
  ];

  const strategizeData = [
    {
      id: 1,
      title: "Product discovery",
      description:
        "Product discovery helps understand user needs, define the right problem, and ensure the solution is meaningful before development begins.",
      image: "/image.png",
    },
    {
      id: 2,
      title: "Proof of concept design",
      description:
        "A PoC design validates whether an idea is viable before investing in full development.",
      image: "/image.png",
    },
    {
      id: 3,
      title: "MVP Design",
      description:
        "MVP design focuses on building the smallest lovable product to validate early-market fit.",
      image: "/image.png",
    },
    {
      id: 4,
      title: "UX/UI Design",
      description:
        "Crafting user-centered interfaces that balance aesthetics with usability.",
      image: "/image.png",
    },
    {
      id: 5,
      title: "Proof of concept design",
      description:
        "A PoC design validates whether an idea is viable before investing in full development.",
      image: "/image.png",
    },
    {
      id: 6,
      title: "MVP Design",
      description:
        "MVP design focuses on building the smallest lovable product to validate early-market fit.",
      image: "/image.png",
    },
    {
      id: 7,
      title: "UX/UI Design",
      description:
        "Crafting user-centered interfaces that balance aesthetics with usability.",
      image: "/image.png",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    const current = scrollRef.current;
    if (!current) return;

    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
    
    let cardWidth = 350;
    if (isTablet) cardWidth = 450;
    if (window.innerWidth >= 1024) cardWidth = 640;

    let newIndex = activeCard;

    if (direction === "left") {
      newIndex = Math.max(activeCard - 1, 0);
    } else {
      newIndex = Math.min(activeCard + 1, cards.length - 1);
    }

    setActiveCard(newIndex);

    current.scrollTo({
      left: newIndex * cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-black overflow-x-hidden">
      {/* HERO SECTION WITH CARDS */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:w-11/12 xl:w-10/12 mx-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-0 pt-20 sm:pt-24 md:pt-28 lg:pt-32">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white max-w-full md:max-w-2xl lg:max-w-3xl leading-tight">
            Our design process <span className="text-blue-600">is tailored</span>
            <br className="hidden sm:block" />
            to your needs and goals
          </h2>

          <div className="flex gap-3 md:gap-4">
            <button
              onClick={() => scroll("left")}
              className="p-2 md:p-3 rounded-full border border-white/20 hover:border-blue-600 hover:bg-blue-600/10 transition-all duration-300"
              aria-label="Previous card"
            >
              <ArrowLeft className="text-white w-5 h-5 md:w-6 md:h-6 hover:text-blue-600 transition-colors duration-500" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2 md:p-3 rounded-full border border-white/20 hover:border-blue-600 hover:bg-blue-600/10 transition-all duration-300"
              aria-label="Next card"
            >
              <ArrowRight className="text-white w-5 h-5 md:w-6 md:h-6 hover:text-blue-600 transition-colors duration-500" />
            </button>
          </div>
        </div>

        {/* CARDS SLIDER */}
        <div className="relative mt-12 md:mt-16 lg:mt-20">
          <div
            ref={scrollRef}
            className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 overflow-x-auto scroll-smooth hide-scrollbar snap-x snap-mandatory pb-4"
          >
            {cards.map((card, index) => (
              <div
                key={card.id}
                className={`flex-shrink-0 w-[320px] sm:w-[400px] md:w-[450px] lg:w-[600px] p-5 sm:p-6 lg:p-8 rounded-xl border border-neutral-800 text-white transition-all duration-500 snap-center ${
                  activeCard === index 
                    ? "bg-blue-600 scale-100" 
                    : "bg-neutral-900 scale-95 opacity-70"
                }`}
              >
                <p className="text-xs sm:text-sm font-semibold opacity-70">
                  {String(card.id + 1).padStart(2, "0")}
                </p>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold mt-2 mb-3 sm:mb-4">
                  {card.title}
                </h2>
                <p className="text-sm sm:text-base leading-relaxed opacity-90 mb-4">
                  {card.description}
                </p>
                <ul className="list-disc ml-4 sm:ml-5 space-y-1.5 sm:space-y-2 opacity-90 text-sm sm:text-base">
                  {card.outputs.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Mobile Indicators */}
          <div className="flex md:hidden justify-center gap-2 mt-6">
            {cards.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveCard(index);
                  if (scrollRef.current) {
                    const cardWidth = 350;
                    scrollRef.current.scrollTo({
                      left: index * cardWidth,
                      behavior: "smooth",
                    });
                  }
                }}
                className={`h-2 rounded-full transition-all ${
                  activeCard === index ? "bg-blue-500 w-8" : "bg-white/30 w-2"
                }`}
                aria-label={`Go to card ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* OBSTACLES SECTION */}
      <div className="text-white font-sans mt-20 md:mt-28 lg:mt-32 w-full px-4 sm:px-6 md:px-8 lg:w-11/12 xl:w-10/12 mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8 md:mb-12 leading-tight">
          We know the <span className="text-blue-600">obstacles you face</span>,
          <br className="hidden sm:block" />
          so we're here for both rapid <br className="hidden sm:block" /> 
          solutions and long-term <br className="hidden sm:block" /> partnership
        </h2>

        {/* STRATEGIZE SECTION */}
        <div className="py-8 md:py-10 lg:py-12 border-b border-neutral-800">
          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-6">
            <div className="col-span-3 flex flex-col gap-32 xl:gap-40 mt-20">
              <div className="flex items-center gap-4">
                <p className="text-xl opacity-70">01</p>
                <h2 className="text-2xl font-semibold ml-[100px]">Strategize</h2>
              </div>

              <div className="flex items-center gap-4">
                <p className="text-xl opacity-70">02</p>
                <h2 className="text-2xl font-semibold ml-[100px]">Create</h2>
              </div>

              <div className="flex items-center gap-4">
                <p className="text-xl opacity-70">03</p>
                <h2 className="text-2xl font-semibold ml-[100px]">Scale</h2>
              </div>
            </div>

            <div className="col-span-9 flex flex-col">
              {strategizeData.map((item) => (
                <div key={item.id} className="border-b border-neutral-800 py-10">
                  <button
                    onClick={() => setOpen(open === item.id ? null : item.id)}
                    className="w-full flex justify-between items-center text-left group"
                  >
                    <span className="text-lg">{item.title}</span>
                    <span
                      className={`text-blue-500 text-xl transition-transform ${
                        open === item.id
                          ? "rotate-90"
                          : "group-hover:translate-x-1"
                      }`}
                    >
                      →
                    </span>
                  </button>

                  {open === item.id && (
                    <div className="mt-4 space-y-4">
                      <p className="text-neutral-400 leading-relaxed">
                        {item.description}
                      </p>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full max-w-[400px] h-[300px] object-cover rounded-lg border border-neutral-800"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile & Tablet Layout */}
          <div className="lg:hidden space-y-8 md:space-y-10">
            {/* Strategize Group */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <p className="text-lg sm:text-xl opacity-70">01</p>
                <h2 className="text-xl sm:text-2xl font-semibold">Strategize</h2>
              </div>
              
              {strategizeData.slice(0, 3).map((item) => (
                <div key={item.id} className="border-b border-neutral-800 py-4 sm:py-6">
                  <button
                    onClick={() => setOpen(open === item.id ? null : item.id)}
                    className="w-full flex justify-between items-center text-left group"
                  >
                    <span className="text-base sm:text-lg pr-4">{item.title}</span>
                    <span
                      className={`text-blue-500 text-lg sm:text-xl transition-transform flex-shrink-0 ${
                        open === item.id
                          ? "rotate-90"
                          : "group-hover:translate-x-1"
                      }`}
                    >
                      →
                    </span>
                  </button>

                  {open === item.id && (
                    <div className="mt-3 sm:mt-4 space-y-3 sm:space-y-4">
                      <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                        {item.description}
                      </p>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full max-w-full sm:max-w-[400px] h-[200px] sm:h-[300px] object-cover rounded-lg border border-neutral-800"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Create Group */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <p className="text-lg sm:text-xl opacity-70">02</p>
                <h2 className="text-xl sm:text-2xl font-semibold">Create</h2>
              </div>
              
              {strategizeData.slice(3, 5).map((item) => (
                <div key={item.id} className="border-b border-neutral-800 py-4 sm:py-6">
                  <button
                    onClick={() => setOpen(open === item.id ? null : item.id)}
                    className="w-full flex justify-between items-center text-left group"
                  >
                    <span className="text-base sm:text-lg pr-4">{item.title}</span>
                    <span
                      className={`text-blue-500 text-lg sm:text-xl transition-transform flex-shrink-0 ${
                        open === item.id
                          ? "rotate-90"
                          : "group-hover:translate-x-1"
                      }`}
                    >
                      →
                    </span>
                  </button>

                  {open === item.id && (
                    <div className="mt-3 sm:mt-4 space-y-3 sm:space-y-4">
                      <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                        {item.description}
                      </p>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full max-w-full sm:max-w-[400px] h-[200px] sm:h-[300px] object-cover rounded-lg border border-neutral-800"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Scale Group */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <p className="text-lg sm:text-xl opacity-70">03</p>
                <h2 className="text-xl sm:text-2xl font-semibold">Scale</h2>
              </div>
              
              {strategizeData.slice(5, 7).map((item) => (
                <div key={item.id} className="border-b border-neutral-800 py-4 sm:py-6">
                  <button
                    onClick={() => setOpen(open === item.id ? null : item.id)}
                    className="w-full flex justify-between items-center text-left group"
                  >
                    <span className="text-base sm:text-lg pr-4">{item.title}</span>
                    <span
                      className={`text-blue-500 text-lg sm:text-xl transition-transform flex-shrink-0 ${
                        open === item.id
                          ? "rotate-90"
                          : "group-hover:translate-x-1"
                      }`}
                    >
                      →
                    </span>
                  </button>

                  {open === item.id && (
                    <div className="mt-3 sm:mt-4 space-y-3 sm:space-y-4">
                      <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                        {item.description}
                      </p>
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full max-w-full sm:max-w-[400px] h-[200px] sm:h-[300px] object-cover rounded-lg border border-neutral-800"
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FLEXIBLE WORK SECTION */}
        <section className="text-white flex flex-col mt-16 md:mt-20 lg:mt-24">
          <div className="mb-12 md:mb-16 lg:mb-20">
            <h3 className="text-3xl sm:text-4xl md:text-5xl leading-tight">
              We are{" "}
              <span className="text-blue-700">
                flexible <br /> 2 ways{" "}
              </span>{" "}
              to work with us{" "}
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 mb-12 md:mb-16 lg:mb-20">
            {/* Project Based Card */}
            <BorderAnimation className="flex flex-col justify-between min-h-[320px] sm:min-h-[350px]">
              <div className="flex flex-col gap-4 sm:gap-5 p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl">Project Based</h3>
                <p className="text-sm sm:text-base leading-relaxed text-white/80">
                  If you have a need for a high-quality product delivered within
                  a set time frame, the traditional project-based model is your
                  best choice. We will work on the project design from A to Z
                  and ensure it's done in time and on budget.
                </p>
              </div>
              <Link 
                href={"#"} 
                className="flex gap-2 items-center px-6 sm:px-8 pb-6 sm:pb-8 group hover:text-blue-500 transition-colors"
              >
                Explore{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </BorderAnimation>

            {/* Dedicated Team Card */}
            <BorderAnimation className="flex flex-col justify-between min-h-[320px] sm:min-h-[350px]">
              <div className="flex flex-col gap-4 sm:gap-5 p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl">Dedicated Team</h3>
                <p className="text-sm sm:text-base leading-relaxed text-white/80">
                  For ongoing projects and long-term partnerships, our dedicated
                  team model provides you with consistent support. Get access to
                  expert designers who understand your brand and can scale with
                  your needs over time.
                </p>
              </div>
              <Link 
                href={"#"} 
                className="flex gap-2 items-center px-6 sm:px-8 pb-6 sm:pb-8 group hover:text-blue-500 transition-colors"
              >
                Explore{" "}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </BorderAnimation>
          </div>
        </section>

        {/* CTA SECTION */}
        <div className="bg-black w-full flex flex-col items-center text-center py-16 md:py-20 lg:py-24 px-4">
          <h2 className="text-gray-500 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans leading-tight mb-6 md:mb-8 lg:mb-10">
            Discover how we can elevate your product
          </h2>

          <h4 className="text-gray-600 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed max-w-4xl">
            Check our service guide to explore the challenges we can solve for
            you, our approach and methodology and a step-by-step overview of
            our process.
          </h4>

          <button className="mt-8 md:mt-10 bg-gray-900 text-gray-300 px-6 sm:px-8 md:px-10 py-3 md:py-4 border border-neutral-800 rounded-full hover:bg-black hover:text-white hover:border-blue-600 transition-all duration-300 text-sm sm:text-base">
            See how we work
          </button>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}