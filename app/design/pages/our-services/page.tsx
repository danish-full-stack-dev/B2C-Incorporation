"use client";
import React, { useRef, useState } from "react";
import { BorderAnimation } from "@/app/componants/BorderAnimation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Snowflake, Volleyball } from "lucide-react";

export default function DesignPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeCard, setActiveCard] = useState(0);
  const [open, setOpen] = useState<number | null>(null);

  const cards = [
    {
      id: 0,
      title: "kick-off",
      description:
        "The first meeting of the client and the design team that sets the course for a smooth project collaboration.",
      outputs: [
        "project scope and timeline",
        "planning",
        "discovery workshops",
      ],
    },
    {
      id: 1,
      title: "research",
      description: "We learn who the users are and what they need.",
      outputs: [
        "user personas",
        "user journeys & flows",
        "journey mapping",
        "interviews & surveys",
        "competitive analysis",
      ],
    },
    {
      id: 2,
      title: "ideation",
      description: "Think outside the box and generate creative solutions.",
      outputs: ["low-fi designs", "wireframes", "sketches", "prototypes"],
    },
    {
      id: 3,
      title: "testing",
      description: "Validate solutions with real users to refine improvements.",
      outputs: ["user testing", "A/B experiments", "feedback reports"],
    },
    {
      id: 4,
      title: "refinement",
      description: "Improve the design based on user feedback and testing.",
      outputs: ["final UI designs", "polished components"],
    },
    {
      id: 5,
      title: "handoff",
      description: "Deliver complete assets and documentation to developers.",
      outputs: ["design system", "dev-ready files", "documentation"],
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

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -350,
        behavior: "smooth",
      });
      setActiveCard((prev) => Math.max(prev - 1, 0));
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 350,
        behavior: "smooth",
      });
      setActiveCard((prev) => Math.min(prev + 1, cards.length - 1));
    }
  };

  return (
    <div className="min-h-screen bg-black ">
      <div className="flex items-end justify-between pr-10 w-11/12 ml-auto">
        <h2 className="text-5xl text-white max-w-2xl leading-tight mt-[120px]">
          Our design process <span className="text-blue-600">is tailored</span>
          <br />
          to your needs and goals
        </h2>

        <div className="flex gap-4">
          <ArrowLeft
            onClick={scrollLeft}
            className="text-white text-lg  w-5 h-5 flex items-center justify-center rounded-full hover:text-blue-600 hover:cursor-pointer transition-colors duration-500"
          />

          <ArrowRight
            onClick={scrollRight}
            className="text-white text-xl w-5 h-5 flex items-center justify-center rounded-full hover:text-blue-600 transition-colors hover:cursor-pointer duration-500"
          />
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth mt-20 hide-scrollbar w-11/12 ml-auto"
      >
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`min-w-[400px] p-6 rounded-xl border border-neutral-800 text-white transition-colors duration-500 ${
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
            <h3 className="text-lg font-semibold mt-6 mb-2">outputs</h3>
            <ul className="space-y-1 opacity-90">
              {card.outputs.map((output, idx) => (
                <li key={idx} className="list-disc ml-5">
                  {output}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="text-white font-sans mt-[120px] w-10/12 mx-auto">
        <h2 className="text-5xl mb-12 leading-tight">
          We know the <span className="text-blue-600">obstacles you face</span>,
          <br />
          so we’re here for both rapid <br /> solutions and long-term <br />{" "}
          partnership
        </h2>

        <div className="grid grid-cols-12 gap-6 py-10 border-b border-neutral-800">
          <div className="col-span-3 flex flex-col gap-40 mt-20">
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
                      className="w-[400px] h-[300px] object-cover rounded-lg border border-neutral-800"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <section className=" text-white flex flex-col mt-[100px]">
          <div className="text-4xl flex  justify-center mb-20">
            <div className="flex w-full mt-[50px]">
              <h3 className="w-2/5 leading-tight">
                We are{" "}
                <span className="text-blue-700">
                  flexible <br /> 2 ways{" "}
                </span>{" "}
                to work with us{" "}
              </h3>
            </div>
          </div>
          <div className="flex flex-row gap-10  mb-12">
            <BorderAnimation className="flex flex-col w-1/2 justify-between h-[25vh] p-8 ">
              <div className="flex flex-col gap-5 p-6">
                <h3 className="text-2xl">Project Based</h3>
                <p className="text-base">
                  If you have a need for a high-quality product delivered within
                  a set time frame, the traditional project-based model is your
                  best choice. We will work on the project design from A to Z
                  and ensure it's done in time and on budget.
                </p>
              </div>
              <Link href={"#"} className="flex gap-2 items-center pl-6 pb-3">
                Explore{" "}
                <span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </BorderAnimation>

            <BorderAnimation className="flex flex-col w-1/2 justify-between h-[25vh] p-8 ">
              <div className="flex flex-col gap-5 p-6">
                <h3 className="text-2xl">Project Based</h3>
                <p className="text-base">
                  If you have a need for a high-quality product delivered within
                  a set time frame, the traditional project-based model is your
                  best choice. We will work on the project design from A to Z
                  and ensure it's done in time and on budget.
                </p>
              </div>
              <Link href={"#"} className="flex gap-2 items-center pl-6 pb-3">
                Explore{" "}
                <span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </BorderAnimation>
          </div>
        </section>
      </div>

      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none; /* IE and Edge */
          scrollbar-width: none; /* Firefox */
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none; /* Chrome, Safari, Opera */
        }
      `}</style>
    </div>
  );
}
