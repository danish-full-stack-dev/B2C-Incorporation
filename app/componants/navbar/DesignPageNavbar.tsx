"use client";

import { Handshake, Menu, X } from "lucide-react";
import Image from "next/image";
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

  const [open, setOpen] = useState(false);
  return (
    <div className="flex fixed w-full z-30 justify-center text-white">
      <div
        className={`fixed inset-0 bg-blue-900/80 z-20 flex transition-opacity duration-200 ${
          open
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      >
        <div
          className="w-full h-screen bg-black/70 flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="px-4 py-6 border-b font-semibold flex justify-between items-center">
            <Image
              src={"blueDesignLogo.png"}
              alt="B2Clogo"
              width={100}
              height={8}
              className="px-2 w-40 object-contain h-8 hover:cursor-pointer transition-transform duration-500"
            />
          </div>
          <div className="h-2/3">
            <div className="md:hidden w-full h-full my-auto flex flex-col text-2xl text-blue-700 gap-4 justify-center items-center font-extrabold">
              <Link href={"/"}>services</Link>
              <Link href={"/"}>our works</Link>
              <Link href={"/"}>about us</Link>
              <Link href={"/"}>contact</Link>
            </div>
          </div>
          <div className="flex justify-center items-end">
            <button
              className={`hover:bg-gray-800 transition-all w-fit border rounded-full border-blue-800 duration-500 px-2 py-2`}
              onClick={() => setOpen(false)}
            >
              <X className="w-7 h-7 text-blue-800" />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`flex flex-col md:w-10/12 w-full transition-all duration-500 
          ${
            hideNav
              ? "-translate-y-full pointer-events-none"
              : "translate-y-0 pointer-events-auto mt-4"
          }
        `}
      >
        <div className="p-2 flex items-center justify-between w-full md:px-0 px-5">
          <div className="md:hidden flex">
            <button
              className={`text-blue-800 font-extrabold transition-all duration-500`}
              onClick={() => setOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
          {/* LOGO */}
          <img src="/whiteDesignLogo.png" alt="logo" className="h-4" />

          {/* NAV LINKS */}
          <div className="md:flex justify-center hidden">
            <div className="flex gap-6">
              {[
                { heading: "services", to: "/design/pages/our-services" },
                { heading: "our works", to: "/design/pages/our-works" },
                { heading: "about us", to: "/design/pages/about-us" },
                { heading: "contacts", to: "/design/pages/contact" },
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

          <div className="md:hidden flex">
            <Link
              href={"/pages/contact"}
              className={`text-blue-800 font-extrabold transition-all duration-500`}
              // onClick={() => setOpen(true)}
            >
              <Handshake className="w-6 h-6" />
            </Link>
          </div>

          <div className="md:flex hidden justify-center">
            <Link
              href={"/pages/contact"}
              className={`px-5 py-2 bg-transparent outline outline-1 rounded-full transition-all duration-500 hover:bg-blue-800
                ${isScrollingDown ? "py-1 px-3" : "py-2 px-5"}
              `}
            >
              Quick demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
