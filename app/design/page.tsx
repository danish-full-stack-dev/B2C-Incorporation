"use client";
import React, { useEffect, useRef, useState } from "react";
import { ArrowRight, Instagram, Linkedin, Snowflake } from "lucide-react";
import Link from "next/link";
import { ButtonsWithArcs } from "../componants/ButtonsWithArcs";
import { BorderAnimation } from "../componants/BorderAnimation";
import { designCards } from "../componants/CaseStudies";
import { useCursor } from "../hooks/CursorContext";
import { useRouter } from "next/navigation";
import TestimonialsSectionForDesign from "../componants/TestimonialsForDesignSection";

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
      className={`flex py-10 ${reverse ? "flex-row-reverse" : ""} group`}
      onMouseEnter={() => setValue("discover")}
      onMouseLeave={() => setValue(null)}
      onClick={() => {
        setValue(null);
        router.push(`/design/works/${title.toLowerCase()}`);
      }}
    >
      {/* Image + tags */}
      <aside className="flex flex-col text-sm w-4/6 overflow-hidden hover:cursor-pointer transition-transform duration-300 relative">
        <div className="absolute group-hover:bg-black/30 group-hover:backdrop-blur-sm inset-0 transition-all duration-300" />
        <div className="flex text-white/80">
          <img
            src={image}
            alt="laptop"
            className="w-full h-[72vh] object-cover"
          />
        </div>

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

      <div
        className={`flex flex-col w-2/6 px-6 opacity-0 group-hover:opacity-100 transition duration-300 gap-2 pl-5`}
      >
        <h2 className={`text-6xl font-bold ${color}`}>{title}</h2>
        <h3 className="text-2xl font-thin text-white">{heading}</h3>
      </div>
    </div>
  );
};

export default function DesignHome() {
  const texts: string[] = [
    "We design.",
    "We research.",
    "We care about your users.",
    "We scale.",
  ];

  const [index, setIndex] = useState<number>(0);
  const [fade, setFade] = useState<boolean>(true);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const navigate = useRouter();

  const scroll = (direction: "left" | "right") => {
    const current = scrollRef.current;
    if (!current) return;

    const scrollAmount = Math.round(current.offsetWidth / 2);

    current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

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
      <section className="relative bg-black h-screen ">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source src="/Design page video.mp4" type="video/mp4" />
        </video>

        <div className="relative flex justify-center items-center text-white h-5/6">
          <div className="gap-6 flex flex-col justify-center items-center text-center">
            {/* Center CONTENT */}
            <h1 className="font-pt text-4xl lg:text-7xl font-medium text-white mb-6">
              Hello, we are{" "}
              <span className="text-blue-500">UX design studio.</span>
              <span
                className={`block transition-all duration-500 ${
                  fade
                    ? "translate-y-0 opacity-100"
                    : "-translate-y-3 opacity-0"
                }`}
              >
                {texts[index]}
              </span>
            </h1>
            <button className="px-8 py-2 rounded-full outline">
              craft a UX that converts
            </button>
          </div>
        </div>
      </section>
      <main className="w-10/12 mx-auto">
        <section className="min-h-screen text-white/85">
          <div className="text-5xl w-full flex justify-center pt-16">
            <div className="flex w-full">
              <h3 className="w-2/5 font-thin">
                We focus on the <br />
                <span className="text-blue-700">outcome</span>, not only on{" "}
                <br /> the output
              </h3>
            </div>
          </div>
          <div className="flex flex-row gap-10 w-full mt-16 p-3">
            <BorderAnimation className="flex flex-col w-1/3 justify-between h-[50vh]">
              <div className="flex flex-col px-8 pt-8">
                <Snowflake className="w-12 h-12 text-blue-800" />
                <h3 className="my-8 text-2xl">Trading Platform</h3>
                <div className="flex flex-col text-lg gap-2 text-white/75">
                  {[
                    "Crypto & Trading Design Services",
                    "Digital Design for Trading & NFTs",
                    "Crypto Branding & NFT Art",
                    "Trading UI/UX & Crypto Graphics",
                    "NFT & Crypto Visual Design",
                    "Web3 Design Solutions",
                  ].map((value, idx) => (
                    <li key={idx} className="list-inside">
                      {value}
                    </li>
                  ))}
                </div>
              </div>
              <Link href={"#"} className="flex gap-2 items-center p-8 group">
                Explore{" "}
                <span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition duration-300" />
                </span>
              </Link>
            </BorderAnimation>
            <BorderAnimation className="flex flex-col w-1/3 justify-between h-[50vh]">
              <div className="flex flex-col px-8 pt-8">
                <Snowflake className="w-12 h-12 text-blue-800" />
                <h3 className="my-8 text-2xl">Real State</h3>
                <div className="flex flex-col text-lg gap-2 text-white/75">
                  {[
                    "Interior & Exterior Design",
                    "Real Estate Interiors & Exteriors",
                    "Property Interior–Exterior",
                    "Interior | Exterior Visuals",
                    "Real Estate Design Duo",
                    "Property Media & Design",
                  ].map((value, idx) => (
                    <li key={idx} className="list-inside">
                      {value}
                    </li>
                  ))}
                </div>
              </div>
              <Link href={"#"} className="flex gap-2 items-center p-8 group">
                Explore{" "}
                <span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition duration-300" />
                </span>
              </Link>
            </BorderAnimation>
            <BorderAnimation className="flex flex-col w-1/3 justify-between h-[50vh] ">
              <div className="flex flex-col px-8 pt-8">
                <Snowflake className="w-12 h-12 text-blue-800" />
                <h3 className="my-8 text-2xl">Media Buying</h3>
                <div className="flex flex-col text-lg gap-2 text-white/75">
                  {[
                    "Ad Creative Design",
                    "Media Visual Production",
                    "Paid Campaign Graphics",
                    "Marketing Ad Assets",
                    "Performance Creative",
                    "Marketing Design",
                  ].map((value, idx) => (
                    <li key={idx} className="list-inside">
                      {value}
                    </li>
                  ))}
                </div>
              </div>
              <Link href={"#"} className="flex gap-2 items-center p-8 group">
                Explore{" "}
                <span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition duration-300" />
                </span>
              </Link>
            </BorderAnimation>
          </div>
        </section>

        <section className="min-h-screen text-white">
          <div className="flex items-center flex-col">
            <h2 className="font-pt text-2xl lg:text-5xl text-center font-medium text-white mb-6">
              Our design process is well-troddon <br /> path to{" "}
              <span className="text-blue-500">your success</span>
            </h2>
            <div className="py-16">
              <BorderAnimation className="flex items-center hover:cursor-pointer group ">
                <button className="pl-8 pr-2 py-2">
                  Our design process in details
                </button>
                <span className="pr-6">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition duration-300" />
                </span>
              </BorderAnimation>
            </div>
          </div>
          <ButtonsWithArcs />
        </section>
        <section className="min-h-screen text-white">
          <div className="w-full gap-10">
            <div className="flex justify-between items-center">
              <h2 className="font-pt text-2xl lg:text-5xl text-center font-medium text-white py-10">
                Our work speak louder than words
              </h2>
              <p className="w-fit flex items-center hover:cursor-pointer border group rounded-full">
                <button className="pl-4 pr-2 py-2">see all cases</button>
                <span className="pr-4">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition duration-300" />
                </span>
              </p>
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
      <section className="flex flex-col bg-black justify-center items-end">
        <div className="w-10/12 mx-auto">
          <TestimonialsSectionForDesign />
        </div>
      </section>
      <section className="min-h-screen text-white flex flex-col  justify-between">
        <div className="text-4xl flex w-10/12 mx-auto  justify-center">
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
        <div className="flex flex-row  gap-10 w-10/12 mx-auto my-16">
          <div
            className="w-1/2"
            onClick={() => {
              navigate.push("/design/works/kao");
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
        <section className="flex w-10/12 mx-auto my-16 justify-between">
          <div className="flex flex-col w-full">
            <h3 className="w-4/5 text-4xl leading-tight">
              Let's make something <br />
              <span className="text-blue-700">awesome together!</span>
            </h3>
            <div className="flex gap-4 my-10">
              <Link
                href={"/"}
                className="px-8 py-2 rounded-full w-fit outline-1 outline"
              >
                Schedule..!
              </Link>
              <Link
                href={"/"}
                className="px-3 py-3 rounded-full w-fit outline-1 outline"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href={"/"}
                className="px-3 py-3 rounded-full w-fit outline-1 outline"
              >
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <aside className="w-1/4">
            <img
              src="/favicon.png"
              alt="logo"
              className="w-2/3 object-cover opacity-50 -rotate-45"
            />
          </aside>
        </section>
        <div className="absolute -z-10 inset-0 flex justify-end"></div>
      </section>
    </div>
  );
}
