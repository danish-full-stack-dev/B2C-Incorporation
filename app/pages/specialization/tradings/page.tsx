"use client";
import React, { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { FeaturedProjects } from "../../../componants/FeaturedProjects";
import { TechnologiesUsed } from "../../../componants/TechnologiesUsed";
import { FAQForDataAI } from "@/app/componants/FQAForAI";
import useInViewAnimation from "@/app/hooks/useInViewAnimation";
import FadeSlideIn from "@/app/hooks/FadeSlideIn";
import { TradingServicesSection } from "@/app/componants/TradingServicesProcess";
import TradingProcess from "@/app/componants/TradingProcess";

interface Technology {
  name: string;
  logo: string;
}

interface TechCategory {
  [key: string]: Technology[];
}
export default function AIDevelopementServices() {
  const [active, setActive] = useState(0);

  const [activeTab, setActiveTab] = useState<string>("Payment gateways & APIs");
  const { ref, inView } = useInViewAnimation();
  const [inViewPicIndex, setInViewPicIndex] = useState<number>(2);

  const pics = [
    "/real1.png",
    "/real2.png",
    "/real3.png",
    "/real4.png",
    "/real5.png",
  ];

  useEffect(() => {
    setInterval(() => {
      setInViewPicIndex((prev) => (prev + 1) % pics.length);
    }, 3000);
  }, [inView]);

  const tabs = [
    "Payment gateways & APIs",
    "Mobile wallets",
    "Open Banking",
    "Crypto and digital assets",
  ];

  const technologies: TechCategory = {
    "Payment gateways & APIs": [
      {
        name: "TensorFlow",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
      },
      {
        name: "Keras",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg",
      },
      {
        name: "Rasa",
        logo: "https://avatars.githubusercontent.com/u/21214474?s=200&v=4",
      },
      {
        name: "Pandas",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
      },
    ],
    "Mobile wallets": [
      {
        name: "NumPy",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
      },
      { name: "SciPy", logo: "https://scipy.org/images/logo.svg" },
      {
        name: "Matplotlib",
        logo: "https://matplotlib.org/stable/_static/logo2.svg",
      },
      {
        name: "NLTK",
        logo: "https://miro.medium.com/max/592/1*YM2HXc7f4v02pZBEO8h-qw.png",
      },
    ],
    "Open Banking": [
      {
        name: "AWS",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg",
      },
      {
        name: "Google Cloud",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
      },
      {
        name: "Azure",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
      },
      {
        name: "IBM Cloud",
        logo: "https://www.ibm.com/brand/experience-guides/developer/b1db1ae501d522a1a4b49613fe07c9f1/01_8-bar-positive.svg",
      },
    ],
    "Crypto and digital assets": [
      {
        name: "Python",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "R",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",
      },
      {
        name: "Java",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "C++",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      },
    ],
  };

  const platforms = [
    { name: "Ethereum", logo: "/logos/ethereum.png", alt: "Ethereum logo" },
    { name: "Polygon", logo: "/logos/polygon.svg", alt: "Polygon logo" },
    { name: "Coinbase", logo: "/logos/coinbase.svg", alt: "Coinbase logo" },
    { name: "Multichain", logo: null, alt: "Multichain", isText: true },
    { name: "EOS", logo: "/logos/eos.svg", alt: "EOS logo" },
    { name: "Stellar", logo: "/logos/stellar.svg", alt: "Stellar logo" },
    { name: "Tron", logo: "/logos/tron.svg", alt: "Tron logo" },
    { name: "Hedera", logo: "/logos/hedera.svg", alt: "Hedera logo" },
    { name: "EOSIO", logo: "/logos/eosio.svg", alt: "EOSIO logo" },
    { name: "IOTA", logo: "/logos/iota.svg", alt: "IOTA logo" },
    { name: "Near", logo: "/logos/near.svg", alt: "Near logo" },
    {
      name: "Ethereum Hardhat",
      logo: "/logos/hardhat.svg",
      alt: "Ethereum Hardhat logo",
    },
    { name: "Moonbeam", logo: "/logos/moonbeam.svg", alt: "Moonbeam logo" },
    { name: "Avalanche", logo: "/logos/avalanche.svg", alt: "Avalanche logo" },
    { name: "XinFin", logo: "/logos/xinfin.svg", alt: "XinFin logo" },
  ];

  const Industries = [
    {
      icon: "image.png",
      heading: "Finance",
      description:
        "AI solutions can ensure accurate diagnoses,drug discovery, streamline medical research, and more, st levels of sensitivity data.",
    },
    {
      icon: "image.png",
      heading: "Trading",
      description:
        "AI solutions can ensure accurate diagnoses, automate the creation of personalized treatment plans based on individual health data,",
    },
    {
      icon: "image.png",
      heading: "HealthCare",
      description:
        "AI solutions line medical research, and more, all while adhering to all required standards to uphold the highest l evels of sensitivity.",
    },
    {
      icon: "image.png",
      heading: "HealthCare",
      description:
        "AI solutions can ensure accurate diagnoses, automate the creation of personalized treatment plans based on individual healthcare data.",
    },
    {
      icon: "image.png",
      heading: "HealthCare",
      description:
        "AI solutions can ensure accurate diagnoses, automate the creation of personalized treatment plans based on individual health data the highest.",
    },
    {
      icon: "image.png",
      heading: "HealthCare",
      description:
        "AI solutions can ensure accurate diagnoses, automate the creation of personalized treatment plans based on individual health data, provide data-driven.",
    },
  ];
  const Processes = [
    {
      icon: "/icons/strategy.png",
      heading: "Market Intelligence Kick-off",
      description:
        "We don't just start; we strategize. We analyze market trends and your platform’s goals to engineer AI-driven solutions that pinpoint high-intent buyers and maximize booking potential.",
    },
    {
      icon: "/icons/conversion.png",
      heading: "Growth-Engine Design",
      description:
        "We sketch out high-conversion UI/UX concepts specifically for real estate. Our designs focus on immersive property storytelling and seamless funnels that turn casual browsers into confirmed viewings.",
    },
    {
      icon: "/icons/ai-matching.png",
      heading: "Predictive AI Integration",
      description:
        "We implement Machine Learning algorithms that analyze user behavior to offer personalized property matches, ensuring your leads see the right home at the exact moment they are ready to buy.",
    },
    {
      icon: "/icons/omnichannel.png",
      heading: "Omnichannel Domination",
      description:
        "From Google Search to Instagram Reels, we deploy a multi-channel marketing blueprint that keeps your platform top-of-mind, driving a consistent flow of qualified traffic to your listings.",
    },
    {
      icon: "/icons/analytics.png",
      heading: "Performance Scaling",
      description:
        "Using real-time 2025 data analytics, we monitor your ROI. We scale what works—from specific ad sets to geographic targets—ensuring your marketing budget is an investment, not an expense.",
    },
    {
      icon: "/icons/trust.png",
      heading: "Transparency & Authority",
      description:
        "We build your platform's credibility through automated testimonial systems and data-backed market reports, establishing you as the most trusted authority in the real estate landscape.",
    },
  ];

  interface Props {
    icon: string;
    heading: string;
    description: string;
  }
  const IndustryDiv = ({ icon, heading, description }: Props) => {
    return (
      <div className="flex flex-col justify-start gap-5 mx-3 group hover:text-white hover:bg-blue-950 px-8 py-5">
        <img src={icon} alt="icon" className="w-20 " />
        <div className="flex justify-between pr-6">
          <h4 className="text-xl">{heading}</h4>
          <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition duration-400" />
        </div>
        <p className="text-lg font-sans text-gray-800">{description}</p>
      </div>
    );
  };
  interface ProcessProps {
    index: number;
    heading: string;
    description: string;
    setActive: (index: number) => void;
  }
  const ProcessDiv = ({
    index,
    heading,
    description,
    setActive,
  }: ProcessProps) => {
    return (
      <div
        className="flex flex-col justify-start py-5 group"
        onMouseEnter={() => setActive(index)}
        onMouseLeave={() => setActive(0)}
      >
        <span className="group-hover:text-blue-600">
          {index < 10 ? "0" + index : index}
        </span>

        <div className="relative pt-2 pb-5">
          <span
            className="absolute left-0 h-[2px] w-11/12 bg-white 
                         group-hover:bg-blue-600 group-hover:h-[4px] 
                         transition-all duration-500"
          ></span>
        </div>

        <h4 className="text-3xl">{heading}</h4>
        <p className="text-lg w-full">{description}</p>
      </div>
    );
  };

  const FeatureDiv = ({ icon, heading, description }: Props) => {
    return (
      <div className="flex flex-col justify-start p-5 group hover:bg-gray-100">
        <img src="/favicon.png" alt="icon" className="w-8 mb-3" />
        <h4 className="text-3xl">{heading}</h4>
        <p className="text-lg w-full">{description}</p>
      </div>
    );
  };
  return (
    <div>
      <div className="max-h-screen flex object-cover overflow-hidden relative">
        <img
          src={pics[inViewPicIndex]}
          alt="pic"
          className="w-full h-full object-contain object-top transition-all duration-700"
        />

        {/* <div className="absolute top-4 right-4 bg-white/60 px-4 py-2 rounded-lg text-black font-medium">
          <form action="">
            <h2>Let's get started</h2>
            <input
              type="text"
              placeholder="Your email"
              className="outline-none px-2 py-1 rounded-md w-48"
            />

            <button className="bg-blue-600 text-white px-4 py-1 rounded-md ml-2">
              Subscribe
            </button>
          </form>
        </div> */}

        <div className="absolute inset-0 bg-black/30 flex">
          <div className="w-8/12 mx-auto flex">
            <div className="w-3/4 h-1/2 my-auto text-white flex flex-col gap-6">
              <h1 className="text-7xl font-bold">LET's BOOST YOUR BUSINESS</h1>
              <p className="text-2xl">
                {" "}
                At B2CINC, the focus is on creating market-ready growth engines.
                By integrating deep technical mastery with strategic project
                management and creative intelligence, the gap between complex
                functionality and
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
          {pics.map((_, index) => (
            <button
              key={index}
              onClick={() => setInViewPicIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                inViewPicIndex === index ? "bg-blue-600 w-8" : "bg-gray-200"
              }`}
            />
          ))}
        </div>
      </div>
      <FadeSlideIn className="pb-10">
        <div>
         <TradingServicesSection/>
        </div>
      </FadeSlideIn>
       <FadeSlideIn className="pb-10">
        <div>
         <TradingProcess/>
        </div>
      </FadeSlideIn>

      <div className="bg-blue-800 flex items-center w-[1300px] h-[350px] mx-auto text-white p-10">
        {/* LEFT — IMAGE */}
        <div className="w-[400px] flex justify-center items-center">
          <img
            src="/favicon.png"
            alt="image"
            className="h-[200px] w-auto object-cover -rotate-45 opacity-200"
          />
        </div>

        {/* RIGHT — TEXT */}
        <div className="w-1/2">
          <p className="text-lg leading-relaxed font-sans">
            At B2CINC, the focus is on creating market-ready growth engines. By
            integrating deep technical mastery with strategic project management
            and creative intelligence, the gap between complex functionality and
            high-conversion design is bridged. This ensures every project serves
            the ultimate goal: scaling your brand and maximizing user lifetime
            value.
          </p>

          <div className="mt-5">
            <p className="font-semibold text-lg">Gulfam Tasawar</p>
            <p className="opacity-80">CEO</p>
          </div>
        </div>
      </div>

      <div className="w-8/12 mx-auto">
        <section className="pt-10">
          <div className="flex flex-col gap-3 py-10">
            <h5 className="text-lg font-medium ">Why us</h5>
            <h2 className="text-4xl font-medium">Why choose B2C</h2>
          </div>
          <FadeSlideIn className="grid grid-cols-2 gap-16 items-center">
            {Processes.map((v, idx) => (
              <FeatureDiv
                key={idx}
                icon="/favicon.png"
                heading={v.heading}
                description={v.description}
              />
            ))}
          </FadeSlideIn>
        </section>

        <div className="py-16 px-8 max-h-screen">
          {/* Header */}
          <div className="mb-12">
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">
              Tech Stack
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Technologies we work with
            </h2>

            {/* Tabs */}
            <div className="flex gap-2">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 font-medium transition ${
                    activeTab === tab
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Technology Grid */}
          <FadeSlideIn className="grid grid-cols-6 gap-8">
            {technologies[activeTab].map((tech, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6  rounded-lg  duration-300 cursor-pointer group"
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-24 h-24 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    const img = e.currentTarget;

                    // avoid infinite onError loop
                    if (img.dataset.fallbackApplied === "true") return;

                    img.dataset.fallbackApplied = "true"; // mark fallback applied
                    img.src = `https://via.placeholder.com/100x100?text=${encodeURIComponent(
                      tech.name
                    )}`;
                  }}
                />
              </div>
            ))}
          </FadeSlideIn>
        </div>
        <FadeSlideIn>
          <FAQForDataAI />
        </FadeSlideIn>

        <div className="max-w-6xl mx-auto w-full py-16 my-10 px-16 text-white flex bg-blue-950 font-pt">
          <div className="flex flex-col gap-6 py-5 px-6 w-1/2">
            <div className="flex flex-col gap-1">
              <h2 className="text-7xl font-bold bg-blue-800 px-4 py-1 mb-2 w-fit">
                STILL HAVE
              </h2>
              <span className="text-7xl font-bold bg-blue-800 px-4 py-1 w-fit">
                {" "}
                QUESTIONS?
              </span>
            </div>
            <p className="text-xl">
              Can’t find the answer you are looking for? Contact us and we will
              get in touch with you shortly.
            </p>
            <button className="bg-blue-700 text-white/90 w-fit disabled px-10 py-2 hover:bg-blue-900 transition duration-300 font-bold text-lg">
              Get in touch
            </button>
          </div>
          <div className="w-1/2 flex justify-center">
            <img
              src="workflow.jpeg"
              alt="book"
              className="px-5 w-full h-[45vh]"
            />
          </div>
        </div>
      </div>

      <FadeSlideIn>
        <TechnologiesUsed />
      </FadeSlideIn>
    </div>
  );
}
