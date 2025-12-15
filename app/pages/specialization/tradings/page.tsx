"use client";
import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { OurProjects } from "../../../componants/OurProjects";
import { FeaturedProjects } from "../../../componants/FeaturedProjects";
import { TechnologiesUsed } from "../../../componants/TechnologiesUsed";
import { ProcessProgress } from "../../../componants/ProgressBar";
import { FAQForDataAI } from "@/app/componants/FQAForAI";
import useInViewAnimation from "@/app/hooks/useInViewAnimation";
import FadeSlideIn from "@/app/hooks/FadeSlideIn";
import TradingServices from "../../services/trading-services/page";
import { TradingServicesSection } from "@/app/componants/Tradingservices";
import SolutionsSection from "@/app/componants/CustomTrading";
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
    "Programming languages"
  );
  const { ref, inView } = useInViewAnimation();

  const tabs = [
    "Programming languages",
    "Frameworks/libraries",
    "Databases",
    "Runtime environments",
  ];

  const technologies: TechCategory = {
    "Programming languages": [
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
    "Frameworks/libraries": [
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
    Databases: [
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
    "Runtime environments": [
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

  const Industries = [
    {
      icon: "image.png",
      heading: "HealthCare",
      description:
        "AI solutions can ensure accurate diagnoses, automate the creation of personalized treatment plans based on individual health data, provide data-driven predictions of diseases, efficiently monitor patients’ health conditions, manage patient flow, assist doctors during surgical operations, accelerate drug discovery, streamline medical research, and more, all while adhering to all required standards to uphold the highest levels of sensitivity for healthcare data.",
    },
    {
      icon: "image.png",
      heading: "HealthCare",
      description:
        "AI solutions can ensure accurate diagnoses, automate the creation of personalized treatment plans based on individual health data, provide data-driven predictions of diseases, efficiently monitor patients’ health conditions, manage patient flow, assist doctors during surgical operations, accelerate drug discovery, streamline medical research, and more, all while adhering to all required standards to uphold the highest levels of sensitivity for healthcare data.",
    },
    {
      icon: "image.png",
      heading: "HealthCare",
      description:
        "AI solutions can ensure accurate diagnoses, automate the creation of personalized treatment plans based on individual health data, provide data-driven predictions of diseases, efficiently monitor patients’ health conditions, manage patient flow, assist doctors during surgical operations, accelerate drug discovery, streamline medical research, and more, all while adhering to all required standards to uphold the highest levels of sensitivity for healthcare data.",
    },
    {
      icon: "image.png",
      heading: "HealthCare",
      description:
        "AI solutions can ensure accurate diagnoses, automate the creation of personalized treatment plans based on individual health data, provide data-driven predictions of diseases, efficiently monitor patients’ health conditions, manage patient flow, assist doctors during surgical operations, accelerate drug discovery, streamline medical research, and more, all while adhering to all required standards to uphold the highest levels of sensitivity for healthcare data.",
    },
    {
      icon: "image.png",
      heading: "HealthCare",
      description:
        "AI solutions can ensure accurate diagnoses, automate the creation of personalized treatment plans based on individual health data, provide data-driven predictions of diseases, efficiently monitor patients’ health conditions, manage patient flow, assist doctors during surgical operations, accelerate drug discovery, streamline medical research, and more, all while adhering to all required standards to uphold the highest levels of sensitivity for healthcare data.",
    },
    {
      icon: "image.png",
      heading: "HealthCare",
      description:
        "AI solutions can ensure accurate diagnoses, automate the creation of personalized treatment plans based on individual health data, provide data-driven predictions of diseases, efficiently monitor patients’ health conditions, manage patient flow, assist doctors during surgical operations, accelerate drug discovery, streamline medical research, and more, all while adhering to all required standards to uphold the highest levels of sensitivity for healthcare data.",
    },
    {
      icon: "image.png",
      heading: "HealthCare",
      description:
        "AI solutions can ensure accurate diagnoses, automate the creation of personalized treatment plans based on individual health data, provide data-driven predictions of diseases, efficiently monitor patients’ health conditions, manage patient flow, assist doctors during surgical operations, accelerate drug discovery, streamline medical research, and more, all while adhering to all required standards to uphold the highest levels of sensitivity for healthcare data.",
    },
    {
      icon: "image.png",
      heading: "HealthCare",
      description:
        "AI solutions can ensure accurate diagnoses, automate the creation of personalized treatment plans based on individual health data, provide data-driven predictions of diseases, efficiently monitor patients’ health conditions, manage patient flow, assist doctors during surgical operations, accelerate drug discovery, streamline medical research, and more, all while adhering to all required standards to uphold the highest levels of sensitivity for healthcare data.",
    },
    {
      icon: "image.png",
      heading: "HealthCare",
      description:
        "AI solutions can ensure accurate diagnoses, automate the creation of personalized treatment plans based on individual health data, provide data-driven predictions of diseases, efficiently monitor patients’ health conditions, manage patient flow, assist doctors during surgical operations, accelerate drug discovery, streamline medical research, and more, all while adhering to all required standards to uphold the highest levels of sensitivity for healthcare data.",
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
        <p className="text-lg">{description}</p>
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
          <div className="flex flex-col w-1/2 h-3/4 gap-3 ">
            <h2 className="text-5xl font-medium">
              Trading Platform Development
            </h2>
            <p className="text-xl py-8 w-4/5 font-sans">
              As a renowned provider of trading platform development services
              with 20+ years of IT experience, EffectiveSoft offers unparalleled
              solutions to various businesses in the financial sector. In
              addition to building robust, secure, and scalable trading software
              for browsers, desktops, and mobile devices, we provide technical
              assistance in upgrading existing trading platforms. Our
              high-quality development services help trading companies optimize
              trading strategies, realize business goals, and achieve tangible
              results..
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
          className={`flex my-28 bg-blue-800 p-8 transition-all duration-700
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
            <img src="/image.png" alt="image" className="w-40 object-contain" />
          </div>
        </FadeSlideIn>
      </div>
      <div>
        <TradingServicesSection />
      </div>

      <FadeSlideIn>
        <SolutionsSection />
      </FadeSlideIn>

      <FadeSlideIn>
        <OurProjects />
      </FadeSlideIn>

      <div className="bg-blue-50">
        <div className="w-8/12 mx-auto">
          <section className="pt-10">
            <div className="flex flex-col gap-3 py-10">
              <h5 className="text-sm font-medium">our advantages</h5>
              <h2 className="text-4xl font-medium">Why choose B2C</h2>
            </div>
            <FadeSlideIn className="grid grid-cols-3 gap-6 items-center">
              {Processes.map((v, idx) => (
                <FeatureDiv
                  key={idx}
                  icon={v.icon}
                  heading={v.heading}
                  description={v.description}
                />
              ))}
            </FadeSlideIn>

            <div className="flex justify-center py-5">
              <button className="bg-blue-600 text-white w-fit disabled px-10 py-2 hover:bg-blue-900 transition duration-300 mx-auto">
                Contact us for help
              </button>
            </div>
          </section>
        </div>
      </div>

      <div className="w-8/12 mx-auto">
        <div className="py-16 my-16 px-16 text-white flex bg-blue-950">
          <FadeSlideIn className="flex flex-col gap-6 py-5 px-6">
            <h2 className="text-5xl bg-blue-700 px-4 py-2 w-fit">
              What about you?
            </h2>
            <p className="text-xl w-3/5">
              We are thrilled to dive deep into your needs and tailor our
              trading software services to help you build a robust, secure, and
              scalable trading solution..
            </p>
            <form className="group flex flex-col gap-6">
              <input
                type="text"
                placeholder="Message"
                className="w-[1000px] bg-transparent pb-5 outline-none border-b my-5"
              />
              <button className="bg-blue-700 text-white w-fit disabled px-10 py-2 hover:bg-blue-900 transition duration-300">
                Next
              </button>
            </form>
          </FadeSlideIn>
        </div>
      </div>

      <div className="w-8/12 mx-auto">
        
         <section className="w-full bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-gray-500">
          Testimonial
        </p>
        <h2 className="mb-12 text-4xl font-bold text-gray-900">
          Our clients say
        </h2>

        {/* Card */}
        <div className="relative rounded-lg bg-gray-50 px-12 py-16">
          {/* Logo */}
          <div className="absolute right-12 top-12 text-xl font-bold">
            <span className="text-gray-900">CITY</span>
            <span className="text-yellow-400">INDEX</span>
          </div>

          {/* Highlighted Title */}
          <h3 className="mb-6 max-w-4xl text-3xl font-extrabold leading-tight text-white">
            <span className="bg-blue-600 px-2 py-1">
              ATTENTION TO DETAIL AND
            </span>
            <br />
            <span className="mt-2 inline-block bg-blue-600 px-2 py-1">
              RELIABILITY ON DELIVERY DATES
            </span>
          </h3>

          {/* Description */}
          <p className="mb-10 max-w-3xl text-lg leading-relaxed text-gray-600">
            Since our first engagement a year ago, I have been impressed not
            only by the quality of work that EffectiveSoft have done for City
            Index but also their attention to detail and reliability on delivery
            dates.
          </p>

          {/* Author */}
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 overflow-hidden rounded-full">
             <Image
  src="/AI.png"
  alt="Arthur Grimley"
  width={56}
  height={56}
/>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Arthur Grimley</p>
              <p className="text-sm text-gray-500">CIO UK</p>
              <p className="text-sm text-gray-500">CityIndex Group</p>
            </div>
          </div>
        </div>
      </div>
    </section>

        <div className="py-16 px-8 max-h-screen">
          {/* Header */}
          <div className="mb-12">
            <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">
              tech stack
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              Trading tech stack
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
