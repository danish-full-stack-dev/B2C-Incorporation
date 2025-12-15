import { designCards } from "./CaseStudies";
import { useCursor } from "../hooks/CursorContext";
import { useState } from "react";

export default function DiscoverCaseStudies() {
  const { setValue } = useCursor();
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  return (
    <section className="bg-black">
      <div className="min-h-[80vh] flex justify-center items-center text-white/90 w-11/12 mx-auto">
        <div className="w-1/4 flex justify-center items-center pr-6">
          <div>
            {imageSrc && (
              <img
                src={imageSrc || undefined}
                alt="picture"
                className="w-full object-cover h-60"
              />
            )}
          </div>
        </div>
        <div className="flex flex-col w-3/4">
          <h4 className="text-4xl pb-16">Discover more</h4>
          <div>
            {designCards.map((caseStudy, index) => (
              <div
                key={index}
                onMouseEnter={() => {
                  setValue("discover");
                  setImageSrc(caseStudy.image);
                }}
                onMouseLeave={() => {
                  setValue(null);
                  setImageSrc(null);
                }}
                className={`flex justify-between items-center py-8 hover:border-blue-700 text-white/80 border-white/30 hover:text-blue-700 hover:cursor-pointer border-t transition-colors duration-300 `}
              >
                <h5 className="text-2xl">{caseStudy.title}</h5>
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
      </div>
    </section>
  );
}
