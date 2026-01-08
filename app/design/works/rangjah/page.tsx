"use client";
import DiscoverCaseStudies from "@/app/componants/DiscoverCaseStudies";
import ZoomImage from "@/app/componants/zoomImage";
import FadeSlideIn from "@/app/hooks/FadeSlideIn";
import { ArrowLeft, Eye, Loader, Palette } from "lucide-react";
import { useRouter } from "next/navigation";

export default function page() {
  const router = useRouter();
  const stages = [
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Brnad Analysis",
      hours: "2 days",
      tags: ["Brand strategy", "Content Audit", "Branding"],
      highlightTag: "Branding",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Advertising/Marketing",
      hours: "7 days",
      tags: ["Media buying", "Social engagement"],
      highlightTag: "Media buying",
    },
    {
      icon: <Loader className="w-6 h-6" />,
      title: "Sales Optimization",
      hours: "1 day",
      tags: [
        "Conversion Rate",
        "Engagement Analysis",
        "Sale compaigns",
        "Take profit strategy",
        "Stop loss",
      ],
      highlightTag: "Sale compaigns",
    },
  ];
  return (
    <div className="bg-black/90">
      <div className="bg-black">
        <div className="min-h-screen mx-auto flex flex-col w-10/12 pt-32 gap-1 px-5">
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
              <h1 className="text-7xl bg-gradient-to-b from-[#f5d98b] via-[#d4a843] to-[#8a5a12] bg-clip-text text-transparent font-thin">
                Specializing in a wide range of elegant and authentic Pakistani
                designer formal, bridal, and casual wear
              </h1>
              <span className="text-3xl text-white/80">Website</span>
            </div>
          </div>

          <div className="w-1/2 mx-auto my-40">
            <ZoomImage source="/rangjahCaseStudy.jpg" />
          </div>
        </div>
      </div>
      <div className="mx-auto w-10/12 pt-10">
        <div className="text-white/80 flex gap-5 py-10 flex-col w-full">
          <div className="w-full  flex flex-row justify-between gap-20">
            <div className="w-4/6 border-b border-white/20">
              <h2 className="text-5xl pb-20 border-b border-white/20">
                Specializing in a wide range of elegant and authentic Pakistani
                designer formal, bridal, and casual wear
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
                Rang Jah is the UK's largest independent Asian fashion retailer,
                offering a wide range of authentic Pakistani designer formal,
                bridal, and casual wear to its diverse clientele across the UK.
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
                        className="py-1 text-white/90 text-sm rounded-full mx-1"
                      >
                        {item}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <FadeSlideIn className="bg-black text-white/80 mt-10">
          <div className="h-[65vh] flex">
            <div className="inset-0 absolute -z-10 flex ">
              <div className="w-1/2 flex justify-center items-center overflow-hidden ">
                <img
                  src="/B2CIconWhite.png"
                  alt="logo"
                  className="w-1/2 h-3/5 object-contain opacity-10 -rotate-45"
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
                  Rang Jah successfully overcame the logistical complexities of
                  importing diverse, authentic designer wear to become the UK's
                  leading Asian fashion retailer. We are proud that this
                  partnership has helped scale their unique physical and
                  e-commerce model, making exclusive cultural fashion accessible
                  nationwide.
                </h4>
              </div>
            </div>
          </div>
        </FadeSlideIn>

        <div className="">
          <img src="/ragja1.jpg" alt="rang jah" className="w-full h-full" />
        </div>
        <FadeSlideIn className="bg-black grid grid-cols-3">
          <img src="/ragja2.jpg" alt="image" className="" />
          <img src="/ragja3.jpg" alt="image" className="" />
          <img src="/ragja4.jpg" alt="image" className="" />
        </FadeSlideIn>

        <div className="bg-black grid grid-cols-3 gap-1">
          <img src="/ragja5.jpg" alt="image" className="" />
          <img src="/ragja6.jpg" alt="image" className="" />
          <img src="/ragja7.jpg" alt="image" className="" />
        </div>

        <FadeSlideIn className="bg-black grid grid-cols-3">
          <img src="/ragja8.jpg" alt="image" className="" />
          <img src="/ragja9.jpg" alt="image" className="" />
          <img src="/ragja10.jpg" alt="image" className="" />
        </FadeSlideIn>

        <div className="bg-black grid grid-cols-3 gap-1">
          <img src="/ragja11.jpg" alt="image" className="" />
          <img src="/ragja12.jpg" alt="image" className="" />
          <img src="/ragja13.jpg" alt="image" className="" />
        </div>

        <div className="py-16 text-white/80">
          <div className="flex flex-col w-1/2 gap-2">
            <h4 className="text-2xl">Design process</h4>
            <p className="">
              We began with a comprehensive UX Audit, covering user research,
              competitor analysis, heuristic evaluation, and accessibility
              assessment. From there, we moved into the design phase and tested
              the solution. After two rounds of prototyping and testing, we
              achieved our desired outcome.
            </p>
          </div>
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
        <DiscoverCaseStudies />
      </div>
    </div>
  );
}
