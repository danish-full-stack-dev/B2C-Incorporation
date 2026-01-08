"use client";
import React, { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Sparkles, Zap, Rocket } from "lucide-react";
import { ServicesHero } from "@/app/componants/ServicesHero";
import { BorderAnimation } from "@/app/componants/BorderAnimation";
import { useRouter } from "next/navigation";

export default function DesignPage() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeCard, setActiveCard] = useState(0);
  const [open, setOpen] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navigate = useRouter();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const cards = [
    {
      id: 0,
      title: "Real Estate",
      description:
        "Transform property experiences with cutting-edge digital solutions",
      outputs: [
        "Virtual tours & 3D visualization",
        "AI-powered property matching",
        "Smart analytics dashboard",
      ],
    },
    {
      id: 1,
      title: "ORM Services",
      description:
        "Craft your digital narrative with precision and authenticity",
      outputs: [
        "Real-time sentiment analysis",
        "Crisis response automation",
        "Brand perception mapping",
      ],
    },
    {
      id: 2,
      title: "Blockchain",
      description:
        "Build the decentralized future with revolutionary technology",
      outputs: [
        "Smart contract architecture",
        "DeFi protocol development",
        "Web3 integration ecosystem",
      ],
    },
    {
      id: 3,
      title: "Trading Platform",
      description: "Engineer lightning-fast financial experiences",
      outputs: [
        "Real-time market data streaming",
        "Algorithmic trading engine",
        "Risk management suite",
      ],
    },
    {
      id: 4,
      title: "AI Automation",
      description: "Unleash intelligent systems that revolutionize operations",
      outputs: [
        "Autonomous workflow orchestration",
        "Predictive intelligence engine",
        "Self-optimizing systems",
      ],
    },
  ];

  const strategizeData = [
    {
      id: 1,
      title: "Product Discovery",
      description:
        "Uncover deep insights that transform ideas into market-defining products.",
      image: "/favicon.png",
      phase: "strategize",
    },
    {
      id: 2,
      title: "Proof of Concept",
      description:
        "Validate breakthrough ideas with rapid, high-fidelity prototypes.",
      image: "",
      phase: "strategize",
    },
    {
      id: 3,
      title: "MVP Design",
      description:
        "Launch lean, lovable products that captivate early adopters instantly.",
      image: "",
      phase: "strategize",
    },
    {
      id: 4,
      title: "UX/UI Excellence",
      description: "Craft interfaces that users love and competitors envy.",
      image: "",
      phase: "create",
    },
    {
      id: 5,
      title: "Design Systems",
      description:
        "Build scalable foundations for consistent, world-class experiences.",
      image: "",
      phase: "create",
    },
    {
      id: 6,
      title: "Brand Evolution",
      description:
        "Scale your visual identity while maintaining core authenticity.",
      image: "",
      phase: "scale",
    },
    {
      id: 7,
      title: "Growth Design",
      description:
        "Engineer experiences that drive exponential user acquisition.",
      image: "",
      phase: "scale",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    const current = scrollRef.current;
    if (!current) return;

    const isMobile = window.innerWidth < 640;
    const isTablet = window.innerWidth >= 640 && window.innerWidth < 1024;
    
    let cardWidth = 600 + 40; 
    if (isMobile) cardWidth = window.innerWidth - 32 + 16; 
    else if (isTablet) cardWidth = 500 + 32; 

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
    <div className="min-h-screen bg-black overflow-x-hidden relative">
      <div>
        <ServicesHero />
      </div>

      <div className="fixed inset-0 overflow-hidden pointer-events-none hidden md:block">
        <div
          className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] bg-blue-600/20 rounded-full blur-[120px] transition-all duration-1000"
          style={{
            left: mousePosition.x - 300,
            top: mousePosition.y - 300,
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-blue-600/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/3 left-1/3 w-[250px] h-[250px] md:w-[400px] md:h-[400px] bg-blue-500/10 rounded-full blur-[100px] animate-pulse" />
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between px-4 sm:px-6 md:px-8 lg:px-10 w-full lg:w-11/12 xl:w-10/12 mx-auto gap-6 sm:gap-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white max-w-2xl leading-tight mt-12 sm:mt-16 md:mt-20 lg:mt-[120px]">
          Our design process <span className="text-blue-600">is tailored</span>
          <br className="hidden sm:block" />
          <span className="sm:hidden"> </span>
          to your needs and goals
        </h2>

        <div className="flex gap-3 sm:gap-4 self-end sm:self-auto">
          <button
            onClick={() => scroll("left")}
            className="p-2 sm:p-3 rounded-full border border-white/20 hover:border-blue-600 transition-colors duration-300"
            aria-label="Scroll left"
          >
            <ArrowLeft className="text-white w-5 h-5 sm:w-6 sm:h-6 hover:text-blue-600 transition-colors duration-500" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-2 sm:p-3 rounded-full border border-white/20 hover:border-blue-600 transition-colors duration-300"
            aria-label="Scroll right"
          >
            <ArrowRight className="text-white w-5 h-5 sm:w-6 sm:h-6 hover:text-blue-600 transition-colors duration-500" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 overflow-x-auto scroll-smooth mt-8 sm:mt-12 md:mt-16 lg:mt-20 hide-scrollbar px-4 sm:px-6 md:px-8 lg:px-0 lg:w-11/12 xl:w-10/12 mx-auto"
      >
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`min-w-[calc(100vw-2rem)] sm:min-w-[500px] lg:min-w-[600px] p-5 sm:p-6 md:p-8 rounded-xl border border-neutral-800 text-white transition-all duration-500 ${
              activeCard === index
                ? "bg-blue-600 shadow-xl shadow-blue-600/30"
                : "bg-neutral-900"
            }`}
          >
            <p className="text-xs sm:text-sm font-semibold opacity-70">
              {String(card.id + 1).padStart(2, "0")}
            </p>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-2 mb-3 sm:mb-4">
              {card.title}
            </h2>
            <p className="text-sm sm:text-base leading-relaxed opacity-90 mb-4">
              {card.description}
            </p>
            <ul className="list-disc ml-4 sm:ml-5 space-y-1 sm:space-y-2 opacity-90">
              {card.outputs.map((item, idx) => (
                <li key={idx} className="text-sm sm:text-base">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="relative text-white mt-20 sm:mt-24 md:mt-32 lg:mt-40 xl:mt-48 w-full px-4 sm:px-6 md:px-8 lg:w-11/12 xl:w-10/12 mx-auto">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-4 sm:mb-6 px-4">
            Your journey to <span className="text-blue-800">excellence</span>
          </h2>
          <p className="text-white/60 text-base sm:text-lg md:text-xl max-w-3xl mx-auto px-4">
            We don't just design interfaces—we architect experiences that
            captivate, convert, and scale
          </p>
        </div>

        <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24">
          {[
            {
              phase: "01",
              title: "Strategize",
              subtitle: "Foundation of Innovation",
              items: strategizeData.filter(
                (item) => item.phase === "strategize"
              ),
            },
            {
              phase: "02",
              title: "Create",
              subtitle: "Crafting Masterpieces",
              items: strategizeData.filter((item) => item.phase === "create"),
            },
            {
              phase: "03",
              title: "Scale",
              subtitle: "Exponential Growth",
              items: strategizeData.filter((item) => item.phase === "scale"),
            },
          ].map((section, sectionIdx) => (
            <div key={sectionIdx} className="relative">
              <div className="flex items-center gap-3 sm:gap-4 md:gap-6 mb-8 sm:mb-10 md:mb-12">
                <div className="relative text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-500 opacity-20">
                  {section.phase}
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium mb-1 sm:mb-2">
                    {section.title}
                  </h3>
                  <p className="text-white/50 text-sm sm:text-base md:text-lg">
                    {section.subtitle}
                  </p>
                </div>
              </div>

              <div className="space-y-4 sm:space-y-5 md:space-y-6">
                {section.items.map((item) => (
                  <div
                    key={item.id}
                    className="group relative bg-white/5 backdrop-blur-xl rounded-xl sm:rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-blue-800 opacity-0 group-hover:opacity-10 transition-opacity" />

                    <button
                      onClick={() => setOpen(open === item.id ? null : item.id)}
                      className="relative w-full flex justify-between items-center text-left p-4 sm:p-5 md:p-6 lg:p-8"
                    >
                      <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-1">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-blue-800 flex-shrink-0" />
                        <span className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold">
                          {item.title}
                        </span>
                      </div>

                      <div
                        className={`text-xl sm:text-2xl transition-all duration-300 flex-shrink-0 ${
                          open === item.id
                            ? "rotate-90"
                            : "group-hover:translate-x-2"
                        }`}
                      >
                        <span className="text-blue-800">→</span>
                      </div>
                    </button>

                    {open === item.id && (
                      <div className="relative px-4 sm:px-5 md:px-6 lg:px-8 pb-4 sm:pb-5 md:pb-6 lg:pb-8 space-y-4 sm:space-y-5 md:space-y-6">
                        <p className="text-white/70 text-sm sm:text-base md:text-lg leading-relaxed pl-4 sm:pl-5 md:pl-6">
                          {item.description}
                        </p>
                        {item.image && (
                          <div className="pl-4 sm:pl-5 md:pl-6">
                            <img
                              src={item.image}
                              alt={item.title}
                              className="w-full max-w-2xl h-48 sm:h-64 md:h-80 lg:h-[300px] object-cover rounded-lg sm:rounded-xl border border-white/10"
                            />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="relative text-white mt-20 sm:mt-24 md:mt-32 lg:mt-40 xl:mt-48 w-full px-4 sm:px-6 md:px-8 lg:w-11/12 xl:w-10/12 mx-auto">
        <div className="flex flex-col items-center text-center mb-8 sm:mb-12 md:mb-16">
          <h3 className="text-2xl sm:text-3xl md:text-4xl leading-tight max-w-3xl">
            We are{" "}
            <span className="text-blue-700">
              flexible <br className="sm:hidden" />
              <span className="hidden sm:inline">with </span>2 ways{" "}
            </span>{" "}
            to work with us
          </h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 mx-auto">
          <div
            className="w-full lg:w-1/2"
            onClick={() => {
              navigate.push("/design/works/saya");
            }}
          >
            <BorderAnimation className="flex flex-col justify-between min-h-[280px] sm:min-h-[320px] md:min-h-[340px] lg:h-[25vh] p-5 sm:p-6 md:p-8 group hover:cursor-pointer">
              <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 p-3 sm:p-4 md:p-6">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                  Fixed Price Project
                </h3>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                  If you have a need for a high-quality product delivered within
                  a set time frame, the traditional project-based model is your
                  best choice. We will work on the project design from A to Z
                  and ensure it's done in time and on budget.
                </p>
              </div>
              <p className="flex gap-2 items-center pl-3 sm:pl-4 md:pl-6 pb-2 sm:pb-3 w-fit text-sm sm:text-base">
                Explore{" "}
                <span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </p>
            </BorderAnimation>
          </div>

          <div
            className="w-full lg:w-1/2"
            onClick={() => {
              navigate.push("/design/works/saya");
            }}
          >
            <BorderAnimation className="flex flex-col justify-between min-h-[280px] sm:min-h-[320px] md:min-h-[340px] lg:h-[25vh] p-5 sm:p-6 md:p-8 group hover:cursor-pointer">
              <div className="flex flex-col gap-3 sm:gap-4 md:gap-5 p-3 sm:p-4 md:p-6">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold">
                  Hourly Based Project
                </h3>
                <p className="text-sm sm:text-base md:text-lg leading-relaxed">
                  For ongoing design needs that require flexibility and
                  adaptability, our hourly-based engagement model is ideal. You
                  can scale the design resources up or down based on your
                  current requirements, ensuring you only pay for what you need.
                </p>
              </div>
              <p className="flex gap-2 items-center w-fit pl-3 sm:pl-4 md:pl-6 pb-2 sm:pb-3 text-sm sm:text-base">
                Explore{" "}
                <span>
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </p>
            </BorderAnimation>
          </div>
        </div>
      </section>

      <div className="relative w-full bg-black flex flex-col items-center text-center py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6">
        <div className="absolute inset-0" />

        <div className="relative max-w-5xl">
          <Sparkles className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-blue-800 mx-auto mb-6 sm:mb-8 animate-pulse" />

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-blue-800 leading-tight mb-4 sm:mb-6 px-4">
            Ready to create{" "}
            <span className="text-blue-800">something extraordinary</span>?
          </h2>

          <p className="text-white/60 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8 sm:mb-10 md:mb-12 max-w-3xl mx-auto px-4">
            Let's transform your vision into a digital masterpiece that
            captivates users and dominates markets
          </p>

          <button className="group relative px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-blue-800 text-white font-bold text-base sm:text-lg md:text-xl rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50">
            <span className="relative z-10">Let's Talk</span>
            <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-100 transition-opacity" />
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