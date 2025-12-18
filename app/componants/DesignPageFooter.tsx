"use client";
import {
  Facebook,
  Instagram,
  Linkedin,
  LocationEdit,
  Mail,
  Phone,
  X,
} from "lucide-react";
import React from "react";

export const DesignPageFooter: React.FC = () => {
  const skills = [
    "Web Development",
    "Artificial intelligence",
    "Mobile App Development",
    "Desktop App Development",
    "Data Analytics",
  ];

  return (
    <div>
      <footer className="relative text-gray-300 py-16 bg-black">
        <div
          className="absolute left-0 top-10 w-[400px] h-[400px] 
              bg-blue-700/70 blur-[120px] rounded-full"
        ></div>

        <div
          className="absolute right-0 top-20 w-[400px] h-[400px] 
              bg-blue-700/70 blur-[120px] rounded-full"
        ></div>

        <div className="relative z-10 w-10/12 mx-auto px-6 md:px-12 grid md:grid-cols-4 gap-12 border-y py-10 ">
          <div className="flex w-full">
            <h3 className="w-full text-lg leading-tight">
              <span>
                <img src="/whiteDesignLogo.png" alt="logo" className="h-4" />
              </span>{" "}
              Incorporation <br />
              <span className="text-xs">Powered by B2CINC </span>{" "}
            </h3>
          </div>
          {/* Contact Info */}
          <div>
            <h3 className="text-lg  text-gray-300 mb-4">B2C services</h3>
            <div className="flex flex-col gap-2">
              {skills.map((v, idx) => (
                <p
                  key={idx}
                  className="hover:text-blue-500 transition hover:cursor-pointer"
                >
                  {v}
                </p>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg  text-gray-300 mb-4">B2C industries</h3>
            <div className="flex flex-col gap-2">
              {["Fintech", "Real State", "Trading Platform"].map((v, idx) => (
                <p
                  key={idx}
                  className="hover:text-blue-500 transition hover:cursor-pointer"
                >
                  {v}
                </p>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
            <div className="flex gap-3 flex-col">
              <a href="#" className="hover:text-blue-500 transition">
                <span className="flex gap-2">
                  <LocationEdit size={20} />
                  CA, San Diego, 92121 4445 Eastgate Mall, Suite 200
                </span>
              </a>
              <a href="#" className="hover:text-blue-500 transition">
                <span className="flex gap-2">
                  <Phone size={20} />
                  +92 213 231 321
                </span>
              </a>
              <a href="#" className="hover:text-blue-500 transition">
                <span className="flex gap-2">
                  <Mail size={20} />
                  b2cincorporation.com
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="w-10/12 mx-auto text-gray-400 flex justify-between py-7">
          <p className="text-lg ">
            &copy; {new Date().getFullYear()} B2CINC. All rights reserved.
          </p>
          <div className="flex gap-2">
            <Linkedin className="h-5 w-5" />
            <Instagram className="h-5 w-5" />
            <Facebook className="h-5 w-5" />
          </div>
        </div>
      </footer>
    </div>
  );
};
