"use client";
import { designCards } from "@/app/componants/CaseStudies";
import CursorDot from "@/app/componants/CursorDot";
import ZoomImage from "@/app/componants/zoomImage";
import { useCursor } from "@/app/hooks/CursorContext";
import FadeSlideIn from "@/app/hooks/FadeSlideIn";
import {
  ArrowLeft,
  Eye,
  Loader,
  LucideStars,
  Palette,
  Volleyball,
} from "lucide-react";
import Image from "next/image";

export default function page() {
  const { setValue } = useCursor();
  const stages = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "UX Audit",
      hours: "40h",
      tags: [
        "User Research",
        "Competitor Analysis",
        "Heuristic Evaluation",
        "Accessibility Check",
        "UX Audit Report",
      ],
      highlightTag: "UX Audit Report",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Design",
      hours: "60h",
      tags: [
        "Customer Journey Map",
        "Wireframing",
        "Prototyping",
        "High-Fidelity Design",
      ],
      highlightTag: "High-Fidelity Design",
    },
    {
      icon: <Loader className="w-6 h-6" />,
      title: "Testing",
      hours: "50h",
      tags: [
        "Usability Testing",
        "Data Analysis",
        "Design Changes",
        "CX Strategy",
        "Handoff",
      ],
      highlightTag: "Usability Testing",
    },
  ];
  return (
    <div className="bg-black">
      <div className="min-h-screen mx-auto flex flex-col w-10/12 pt-32 gap-1">
        <div className="p-5 hover:cursor-pointer flex justify-center items-center rounded-full border-2 h-fit w-fit hover:bg-blue-700 duration-300">
          <button className="">
            <ArrowLeft className="w-4 h-4 text-white" />
          </button>
        </div>
        <div className="flex justify-start w-10/12 mx-auto">
          <div className="flex flex-col gap-2">
            <h1 className="text-7xl text-blue-700 font-thin">
              Kao: A Cosmetics, Hygiene and Chemical Business.
            </h1>
            <span className="text-3xl text-white/80">Website</span>
          </div>
        </div>

        <div className="w-1/2 mx-auto my-40">
          <ZoomImage source="/kaoCaseStudy.png" />
        </div>
      </div>
      <div className="mx-auto w-10/12">
        <FadeSlideIn className="text-white/80 flex gap-5 justify-between py-10">
          <div className="w-4/6">
            <h2 className="text-5xl pb-20 border-b-2">
              Boosting the KYC flow's task success rate by 33%
            </h2>
            <div>
              <h4 className="text-2xl py-5">Client needs</h4>
              <p>
                The client needed a solution to enhance their KYC (Know Your
                Customer) flow, which was experiencing a high abandonment rate
                and a lower-than-expected task success rate. Through a
                comprehensive UX audit, targeted redesign, and two rounds of
                usability testing, we delivered a significant improvement. This
                approach led to a 33% boost in task success rate and a 39%
                reduction in abandonment, streamlining the user journey and
                enhancing the overall usability of the KYC flow.
              </p>
            </div>
          </div>
          <div className="w-2/6 flex justify-end">
            <div className="flex gap-3">
              <h5 className="text-lg rounded-full border-2 h-fit px-4 py-1">
                Redesign
              </h5>
              <h5 className="text-lg rounded-full border-2 px-4 h-fit py-1">
                User Resurch
              </h5>
              <h5 className="text-lg rounded-full border-2 px-4 py-1 h-fit">
                UX Audit
              </h5>
            </div>
          </div>
        </FadeSlideIn>
        <FadeSlideIn className="bg-[#16141c]">
          <div className="min-h-screen flex flex-col text-white/80 w-2/3 mx-auto">
            <div className="mt-auto">
              <div className="flex items-center gap-4">
                <div className="bg-red-500 p-2 rounded-full">
                  <Volleyball className="w-10 h-10" />
                </div>
                <p className="text-lg rounded-full px-8 py-3 border">About</p>
              </div>
              <div className="py-14 border-b border-gray-300">
                <h4 className="text-5xl leading-tight">
                  Through a comprehensive UX audit, targeted redesign, and two
                  rounds of usability testing, we delivered a significant
                  improvement. This approach led to a 33% boost in task success
                  rate and a 39% reduction in abandonment.
                </h4>
              </div>
              <div className="flex pt-5 pb-14 w-4/5 justify-between">
                <div className="flex flex-col gap-2">
                  <p className="text-gray-400">Client</p>
                  <span className="flex">
                    <LucideStars className="h-4 w-4 text-red-500" />
                    <h5 className="text-xl">Prism Bank</h5>
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-gray-400">Industry</p>
                  <span className="flex">
                    <LucideStars className="h-4 w-4 text-red-500" />
                    <h5 className="text-xl">Fintech</h5>
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-gray-400">Plateform</p>
                  <span className="flex">
                    <LucideStars className="h-4 w-4 text-red-500" />
                    <h5 className="text-xl">Web</h5>
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <p className="text-gray-400">Year</p>
                  <span className="flex">
                    <LucideStars className="h-4 w-4 text-red-500" />
                    <h5 className="text-xl">2025</h5>
                  </span>
                </div>
              </div>
              <div>
                <span className="flex my-14">
                  <LucideStars className="h-4 w-4 text-red-500" />
                  <p className="text-gray-400">
                    The name has been changed for confidentiality purpose.
                  </p>
                </span>
              </div>
            </div>
          </div>

          <section className="h-[85vh] flex p-5">
            <div className="w-1/2">
              <Image
                height={100}
                width={100}
                src={"/kaoCaseStudy.png"}
                alt="case study"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="bg-red-600 w-1/2 flex justify-center items-center">
              <h4 className="text-5xl text-white">Hello</h4>
            </div>
          </section>
        </FadeSlideIn>
        <FadeSlideIn className="bg-[#16141c] text-white/80 my-10">
          <div className="h-[65vh] flex ">
            <div className="inset-0 absolute -z-10 flex ">
              <div className="w-1/2 h-3/6 flex justify-center">
                <img
                  src="/B2CIconWhite.png"
                  alt="logo"
                  className="w-1/2 h-4/5 object-contain opacity-25 -rotate-45"
                />
              </div>
            </div>
            <div className="h-3/5 my-auto flex ">
              <div className="w-1/4 px-10">
                <p className="text-base rounded-full px-6 py-2 border border-opacity-10 w-fit">
                  Chellenge
                </p>
              </div>
              <div className="w-3/4 flex justify-center">
                <h4 className="text-5xl w-4/5">
                  {" "}
                  This approach led to a 33% boost in task success rate and a
                  39% reduction in abandonment, streamlining the user journey
                  and enhancing the overall usability of the KYC flow.
                </h4>
                <div>
                  <button></button>
                </div>
              </div>
            </div>
          </div>
          <div className="h-screen">
            <img
              src="/personSidepic.png"
              alt="person"
              className="w-full h-full object-cover object-top saturate-25"
            />
          </div>
        </FadeSlideIn>

        <div className="py-16 text-white/80">
          <div className="flex flex-col w-1/2 gap-2 pb-10">
            <h4 className="text-2xl">Design process</h4>
            <p className="">
              We began with a comprehensive UX Audit, covering user research,
              competitor analysis, heuristic evaluation, and accessibility
              assessment. From there, we moved into the design phase and tested
              the solution. After two rounds of prototyping and testing, we
              achieved our desired outcome.
            </p>
          </div>
          <section className="min-h-screen text-white/80 bg-neutral-900">
            <div className="flex justify-center items-center h-[60vh] flex-col gap-8 w-2/3 mx-auto">
              <div className="px-5 py-2 w-fit rounded-full border border-opacity-25">
                <button className="">Process</button>
              </div>
              <h4 className="text-4xl">
                Effective planning is crucial in a redesign as it helps identify
                user pain points early, set clear project goals, and align the
                team's efforts on the most impactful solutions.
              </h4>
            </div>
            <section className="flex gap-3 justify-center">
              <div className="grid grid-cols-3 gap-12 p-6">
                {stages.map((stage, index) => (
                  <div
                    key={index}
                    className="relative h-[40vh] flex flex-col justify-between py-10"
                  >
                    {/* Vertical Divider */}
                    {index < stages.length - 1 && (
                      <div className="absolute top-0 -right-6 w-px h-full bg-neutral-700"></div>
                    )}

                    {/* Circular Progress Indicator */}
                    <div className="flex items-center gap-6 mb-12">
                      <div className="relative w-24 h-24 flex-shrink-0">
                        {/* Background Circle */}
                        <svg className="w-24 h-24 transform -rotate-90">
                          <circle
                            cx="48"
                            cy="48"
                            r="44"
                            stroke="rgba(255, 255, 255, 0.1)"
                            strokeWidth="3"
                            fill="none"
                          />
                          {/* Progress Arc */}
                          <circle
                            cx="48"
                            cy="48"
                            r="44"
                            stroke="#EF4444"
                            strokeWidth="3"
                            fill="none"
                            strokeDasharray={`${2 * Math.PI * 135 * 0.25} ${
                              2 * Math.PI * 44
                            }`}
                            strokeLinecap="round"
                          />
                        </svg>
                        {/* Icon */}
                        <div className="absolute inset-0 flex items-center justify-center text-white">
                          {stage.icon}
                        </div>
                        {/* Progress Dot */}
                        <div className="absolute top-0 left-1/2 w-2 h-2 bg-blue-500 rounded-full -translate-x-1/2"></div>
                      </div>

                      <div>
                        <h3 className="text-2xl font-normal text-white mb-1">
                          {stage.title}
                        </h3>
                        <p className="text-4xl font-light text-white">
                          {stage.hours}
                        </p>
                      </div>
                    </div>

                    {/* Tags Cloud */}
                    <div className="flex flex-wrap gap-3">
                      {stage.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className={`px-5 py-2.5 rounded-full text-sm font-normal transition-all duration-300 ${
                            tag === stage.highlightTag
                              ? "bg-red-600 text-white"
                              : "bg-transparent text-white border border-neutral-600 hover:border-neutral-400"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </section>
        </div>
        <section className="h-[80vh] flex justify-center items-center text-white/90">
          <div className="w-1/4">
            <div>
              <img
                src="lecture.jpeg"
                alt="picture"
                className="w-full object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col w-3/4">
            <h4 className="text-4xl pb-16">Discover more</h4>
            <div>
              {designCards.map((caseStudy, index) => (
                <div
                  key={index}
                  onMouseEnter={() => setValue("discover")}
                  onMouseLeave={() => setValue(null)}
                  className={`flex justify-between items-center py-8 hover:border-blue-700 text-white/80 hover:text-blue-700 hover:cursor-pointer border-t transition-colors duration-300 `}
                >
                  <h5 className="text-2xl">{caseStudy.heading}</h5>
                  <div className="flex">
                    {caseStudy.listOfFeatures.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 border border-white/40 text-white/90 text-sm rounded-full mx-1"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
