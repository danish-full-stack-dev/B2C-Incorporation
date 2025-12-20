"use client";
import React from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { ContactForm } from "./ContactForm";
import { LocationsSection } from "./Locations";

const Footer: React.FC = () => {
  return (
    <>
      <ContactForm />
      <LocationsSection />
      <footer className="bg-gray-900 text-gray-300 py-16 md:text-base text-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold text-blue-600 mb-4">Contact Us</h3>
            <p className="mb-2">Cheyenne, WY 82002, US</p>
            <p className="mb-2">
              Herschler Building East, 122 W 25th St, Suites 100 & 101
            </p>
            <p className="mb-2">
              Email: <span className="font-bold">info@b2cinc.com</span>
            </p>
            <p className="mb-2">Phone: +1 (307) 441-3171</p>
          </div>

          {/* Quick Links */}
          <div className="">
            <h3 className="text-xl font-bold text-blue-600 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 flex justify-center flex-col">
              <li>
                <a href="/" className="hover:text-blue-500 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-blue-500 transition">
                  Contact
                </a>
              </li>
              <li>
                <a href="/portfolio" className="hover:text-blue-500 transition">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-blue-500 transition">
                  Services
                </a>
              </li>
              <li>
                <a href="/about" className="hover:text-blue-500 transition">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-xl font-bold text-blue-600 mb-4">Follow Us</h3>
            <div className="flex space-x-4 mb-4">
              <a
                href="https://www.facebook.com/b2cinc"
                target="blank"
                className="hover:text-blue-500 transition"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.linkedin.com/company/b2c-inc/" target="blank"
                className="hover:text-blue-500 transition"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/b2c.inc/"
                target="blank"
                className="hover:text-blue-500 transition"
              >
                <Instagram size={20} />
              </a>
            </div>
            <p className="text-sm">
              <span className="font-bold">
                &copy; {new Date().getFullYear()} B2C INC
              </span>{" "}
              - ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
