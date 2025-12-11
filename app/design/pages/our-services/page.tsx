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
        "Protect and enhance your brand’s online reputation with expert ORM services.",
      outputs: [
        "Monitor and manage online reviews and feedback",
        "Customized strategies to build trust and credibility",
        "Social media reputation management",
      ],
    },
    {
      id: 1,
      title: "ORM Services",
      description: "Safeguard and enhance your brand’s image with professional ORM services.",
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
    <div className="min-h-screen bg-black ">
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
  className="flex gap-10 overflow-x-auto scroll-smooth mt-20 hide-scrollbar w-[calc(3*420px)] ml-[300]"
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
      <p className="text-base leading-relaxed opacity-90">{card.description}</p>
       <ul className="list-disc ml-5 space-y-1 opacity-90">
      {card.outputs.map((item, idx) => (
        <li key={idx}>{item}</li>
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
      <div className="bg-black max-w-full flex flex-col items-center text-center py-20">
  <h2 className="text-gray-500 text-5xl font-sans">
    Discover how we can elevate your product
  </h2>

  <h4 className="text-gray-600 text-2xl mt-10">
    Check our service guide to explore the challenges we can solve for<br />
    you, our approach and methodology and a step-by-step overview of<br />
    our process.
  </h4>

  <button className="mt-10 bg-gray-900  text-gray-300 w-[200px] px-6 py-3  border-neutral rounded-full hover:bg-black hover:text-gray-700">
    See how we work
  </button>
</div>

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
