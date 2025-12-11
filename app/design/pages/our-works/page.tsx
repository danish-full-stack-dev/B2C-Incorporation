"use client";
import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Volleyball } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCursor } from "@/app/hooks/CursorContext";
import { designCards } from "@/app/componants/CaseStudies";
import { DesignPageNavbar } from "@/app/componants/navbar/DesignPageNavbar";

interface Props {
  image: string;
  heading: string;
  listOfFeatures: string[];
  reverse?: boolean;
}

const ImageDiv = ({ image, heading, listOfFeatures, reverse }: Props) => {
  const { setValue } = useCursor();
  const router = useRouter();

  return (
    <div
      className={`flex py-10 ${reverse ? "flex-row-reverse" : ""} group`}
      onMouseEnter={() => setValue("discover")}
      onMouseLeave={() => setValue(null)}
      onClick={() => {
        setValue(null);
        router.push("/design/works/kao");
      }}
    >
      <aside className="flex flex-col text-sm w-4/6 overflow-hidden hover:cursor-pointer hover:scale-[1.03] transition-transform duration-300 relative">
        <div className="absolute group-hover:bg-black/30 group-hover:backdrop-blur-sm inset-0 transition-all duration-300" />
        <img src={image} alt="laptop" className="w-full h-[72vh] object-cover" />

        <div className="flex gap-3 py-7 flex-wrap">
          {listOfFeatures.map((value, idx) => (
            <h4
              key={idx}
              className="px-3 py-1 border rounded-full hover:bg-blue-800 transition"
            >
              {value}
            </h4>
          ))}
        </div>
      </aside>

      <div className="flex flex-col w-2/6 px-6 opacity-0 group-hover:opacity-100 transition duration-300">
        <h2 className="text-7xl font-bold text-blue-800">Kao</h2>
        <h3 className="text-4xl font-thin text-white">{heading}</h3>
      </div>
    </div>
  );
};

export default function DesignHome() {
  const texts = ["We design.", "We research.", "We care about your users.", "We scale."];
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
              <h2 className="font-pt text-2xl lg:text-5xl font-medium text-white py-10">
                We work to help your products<br></br><span className="text-blue-700">find their users</span>
              </h2>
            </div>

            <div className="flex flex-col gap-5">
              {designCards.map((card, i) => (
                <ImageDiv
                  key={i}
                  image={card.image}
                  heading={card.heading}
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
      <button className="px-8 py-2 rounded-full outline"> drop a line.! </button>
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
