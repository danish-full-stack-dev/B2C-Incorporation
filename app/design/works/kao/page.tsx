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
import { useRouter } from "next/navigation";

export default function page() {
  const { setValue } = useCursor();
  const router = useRouter();
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
    <div className="bg-black/90">
      <div className="min-h-screen mx-auto flex flex-col w-10/12 pt-32 gap-1 bg-black px-5">
        <div
          className="p-5 hover:cursor-pointer flex justify-center items-center rounded-full border-2 h-fit w-fit hover:bg-blue-700 duration-300"
          onClick={() => router.back()}
        >
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
        <FadeSlideIn className="text-white/80 flex gap-5 py-10 flex-col w-full">
          <div className="w-full  flex flex-row justify-between gap-20">
            <div className="w-4/6 border-b border-white/20">
              <h2 className="text-5xl pb-20 border-b border-white/20">
                Kao: A Cosmetics, Hygiene and Chemical Business.
              </h2>
            </div>

            <div className="flex w-2/6 gap-3 border-b border-white/20 pb-20 justify-end">
              <h5 className="text-lg rounded-full border-2 border-white/30 h-fit px-4 py-1">
                Redesign
              </h5>
              <h5 className="text-lg rounded-full border-2 border-white/30 px-4 h-fit py-1">
                User Resurch
              </h5>
              <h5 className="text-lg rounded-full border-2 border-white/30 px-4 py-1 h-fit">
                UX Audit
              </h5>
            </div>
          </div>
          <div className="flex justify-between gap-20">
            <div className="w-4/6">
              <h4 className="text-2xl py-5">Client needs</h4>
              <p className="text-xl leading-7">
                A client would need products or services from Kao Corporation to
                satisfy a wide range of daily life, hygiene, beauty, health, and
                industrial chemical needs. Kao produces a diverse portfolio of
                brands and products designed to enrich lives and promote a
                sustainable, clean, and beautiful lifestyle (known as the "Kirei
                Lifestyle").
              </p>
            </div>
            <div className="w-2/6 flex flex-col">
              <div className="flex flex-col py-5">
                <h2 className="pb-5 text-2xl">Deliverd</h2>
                <div className="flex flex-col text-xl gap-2">
                  {["UX Audit", "Redesign", "Usability Testing"].map(
                    (item, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 text-white/90 text-sm rounded-full mx-1"
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </FadeSlideIn>

        <FadeSlideIn className="bg-[#16141c] text-white/80 mt-10">
          <div className="h-[65vh] flex">
            <div className="inset-0 absolute -z-10 flex ">
              <div className="w-1/2 h-3/6 flex justify-center">
                <img
                  src="/B2CIconWhite.png"
                  alt="logo"
                  className="w-1/2 h-4/5 object-contain opacity-10 -rotate-45"
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
                <h4 className="text-4xl w-4/5">
                  {" "}
                  We are proud of our commitment to creating a Kirei Life a
                  cleaner, more beautiful, and healthier life for all people and
                  the planet by walking the right path with integrity and
                  putting sustainability at the core of all our actions
                </h4>
              </div>
            </div>
          </div>
          <div className="h-screen">
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/1078269432?h=ebaa989689"
              width="640"
              height="360"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              className="w-full h-full object-cover object-top saturate-25"
            />
          </div>
        </FadeSlideIn>
        <FadeSlideIn className="bg-black ">
          <div className="text-white/80 flex flex-col gap-10 py-20 w-8/12 mx-auto">
            <div>
              <h5 className="text-red-700">Kao</h5>
              <p>Visual identity</p>
            </div>
            <div>
              <h5 className="text-red-700">Sobre</h5>
              <p>
                Kao é uma figura dedicada a ajudar pessoas a mudarem de vida,
                especialmente aquelas que desejam sair da estagnação. Através de
                uma abordagem acessível e acolhedora, oferece ferramentas e
                recursos que facilitam o crescimento pessoal, mesmo para quem
                está começando do zero.
                <br />
                <br /> Seu trabalho é pautado na escuta ativa e no
                direcionamento personalizado, ajudando indivíduos a encontrarem
                propósito e retomarem o controle de suas jornadas. Em um mundo
                acelerado e muitas vezes confuso, Kao surge como um ponto de
                apoio claro e empático, guiando com simplicidade e estratégia.
              </p>
            </div>
            <div>
              <h5 className="text-red-700">About</h5>
              <p>
                Kao is a person deeply committed to helping others transform
                their lives, especially those looking to break free from
                stagnation. With an accessible and supportive approach, Kao
                provides tools and resources that facilitate personal
                growth—even for those starting from zero.
                <br /> His work is rooted in active listening and personalized
                guidance, helping individuals rediscover their purpose and
                regain control of their path. In a fast-paced and often
                confusing world, Kao offers a sense of clarity and empathy,
                guiding with simplicity and strategy.
              </p>
            </div>
            <div>
              <h5 className="text-red-700">Team</h5>
              <p>
                Creative Leader: Gulfam Tasawar
                <br /> Designer: Gulfam Tasawar
              </p>
            </div>
          </div>
        </FadeSlideIn>

        <FadeSlideIn>
          <div className="h-screen">
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/1078270664?h=108231eaed"
              width="640"
              height="360"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
              className="w-full h-full object-cover object-top saturate-25"
            />
          </div>
        </FadeSlideIn>

        <div className="py-16 text-white/80">
          <div className="flex flex-col w-1/2 gap-2 pb-16">
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
