"use client";
import { ChevronDown, ChevronRight, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export const Navbar: React.FC = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [index, setIndex] = useState<number | null>(null);
  const [strecth, setStrech] = useState(false);
  const [logo, setLogo] = useState("/white spaced logo.png");
  const [navHover, setNavHover] = useState(false);
  const [selectedNav, setSelectedNav] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 4 && currentScroll > lastScrollY) {
        setStrech(true);
      } else if (currentScroll < lastScrollY) {
        setStrech(false);
      }
      setLastScrollY(currentScroll);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <div className="flex fixed w-full z-30 justify-center text-white mt-3">
      <div
        className={`${
          strecth ? "w-5/12 p-0" : "w-8/12 p-1"
        } bg-black/70 bg-opacity-90 flex flex-col transition-all duration-500`}
      >
        <div className="transition-all duration-500 p-2 flex items-center justify-between h-fit">
          <div className="gap-2 flex justify-center items-center">
            <Link href={"/"}>
              <span
                className={`ml-2 ${
                  strecth ? "flex p-2 bg-blue-600" : "hidden"
                }`}
              >
                <Image
                  src="/B2CIconWhite.png"
                  alt="logo"
                  width={5}
                  height={5}
                  className="h-5 w-5 hover:cursor-pointer"
                />
              </span>
            </Link>
            <Link href={"/"}>
              <h1
                className="transition-opacity duration-300"
                onMouseEnter={() => setLogo("/spaced logo blue.png")}
                onMouseLeave={() => setLogo("/white spaced logo.png")}
              >
                {strecth ? (
                  ""
                ) : (
                  <Image
                    src={logo}
                    alt="B2Clogo"
                    width={100}
                    height={8}
                    className="px-2 w-full h-8 hover:cursor-pointer transition-transform duration-500"
                  />
                )}
              </h1>
            </Link>
          </div>
          <div className="flex justify-center relative">
            <ul className="flex gap-5">
              {["What we do", "Who we are", "Insights", "Case Studies"].map(
                (value, idx) => (
                  <div key={idx} className="relative">
                    {/* NAV LIST */}
                    <li
                      key={idx}
                      onMouseEnter={() => {
                        setNavHover(true);
                        setIndex(idx);
                        setSelectedNav(value);
                      }}
                      className="flex items-center gap-1 hover:cursor-pointer hover:text-gray-400 transition-all duration-300"
                    >
                      {value}
                      {value !== "Case Studies" ? (
                        navHover && index === idx ? (
                          <ChevronDown className="w-4 h-4" />
                        ) : (
                          <ChevronRight className="w-4 h-4" />
                        )
                      ) : (
                        <></>
                      )}
                    </li>
                  </div>
                )
              )}
            </ul>
          </div>
          <div className=" flex justify-center">
            <button
              className={`bg-blue-600 hover:bg-blue-800 transition-all duration-500 ${
                strecth ? "p-2" : "px-4 py-2 font-medium text-sm"
              }`}
            >
              {strecth ? <Mail className="h-5 w-5" /> : "Quick demo"}
            </button>
          </div>
        </div>
        {/* MODAL */}
        {/* {selectedNav === "what we do" && navHover && index === 0 && ( */}
        <div
          onMouseLeave={() => {
            setSelectedNav(null);
            setNavHover(false);
            setIndex(null);
          }}
          className={`absolute top-full mt-1 flex ${
            strecth ? "flex-col" : "flex-row"
          } gap-2 justify-center ${
            strecth ? "w-5/12" : "w-8/12"
          }  transition-all duration-500 ${
            navHover
              ? "opacity-100 pointer-events-auto translate-y-0"
              : "opacity-0 pointer-events-none -translate-y-1"
          }`}
        >
          {selectedNav === "What we do" && (
            <div
              className={`bg-black/80 p-6 shadow flex justify-center text-xs font-pt ${
                strecth ? "w-full" : "w-8/12"
              }`}
            >
              <div className="grid grid-flow-col text-sm">
                <div className="flex flex-col gap-4 pr-20 border-r border-gray-700">
                  <span className="text-gray-500 text-xs font-bold mb-1">
                    Our Expertise
                  </span>
                  {[
                    { heading: "Design", to: "/design" },
                    { heading: "Product engineering", to: "/pages/products/products-engeenering" },
                    { heading: "Cloud", to: "/pages/products/cloud" },
                    { heading: "Data services", to: "/pages/services/data-service" },
                    { heading: "AI Automation", to: "/pages/services/ai-service" },
                  ].map((value, idx) => (
                    <Link
                      href={value.to}
                      key={idx}
                      className="hover:text-blue-500 transition hover:cursor-pointer"
                    >
                      {value.heading}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col px-20 border-r  border-gray-700 gap-4">
                  <span className="text-gray-500 text-xs font-bold mb-1">
                    Fintech specialization
                  </span>
                  {[ {
                      heading: "Trading Platform",
                      to: "/pages/finetech/trading",
                    },
                  {
                    heading: "Blockchain Development",
                      to: "/pages",
                  },
                {
                      heading: "Payment Gateway Integration",
                      to: "/pages",
                }].map((value, idx) => (
                   <Link
                      href={value.to}
                      key={idx}
                      className="hover:text-blue-500 transition hover:cursor-pointer"
                    >
                      {value.heading}
                    </Link>
                  ))}
                </div>
                <div className="flex flex-col gap-4 pl-20">
                  <span className="text-gray-500 text-xs font-bold mb-1">
                    Trading Specialization
                  </span>
                  {[
                    {
                      heading: "Real State",
                      to: "/pages/services/trading-services",
                    },
                    { heading: "Trading Platform", to: "/design" },
                    { heading: "Online Reputation Management(ORM's)", to: "/design" },
                  ].map((value, idx) => (
                    <Link
                      href={value.to}
                      key={idx}
                      className="hover:text-blue-500 transition hover:cursor-pointer"
                    >
                      {value.heading}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          )}
          {selectedNav === "Who we are" && (
            <div
              className={`bg-black/80 p-6 shadow flex text-xs font-pt ${
                strecth ? "w-full" : "w-8/12"
              }`}
            >
              <div>
                <div className="flex flex-row text-base px-5">
                  <div className="flex flex-col gap-4 w-1/3 border-r-2  border-gray-700">
                    {[
                      "About us",
                      "Leadership",
                      "Experts",
                      "Careers",
                      "Certifications",
                    ].map((value, idx) => (
                      <p
                        key={idx}
                        className="hover:text-blue-600 hover:cursor-pointer"
                      >
                        {value}
                      </p>
                    ))}
                  </div>
                  <div className="flex flex-col w-2/3 pl-10">
                    <div className="flex justify-end">
                      <h4 className="text-blue-500 font-bold pb-2">
                        B2C Incorporation
                      </h4>
                    </div>
                    <p className="">
                      We are extremely satisfied with our collaboration with
                      EffectiveSoft. We engaged them for business analysis,
                      UI/UX design, web development, and testing.
                    </p>
                    <div className="flex flex-col justify-start pt-5">
                      <h4>Gulfam .......</h4>
                      <h5 className="text-gray-500">CEO</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* Insights */}
          {selectedNav === "Insights" && (
            <div
              className={`bg-black/80 p-6 shadow flex text-xs font-pt ${
                strecth ? "w-full" : "w-8/12"
              }`}
            >
              <div>
                <div className="grid grid-flow-col grid-cols-3 text-base px-5">
                  <div className="flex flex-col  gap-3 border-r  border-gray-700">
                    <h4 className="hover:text-blue-500 hover:cursor-pointer">
                      Blog
                    </h4>
                    <h4 className="hover:text-blue-500 hover:cursor-pointer">
                      Company updates
                    </h4>
                  </div>
                  <div className="grid col-span-2 grid-flow-col">
                    <div className="flex flex-col border-r px-10  border-gray-700">
                      <img
                        src="/workflow.jpeg"
                        alt="workflow"
                        className="w-full h-32"
                      />
                      <h5 className="mt-4">
                        Architecture review: a strategic investment in
                        sustainable growth
                      </h5>
                    </div>
                    <div className="flex flex-col items-center pl-10">
                      <img
                        src="/lecture.jpeg"
                        alt="lecture"
                        className="w-full h-32"
                      />
                      <h5 className="mt-4">
                        Architecture review: a strategic investment in
                        sustainable growth
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        {/* )} */}
      </div>
    </div>
  );
};
