"use client";
import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Volleyball } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCursor } from "@/app/hooks/CursorContext";
import { designCards } from "@/app/componants/CaseStudies";
import { DesignPageNavbar } from "@/app/componants/navbar/DesignPageNavbar";
import FadeSlideIn from "@/app/hooks/FadeSlideIn";

interface Props {
  title: string;
  image: string;
  heading: string;
  position?: string;
  listOfFeatures: string[];
  reverse?: boolean;
}

const ImageDiv = (props: Props) => {
  const { title, image, heading, listOfFeatures, reverse } = props;
  const { setValue } = useCursor();
  const router = useRouter();

  const colors = () => {
    if (title === "Kao") {
      return "text-[#D6031A]";
    } else if (title === "Saya") {
      return "text-[#744E35]";
    } else if (title === "Scheweppes") {
      return "text-[#FCDB45]";
    } else {
      return "bg-gradient-to-b from-[#f5d98b] via-[#d4a843] to-[#8a5a12] bg-clip-text text-transparent";
    }
  };
  const color = colors();
  return (
    <div
      className={`flex py-10 md:flex-row flex-col ${
        reverse ? "md:flex-row-reverse" : ""
      } group`}
      onMouseEnter={() => setValue("discover")}
      onMouseLeave={() => setValue(null)}
      onClick={() => {
        setValue(null);
        router.push(`/design/works/${title.toLowerCase()}`);
      }}
    >
      {/* Image + tags */}
      <FadeSlideIn className="flex flex-col text-sm md:w-4/6 w-full overflow-hidden hover:cursor-pointer transition-transform duration-300 relative">
        <div className="absolute md:block hidden group-hover:bg-black/30 group-hover:backdrop-blur-sm inset-0 transition-all duration-300" />
        <div className="flex text-white/80">
          <img
            src={image}
            alt="laptop"
            className="w-full md:h-[72vh] h-60 object-cover"
          />
        </div>

        <div className="flex md:gap-3 gap-1 md:py-7 py-2 flex-wrap md:justify-start justify-end pr-5">
          {listOfFeatures.map((value, idx) => (
            <h4
              key={idx}
              className="px-3 py-1 border rounded-full hover:bg-blue-800 transition md:text-base text-xs"
            >
              {value}
            </h4>
          ))}
        </div>
      </FadeSlideIn>

      <div
        className={`flex flex-col md:w-2/6 w-full px-6 md:opacity-0 opacity-100 group-hover:opacity-100 transition duration-300 gap-2 pl-5`}
      >
        <h2 className={`md:text-6xl text-2xl font-bold ${color}`}>{title}</h2>
        <h3 className="md:text-2xl text-lg font-thin text-white">{heading}</h3>
      </div>
    </div>
  );
};

export default function DesignHome() {
  const texts = [
    "We design.",
    "We research.",
    "We care about your users.",
    "We scale.",
  ];
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % texts.length);
        setFade(true);
      }, 400);
    }, 2500);

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="w-full bg-black">
      <main className="w-10/12 mx-auto pt-44">
        <section className="min-h-screen text-white">
          <div className="w-full gap-10">
            <div className="flex justify-between items-center">
              <h2 className="font-pt text-2xl lg:text-5xl font-medium text-white py-10 gap-3 flex flex-col">
                We work to help your products
                <span className="text-blue-700">find their users</span>
              </h2>
            </div>

            <div className="flex flex-col gap-5">
              {designCards.map((card, i) => (
                <ImageDiv
                  key={i}
                  title={card.title}
                  image={card.image}
                  heading={card.heading}
                  position={card.position}
                  listOfFeatures={card.listOfFeatures}
                  reverse={i % 2 !== 0}
                />
              ))}
            </div>
          </div>
        </section>
      </main>

      <section className="text-white flex flex-col justify-between">
        <section className="flex w-10/12 mx-auto my-16 items-center justify-between">
          <div className="flex flex-col w-full">
            <h3 className="w-4/5 text-4xl leading-tight">
              Let's make something <br />
              <span className="text-blue-700">awesome together!</span>
            </h3>

            <div className="flex gap-4 my-10">
              <button className="px-8 py-2 rounded-full outline">
                {" "}
                drop a line.!{" "}
              </button>
              <button className="px-3 py-3 rounded-full outline">
                <Volleyball className="w-5 h-5" />
              </button>
              <button className="px-3 py-3 rounded-full outline">
                <Volleyball className="w-5 h-5" />
              </button>
            </div>
          </div>

          <aside className="flex justify-end mr-20">
            <img
              src="/favicon.png"
              alt="logo"
              className="w-1/4 h-1/4 object-contain opacity-50 -rotate-45"
            />
          </aside>
        </section>

        <div className="absolute -z-10 inset-0 flex justify-end" />
      </section>
    </div>
  );
}
