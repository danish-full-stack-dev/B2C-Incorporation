"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

export const DesignPageNavbar: React.FC = () => {
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [hideNav, setHideNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScrollY) {
        setIsScrollingDown(true);
      } else {
        setIsScrollingDown(false);
      }
      setHideNav(currentScroll > 200);
      setLastScrollY(currentScroll);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="flex fixed w-full z-30 justify-center text-white">
      <div
        className={`flex flex-col w-10/12 transition-all duration-500 
          ${
            hideNav
              ? "-translate-y-full pointer-events-none"
              : "translate-y-0 pointer-events-auto mt-4"
          }
        `}
      >
        <div className="p-2 flex items-center justify-between w-full">
          {/* LOGO */}
          <img src="/whiteDesignLogo.png" alt="logo" className="h-4" />

          {/* NAV LINKS */}
          <div className="flex justify-center">
            <div className="flex gap-6">
              {[
                { heading: "services", to: "/design/pages/our-services" },
                { heading: "our works", to: "#" },
                { heading: "about us", to: "/design/pages/about-us" },
                { heading: "contacts", to: "" },
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

          {/* BUTTON */}
          <div className="flex justify-center">
            <button
              className={`px-5 py-2 bg-transparent outline outline-1 rounded-full transition-all duration-500 hover:bg-blue-800
                ${isScrollingDown ? "py-1 px-3" : "py-2 px-5"}
              `}
            >
              Quick demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
