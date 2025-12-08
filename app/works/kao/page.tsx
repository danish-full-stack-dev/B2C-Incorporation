import ZoomImage from "@/app/componants/zoomImage";
import FadeSlideIn from "@/app/hooks/FadeSlideIn";
import { ArrowLeft, LucideStars, Volleyball } from "lucide-react";
import Image from "next/image";

export default function page() {
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
            <span className="text-3xl text-white/90">Website</span>
          </div>
        </div>

        <div className="w-1/2 mx-auto my-40">
          <ZoomImage source="/kaoCaseStudy.png" />
        </div>
      </div>
      <div className="mx-auto w-10/12">
        <FadeSlideIn className="text-white flex gap-5 justify-between py-10">
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
          <div className="min-h-screen flex flex-col text-gray-200 w-2/3 mx-auto">
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
        <FadeSlideIn className="bg-[#16141c] text-gray-200 my-10">
          <div className="inset-0 absolute -z-10 flex items-center">
            <div className="w-1/2 h-3/5 flex justify-center">
              <img
                src="/B2CIconWhite.png"
                alt="logo"
                className="w-1/2 h-full object-contain opacity-25 -rotate-45"
              />
            </div>
          </div>
          <div className="h-[70vh] flex ">
            <div className="h-3/5 my-auto flex ">
              <div className="w-1/4 px-10">
                <p className="text-base rounded-full px-6 py-2 border border-opacity-10 w-fit">
                  Chellenge
                </p>
              </div>
              <div className="w-3/4 flex justify-center">
                <h4 className="text-5xl w-3/4">
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
        </FadeSlideIn>
        <FadeSlideIn className="min-h-screen">
          <div>

          </div>
        </FadeSlideIn>
      </div>
    </div>
  );
}
