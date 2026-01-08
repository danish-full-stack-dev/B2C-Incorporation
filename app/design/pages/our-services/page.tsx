"use client";
import React, { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Sparkles, Zap, Rocket } from "lucide-react";
import { ServicesHero } from "@/app/componants/ServicesHero";
import { BorderAnimation } from "@/app/componants/BorderAnimation";
import { useRouter } from "next/navigation";
import { Router } from "next/router";

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
      image: "/favicon.png",
      phase: "strategize",
    },
    {
      id: 3,
      title: "MVP Design",
      description:
        "Launch lean, lovable products that captivate early adopters instantly.",
      image: "/favicon.png",
      phase: "strategize",
    },
    {
      id: 4,
      title: "UX/UI Excellence",
      description: "Craft interfaces that users love and competitors envy.",
      image: "/favicon.png",
      phase: "create",
    },
    {
      id: 5,
      title: "Design Systems",
      description:
        "Build scalable foundations for consistent, world-class experiences.",
      image: "/favicon.png",
      phase: "create",
    },
    {
      id: 6,
      title: "Brand Evolution",
      description:
        "Scale your visual identity while maintaining core authenticity.",
      image: "/favicon.png",
      phase: "scale",
    },
    {
      id: 7,
      title: "Growth Design",
      description:
        "Engineer experiences that drive exponential user acquisition.",
      image: "/favicon.png",
      phase: "scale",
    },
  ];

  const scroll = (direction: "left" | "right") => {
    const current = scrollRef.current;
    if (!current) return;

    const cardWidth = 600 + 40;
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
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] transition-all duration-1000"
          style={{
            left: mousePosition.x - 300,
            top: mousePosition.y - 300,
          }}
        />
      </div>

      <div className="flex items-end justify-between pr-10 w-10/12 mx-auto ">
        <h2 className="text-5xl text-white max-w-2xl leading-tight mt-[120px]">
          Our design process <span className="text-blue-600">is tailored</span>
          <br />
          to your needs and goals
        </h2>

        <div className="flex gap-4">
          <ArrowLeft
            onClick={() => scroll("left")}
            className="text-white w-6 h-6 flex items-center justify-center rounded-full hover:text-blue-600 hover:cursor-pointer transition-colors duration-500"
          />
          <ArrowRight
            onClick={() => scroll("right")}
            className="text-white w-6 h-6 flex items-center justify-center rounded-full hover:text-blue-600 hover:cursor-pointer transition-colors duration-500"
          />
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-10 overflow-x-auto scroll-smooth mt-20 hide-scrollbar w-10/12 mx-auto"
      >
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`min-w-[600px] p-6 rounded-xl border border-neutral-800 text-white transition-colors duration-500 ${
              activeCard === index ? "bg-blue-600" : "bg-neutral-900"
            }`}
          >
            <p className="text-sm font-semibold opacity-70">
              {String(card.id + 1).padStart(2, "0")}
            </p>
            <h2 className="text-2xl font-semibold mt-1 mb-4">{card.title}</h2>
            <p className="text-base leading-relaxed opacity-90">
              {card.description}
            </p>
            <ul className="list-disc ml-5 space-y-1 opacity-90">
              {card.outputs.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="text-white mt-32 md:mt-40 lg:mt-48 w-full px-4 sm:px-6 md:px-8 lg:w-11/12 xl:w-10/12 mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight mb-6">
            Your journey to <span className="text-blue-800">excellence</span>
          </h2>
          <p className="text-white/60 text-lg md:text-xl max-w-3xl mx-auto">
            We don't just design interfaces—we architect experiences that
            captivate, convert, and scale
          </p>
        </div>

        <div className="space-y-24">
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
              <div className="flex items-center gap-6 mb-12">
                <div className="relative text-3xl md:text-5xl font-bold text-blue-500 opacity-20">
                  {section.phase}
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-medium mb-2">
                    {section.title}
                  </h3>
                  <p className="text-white/50 text-lg">{section.subtitle}</p>
                </div>
              </div>

              <div className="space-y-6">
                {section.items.map((item) => (
                  <div
                    key={item.id}
                    className="group relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-blue-800 opacity-0 group-hover:opacity-10 transition-opacity" />

                    <button
                      onClick={() => setOpen(open === item.id ? null : item.id)}
                      className="relative w-full flex justify-between items-center text-left p-6 md:p-8"
                    >
                      <div className="flex items-center gap-4 flex-1">
                        <div className="w-2 h-2 rounded-full bg-blue-800" />
                        <span className="text-xl md:text-2xl font-semibold">
                          {item.title}
                        </span>
                      </div>

                      <div
                        className={`text-2xl transition-all duration-300 ${
                          open === item.id
                            ? "rotate-90"
                            : "group-hover:translate-x-2"
                        }`}
                      >
                        <span className="text-blue-800">→</span>
                      </div>
                    </button>

                    {open === item.id && (
                      <div className="relative px-6 md:px-8 pb-6 md:pb-8 space-y-6">
                        <p className="text-white/70 text-base md:text-lg leading-relaxed pl-6">
                          {item.description}
                        </p>
                        <div className="pl-6">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-full max-w-2xl h-[300px] object-cover rounded-xl border border-white/10"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <section className="text-white mt-32 md:mt-40 lg:mt-48 w-full px-4 sm:px-6 md:px-8 lg:w-11/12 xl:w-10/12 mx-auto">
        <div className="text-4xl flex mx-auto  justify-center">
          <div className="flex w-full">
            <h3 className="w-2/5 leading-tight">
              We are{" "}
              <span className="text-blue-700">
                flexible <br /> 2 ways{" "}
              </span>{" "}
              to work with us{" "}
            </h3>
          </div>
        </div>
        <div className="flex flex-row  gap-10 mx-auto my-16">
          <div
            className="w-1/2"
            onClick={() => {
              navigate.push("/design/works/saya");
            }}
          >
            <BorderAnimation className="flex flex-col justify-between h-[25vh] p-8 group hover:cursor-pointer">
              <div className="flex flex-col gap-5 p-6">
                <h3 className="text-2xl">Fixed Price Project</h3>
                <p className="text-base">
                  If you have a need for a high-quality product delivered within
                  a set time frame, the traditional project-based model is your
                  best choice. We will work on the project design from A to Z
                  and ensure it's done in time and on budget.
                </p>
              </div>
              <p className="flex gap-2 items-center pl-6 pb-3 w-fit">
                Explore{" "}
                <span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </p>
            </BorderAnimation>
          </div>

          <div
            className="w-1/2"
            onClick={() => {
              navigate.push("/design/works/saya");
            }}
          >
            <BorderAnimation className="flex flex-col justify-between h-[25vh] p-8 group hover:cursor-pointer ">
              <div className="flex flex-col gap-5 p-6">
                <h3 className="text-2xl">Hourly Based Project</h3>
                <p className="text-base">
                  For ongoing design needs that require flexibility and
                  adaptability, our hourly-based engagement model is ideal. You
                  can scale the design resources up or down based on your
                  current requirements, ensuring you only pay for what you need.
                </p>
              </div>
              <p className="flex gap-2 items-center w-fit pl-6 pb-3">
                Explore{" "}
                <span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                </span>
              </p>
            </BorderAnimation>
          </div>
        </div>
      </section>

      <div className="w-full bg-black flex flex-col items-center text-center py-24 md:py-32 px-4">
        <div className="max-w-5xl">
          <Sparkles className="w-16 h-16 text-blue-800 mx-auto mb-8 animate-pulse" />

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Ready to create{" "}
            <span className="text-blue-800">something extraordinary</span>..?
          </h2>

          <p className="text-white/60 text-base md:text-lg lg:text-xl leading-relaxed mb-12 max-w-3xl mx-auto">
            Let's transform your vision into a digital masterpiece that
            captivates users and dominates markets
          </p>

          <button className="group relative px-10 py-3 bg-blue-800 text-white font-medium rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50">
            <span className="relative z-10 text-base">Let's Talk</span>
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
