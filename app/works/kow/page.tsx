import ZoomImage from "@/app/componants/zoomImage";
import FadeSlideIn from "@/app/hooks/FadeSlideIn";
import { ArrowLeft } from "lucide-react";
import React from "react";

export default function page() {
  return (
    <div className="bg-black">
      <div className="min-h-screen mx-auto flex flex-col w-10/12 pt-32 gap-1">
        <div className="p-5 flex justify-center items-center rounded-full border-2 h-fit w-fit hover:bg-blue-700 duration-300">
          <button>
            <ArrowLeft className="w-4 h-4 text-white" />
          </button>
        </div>
        <div className="flex justify-start w-10/12 mx-auto">
          <div className="flex flex-col gap-2">
            <h1 className="text-7xl text-blue-700 font-thin">
              Boosting the KYC flow's task success rate by 33%
            </h1>
            <span className="text-3xl text-white/90">Website</span>
          </div>
        </div>

        <div className="w-1/2 mx-auto my-40">
          <ZoomImage source="/marketing.png" />
        </div>
      </div>
      <FadeSlideIn className="text-white mx-auto w-10/12 flex gap-5 justify-between">
        <div className="w-4/6">
          <h2 className="text-5xl pb-20 border-b-2">
            Boosting the KYC flow's task success rate by 33%
          </h2>
          <div>
            <h4 className="text-2xl py-5">Client needs</h4>
            <p>
              The client needed a solution to enhance their KYC (Know Your
              Customer) flow, which was experiencing a high abandonment rate and
              a lower-than-expected task success rate. Through a comprehensive
              UX audit, targeted redesign, and two rounds of usability testing,
              we delivered a significant improvement. This approach led to a 33%
              boost in task success rate and a 39% reduction in abandonment,
              streamlining the user journey and enhancing the overall usability
              of the KYC flow.
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
    </div>
  );
}
