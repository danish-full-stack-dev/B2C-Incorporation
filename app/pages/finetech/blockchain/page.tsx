"use client";
import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { AIServicesSection } from "../../../componants/AiServices";
import { OurProjects } from "../../../componants/OurProjects";
import { FeaturedProjects } from "../../../componants/FeaturedProjects";
import { TechnologiesUsed } from "../../../componants/TechnologiesUsed";
import { ProcessProgress } from "../../../componants/ProgressBar";
import { FAQForDataAI } from "@/app/componants/FQAForAI";
import useInViewAnimation from "@/app/hooks/useInViewAnimation";
import FadeSlideIn from "@/app/hooks/FadeSlideIn";
import { CloudServicesSection } from "@/app/componants/CloudServices";
import WorkProcess from "@/app/componants/WorkProcess";
import Image from "next/image";

interface Technology {
  name: string;
  logo: string;
}

interface TechCategory {
  [key: string]: Technology[];
}
export default function AIDevelopementServices() {
  const [active, setActive] = useState(0);

  const [activeTab, setActiveTab] = useState<string>(
    "Frameworks and libraries"
  );
  const { ref, inView } = useInViewAnimation();

  const tabs = [
    "Frameworks and libraries",
    "Modules/Toolkits",
    "Clouds",
    "Languages",
  ];

  const technologies: TechCategory = {
    "Frameworks and libraries": [
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
      {
        name: "Scikit-learn",
        logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
      },
      {
        name: "PyTorch",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
      },
      {
        name: "MXNet",
        logo: "https://raw.githubusercontent.com/dmlc/web-data/master/mxnet/image/mxnet_logo_2.png",
      },
      {
        name: "NVIDIA",
        logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nvidia/nvidia-original.svg",
      },
      {
        name: "Caffe",
        logo: "https://avatars.githubusercontent.com/u/6392063?s=200&v=4",
      },
      {
        name: "Theano",
        logo: "https://avatars.githubusercontent.com/u/10744616?s=200&v=4",
      },
      { name: "OpenNN", logo: "https://www.opennn.net/images/OpenNN.png" },
      {
        name: "MLlib",
        logo: "https://spark.apache.org/images/spark-logo-trademark.png",
      },
    ],
    "Modules/Toolkits": [
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
    Clouds: [
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
    Languages: [
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
      icon: "image.png",
      heading: "Kick-off",
      description:
        "We analyze your needs and goals, sketch out design concepts, and decide on the AI-based solution to develop.",
    },
    {
      icon: "image.png",
      heading: "Kick-off",
      description:
        "We analyze your needs and goals, sketch out design concepts, and decide on the AI-based solution to develop.",
    },
    {
      icon: "image.png",
      heading: "Kick-off",
      description:
        "We analyze your needs and goals, sketch out design concepts, and decide on the AI-based solution to develop.",
    },
    {
      icon: "image.png",
      heading: "Kick-off",
      description:
        "We analyze your needs and goals, sketch out design concepts, and decide on the AI-based solution to develop.",
    },
    {
      icon: "image.png",
      heading: "Kick-off",
      description:
        "We analyze your needs and goals, sketch out design concepts, and decide on the AI-based solution to develop.",
    },
    {
      icon: "image.png",
      heading: "Kick-off",
      description:
        "We analyze your needs and goals, sketch out design concepts, and decide on the AI-based solution to develop.",
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
        <img src={icon} alt="icon" className="w-20 " />
        <h4 className="text-3xl">{heading}</h4>
        <p className="text-lg w-full">{description}</p>
      </div>
    );
  };
  return (
    <div>
      <div className="w-8/12 mx-auto min-h-screen flex flex-col items-center">
        <div className="flex py-16 h-5/6 mt-28">
          <div className="flex flex-col w-1/2 h-3/4 gap-3 mt-20px">
            <h2 className="text-5xl font-medium">
              Blockchain Development Services
            </h2>
            <p className="text-2xl py-8 w-4/5 font-sans">
              Partnering with us is your gateway to transparent and secure
              digital operations. Our blockchain application development
              services empower business with unparalleled decentralized
              solutions. Whether it’s a custom-built blockchain for
              transactions, smart contract, or tokenization platform, the
              software we develop helps our clients unlock new opportunities in
              the digital space..
            </p>
            <div className="flex gap-5 text-lg font-medium w-5/6">
              <button className="bg-blue-700 px-8 py-2 hover:bg-transparent w-full text-white hover:text-black transition">
                Let's talk
              </button>
              <button className="bg-transparent border-2 border-blue-700 font-bold w-full px-8 py-2 hover:bg-blue-700 transition hover:text-whi">
                View Portfolio
              </button>
            </div>
          </div>
          <div className="w-[370] m-24">
            <img
              src="/favicon.png"
              alt="image"
              className="max-h-[60vh] object-contain -rotate-45"
            />
          </div>
        </div>
        <FadeSlideIn
          className={`flex my-28 bg-blue-600 p-8 transition-all duration-700
          ${
            inView
              ? "opacity-100 translate-x-0 ease-in" // when visible → slide to center
              : "opacity-0 -translate-x-10 ease-out"
          }
          `}
        >
          <div className="flex flex-col w-1/2 h-3/4 gap-3 text-white">
            <h2 className="text-2xl font-medium">Clutch Proven</h2>
            <p className="text-lg pt-6">
              Team up with EffectiveSoft to explore the limitless potential of
              artificial intelligence (AI)! From AI strategy building and data
              analysis to AI integration and deployment, our comprehensive
              artificial intelligence development services are tailored to
              address challenges across domains.
            </p>
          </div>
          <div className="w-1/2 flex justify-center">
            <img
              src="/clutchlogo.png"
              alt="image"
              className="w-40 object-contain"
            />
          </div>
        </FadeSlideIn>
      </div>
      <div className="w-8/12 mx-auto">
        <FadeSlideIn className="py-10">
          <div className="flex flex-col gap-3 py-10">
            <h5 className="text-sm font-medium">INDUSTRIES</h5>
            <h2 className="text-4xl font-medium">Industries we serve </h2>
            <p className="text-m font-sans">
              Our team includes versatile specialists with varied experience and
              industry backgrounds.<br></br>
              Below are some of the key benefits of cloud engineering solutions
              in some of the domains we<br></br>specialize in.
            </p>
          </div>
          <div className="grid grid-cols-3 space-y-6 items-center">
            {Industries.map((v, idx) => (
              <IndustryDiv
                key={idx}
                icon={v.icon}
                heading={v.heading}
                description={v.description}
              />
            ))}
          </div>
        </FadeSlideIn>
      </div>
      <div className="bg-blue-800 flex items-center w-[1300px] h-[350px] mx-auto text-white p-10">
        {/* LEFT — IMAGE */}
        <div className="w-[400px] flex justify-center items-center">
          <img
            src="/image.png"
            alt="image"
            className="h-[300px] w-auto object-cover rounded-md"
          />
        </div>

        {/* RIGHT — TEXT */}
        <div className="w-1/2">
          <p className="text-lg leading-relaxed font-sans">
            “EffectiveSoft's product engineers have extensive skill sets in
            project management, interpersonal communication, creative thinking,
            design, and technical expertise...”
          </p>

          <div className="mt-5">
            <p className="font-semibold text-lg">Alexey Galushko</p>
            <p className="opacity-80">Delivery Director</p>
          </div>
        </div>
      </div>
      <div className="w-8/12 mx-auto">
        <FadeSlideIn className="py-10">
          <div>
            <CloudServicesSection />
          </div>
        </FadeSlideIn>

        <FadeSlideIn>
          <section className="max-w-6xl mx-auto px-6 py-16">
            <p className="text-xs uppercase text-gray-500 mb-2 font-semibold tracking-wider">
              Platforms
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-12 max-w-3xl">
              Blockchain development platforms we trust
            </h2>

            <div className="grid grid-cols-6 sm:grid-cols-8 gap-x-12 gap-y-10 justify-center items-center">
              {platforms.map(({ name, logo, alt, isText }, i) => (
                <div key={i} className="flex justify-center items-center">
                  {isText ? (
                    <div className="bg-gray-100 dark:bg-gray-800 p-6 flex justify-center items-center rounded-md w-28 h-28">
                      <span className="text-gray-700 dark:text-gray-200 text-base font-medium">
                        {name}
                      </span>
                      <span className="ml-1 text-blue-600 text-xl font-bold">
                        .
                      </span>
                    </div>
                  ) : logo ? (
                    <Image
                      src={logo}
                      alt={alt}
                      width={56}
                      height={56}
                      className={`${
                        name === "Ethereum"
                          ? "bg-blue-500 rounded-full p-2"
                          : ""
                      }`}
                    />
                  ) : null}
                </div>
              ))}
            </div>
          </section>
        </FadeSlideIn>
      </div>

      <FadeSlideIn>
        <OurProjects />
      </FadeSlideIn>

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
                icon={v.icon}
                heading={v.heading}
                description={v.description}
              />
            ))}
          </FadeSlideIn>
        </section>
        <div className="bg-blue-950">
          <WorkProcess />
        </div>
        <section className="pt-10">
          <div className="flex flex-col gap-3 py-10">
            <h5 className="text-lg font-medium ">Why us</h5>
            <h2 className="text-4xl font-medium">Why choose EffectiveSoft</h2>
          </div>
          <FadeSlideIn className="grid grid-cols-2 gap-16 items-center">
            {Processes.map((v, idx) => (
              <FeatureDiv
                key={idx}
                icon={v.icon}
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
              TECHNOLOGIES
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              AI tech stack
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
        <FeaturedProjects />
      </FadeSlideIn>

      <FadeSlideIn>
        <TechnologiesUsed />
      </FadeSlideIn>
    </div>
  );
}
