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

  interface Props {
    icon: string;
    heading: string;
    description: string;
  }

  const IndustryDiv = ({ icon, heading, description }: Props) => {
    return (
      <div className="flex flex-col justify-start gap-3 sm:gap-4 lg:gap-5 group hover:text-white hover:bg-blue-950 px-4 sm:px-6 lg:px-8 py-4 sm:py-5 transition-all duration-300">
        <img src={icon} alt="icon" className="w-16 sm:w-20" />
        <div className="flex justify-between items-start pr-4 sm:pr-6">
          <h4 className="text-lg sm:text-xl">{heading}</h4>
          <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
        </div>
        <p className="text-sm sm:text-base lg:text-lg font-sans text-gray-800 group-hover:text-gray-200">
          {description}
        </p>
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
        className="flex flex-col justify-start py-4 sm:py-5 group"
        onMouseEnter={() => setActive(index)}
        onMouseLeave={() => setActive(0)}
      >
        <span className="text-sm sm:text-base group-hover:text-blue-600">
          {index < 10 ? "0" + index : index}
        </span>

        <div className="relative pt-2 pb-4 sm:pb-5">
          <span className="absolute left-0 h-[2px] w-11/12 bg-white group-hover:bg-blue-600 group-hover:h-[4px] transition-all duration-500"></span>
        </div>

        <h4 className="text-xl sm:text-2xl lg:text-3xl mb-2">{heading}</h4>
        <p className="text-sm sm:text-base lg:text-lg w-full">{description}</p>
      </div>
    );
  };

  const FeatureDiv = ({ icon, heading, description }: Props) => {
    return (
      <div className="flex flex-col justify-start p-4 sm:p-5 group hover:bg-gray-100 transition-colors duration-300">
        <img src={icon} alt="icon" className="w-16 sm:w-20 mb-3" />
        <h4 className="text-xl sm:text-2xl lg:text-3xl mb-2">{heading}</h4>
        <p className="text-sm sm:text-base lg:text-lg w-full">{description}</p>
      </div>
    );
  };

  return (
    <div className="overflow-x-hidden">
      {/* HERO SECTION */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:w-10/12 xl:w-8/12 mx-auto min-h-screen flex flex-col items-center">
        <div className="flex flex-col lg:flex-row py-12 sm:py-16 lg:py-20 mt-16 sm:mt-20 lg:mt-28 gap-8 lg:gap-12 w-full">
          {/* LEFT SIDE - TEXT */}
          <div className="flex flex-col w-full lg:w-1/2 gap-4 sm:gap-5 lg:gap-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-medium leading-tight">
              App & Web Development Services
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-sans leading-relaxed">
              App & Web Development Services provides the agility, scalability, and
              cost-effectiveness needed for modern digital solutions. We build
              the foundation of your cloud environment through custom services,
              including cloud engineering consulting, app development, and more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 text-base sm:text-lg font-medium">
              <button className="bg-blue-700 px-6 sm:px-8 py-2.5 sm:py-3 hover:bg-transparent text-white hover:text-black transition-all border-2 border-transparent hover:border-blue-700">
                Let's talk
              </button>
              <button className="bg-transparent border-2 border-blue-700 font-bold px-6 sm:px-8 py-2.5 sm:py-3 hover:bg-blue-700 hover:text-white transition-all">
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

        {/* CLUTCH SECTION */}
        <FadeSlideIn
          className={`flex flex-col md:flex-row my-16 sm:my-20 lg:my-28 bg-blue-600 p-6 sm:p-8 lg:p-10 transition-all duration-700 w-full gap-6 md:gap-8 ${
            inView
              ? "opacity-100 translate-x-0 ease-in"
              : "opacity-0 -translate-x-10 ease-out"
          }`}
        >
          <div className="flex flex-col w-full md:w-1/2 gap-4 sm:gap-5 text-white">
            <h2 className="text-xl sm:text-2xl font-medium">Clutch Proven</h2>
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
              Team up with B2CINC to explore the limitless potential of
              artificial intelligence (AI)! From AI strategy building and data
              analysis to AI integration and deployment, our comprehensive
              artificial intelligence development services are tailored to
              address challenges across domains.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <img
              src="/clutchlogo.png"
              alt="Clutch logo"
              className="w-32 sm:w-40 h-auto object-contain"
            />
          </div>
        </FadeSlideIn>
      </div>

      {/* CLOUD SERVICES SECTION */}
      <div>
        <CloudServicesSection />
      </div>

      {/* TESTIMONIAL SECTION */}
      <div className="bg-blue-800 flex flex-col lg:flex-row items-center w-full max-w-[95%] sm:max-w-[90%] lg:max-w-[1300px] mx-auto text-white p-6 sm:p-8 lg:p-10 my-12 sm:my-16 lg:my-20 gap-6 lg:gap-8">
        {/* LEFT — IMAGE */}
        <div className="w-full lg:w-5/12 flex justify-center items-center">
          <img
            src="/image.png"
            alt="testimonial"
            className="h-48 sm:h-64 lg:h-[300px] w-auto object-cover rounded-md"
          />
        </div>

        {/* RIGHT — TEXT */}
        <div className="w-full lg:w-7/12">
          <p className="text-base sm:text-lg leading-relaxed font-sans mb-4 sm:mb-5">
            "B2CINC's product engineers have extensive skill sets in project
            management, interpersonal communication, creative thinking, design,
            and technical expertise...
          </p>

          <div>
            <p className="font-semibold text-base sm:text-lg">
              Alexey Galushko
            </p>
            <p className="opacity-80 text-sm sm:text-base">Delivery Director</p>
          </div>
        </div>
      </div>

      {/* INDUSTRIES SECTION */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:w-10/12 xl:w-8/12 mx-auto">
        <FadeSlideIn className="py-8 sm:py-12 lg:py-16">
          <div className="flex flex-col gap-3 sm:gap-4 py-6 sm:py-8 lg:py-10">
            <h5 className="text-xs sm:text-sm font-medium uppercase tracking-wider text-gray-600">
              INDUSTRIES
            </h5>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium">
              Industries we serve
            </h2>
            <p className="text-sm sm:text-base font-sans leading-relaxed max-w-4xl">
              Our team includes versatile specialists with varied experience and
              industry backgrounds. Below are some of the key benefits of cloud
              engineering solutions in some of the domains we specialize in.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
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

        {/* CONTACT FORM SECTION */}
        <div className="py-12 sm:py-16 my-8 sm:my-10 px-6 sm:px-10 lg:px-16 text-white bg-blue-950 rounded-lg">
          <FadeSlideIn className="flex flex-col gap-5 sm:gap-6 py-4 sm:py-5 lg:px-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl bg-blue-700 px-3 sm:px-4 py-1.5 sm:py-2 w-fit">
              What about you?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl w-full lg:w-4/5 xl:w-3/5 leading-relaxed">
              We're eager to delve deeper and understand your specific needs to
              unlock the full potential of AI for your business. By learning
              more about your challenges and goals, we can tailor our solutions
              to serve you best.
            </p>
            <form className="group flex flex-col gap-5 sm:gap-6">
              <input
                type="text"
                placeholder="Message"
                className="w-full lg:w-[650px] bg-transparent pb-4 sm:pb-5 outline-none border-b border-white/30 focus:border-white my-3 sm:my-5 text-sm sm:text-base"
              />
              <button className="bg-blue-700 text-white w-fit px-8 sm:px-10 py-2 sm:py-2.5 hover:bg-blue-900 transition duration-300 text-sm sm:text-base">
                Next
              </button>
            </form>
          </FadeSlideIn>
        </div>
      </div>

      {/* WORK PROCESS */}
      <FadeSlideIn>
        <WorkProcess />
      </FadeSlideIn>

      {/* CERTIFICATIONS SECTION */}
      <div className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h5 className="text-xs sm:text-sm font-semibold tracking-widest text-gray-500 uppercase mb-2">
            Expertise
          </h5>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold mb-4 sm:mb-6">
            Certified expertise you can trust
          </h1>

          <span className="inline-block text-gray-900 text-base sm:text-lg font-sans px-1 py-1">
            Our engineers are certified by:
          </span>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 mt-8 sm:mt-10 items-center">
            <img
              src="/googlecloud.png"
              alt="Google Cloud"
              className="w-full h-auto object-contain"
            />
            <img
              src="/Azure.png"
              alt="Azure"
              className="w-full h-auto object-contain"
            />
            <img
              src="/aws.png"
              alt="AWS"
              className="w-full h-auto object-contain"
            />
            <img
              src="/oracle.PNG"
              alt="Oracle"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>

      {/* PROJECTS SECTION */}
      <FadeSlideIn>
        <OurProjects />
      </FadeSlideIn>

      {/* WHY CHOOSE US SECTION */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:w-10/12 xl:w-8/12 mx-auto">
        <section className="pt-8 sm:pt-10 lg:pt-12">
          <div className="flex flex-col gap-3 sm:gap-4 py-6 sm:py-8 lg:py-10">
            <h5 className="text-base sm:text-lg font-medium uppercase tracking-wider text-gray-600">
              Why us
            </h5>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-medium">
              Why choose B2CINC
            </h2>
          </div>

          <FadeSlideIn className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
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

        {/* TECH STACK SECTION */}
        <div className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="mb-8 sm:mb-12">
            <p className="text-xs sm:text-sm text-gray-500 uppercase tracking-wider mb-3 sm:mb-4">
              TECHNOLOGIES
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8">
              AI tech stack
            </h2>

            {/* Tabs */}
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 text-sm sm:text-base font-medium transition-all ${
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
          <FadeSlideIn className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6 lg:gap-8">
            {technologies[activeTab].map((tech, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-4 sm:p-6 rounded-lg duration-300 cursor-pointer group"
              >
                <img
                  src={tech.logo}
                  alt={tech.name}
                  className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    const img = e.currentTarget;
                    if (img.dataset.fallbackApplied === "true") return;
                    img.dataset.fallbackApplied = "true";
                    img.src = `https://via.placeholder.com/100x100?text=${encodeURIComponent(
                      tech.name
                    )}`;
                  }}
                />
              </div>
            ))}
          </FadeSlideIn>
        </div>

        {/* FAQ SECTION */}
        <FadeSlideIn>
          <FAQForDataAI />
        </FadeSlideIn>

        {/* QUESTIONS CTA SECTION */}
        <div className="w-full mx-auto py-12 sm:py-16 my-8 sm:my-10 px-6 sm:px-10 lg:px-16 text-white flex flex-col lg:flex-row bg-blue-950 font-pt gap-8 lg:gap-0">
          <div className="flex flex-col gap-5 sm:gap-6 py-4 sm:py-5 lg:px-6 w-full lg:w-1/2">
            <div className="flex flex-col gap-2">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-blue-800 px-3 sm:px-4 py-1 mb-2 w-fit">
                STILL HAVE
              </h2>
              <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-blue-800 px-3 sm:px-4 py-1 w-fit">
                QUESTIONS?
              </span>
            </div>
            <p className="text-base sm:text-lg lg:text-xl leading-relaxed">
              Can't find the answer you are looking for? Contact us and we will
              get in touch with you shortly.
            </p>
            <button className="bg-blue-700 text-white/90 w-fit px-8 sm:px-10 py-2 sm:py-2.5 hover:bg-blue-900 transition duration-300 font-bold text-base sm:text-lg">
              Get in touch
            </button>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center items-center">
            <img
              src="workflow.jpeg"
              alt="workflow"
              className="w-full max-w-md lg:max-w-full h-auto max-h-[45vh] object-contain lg:object-cover"
            />
          </div>
        </div>
      </div>

      {/* FEATURED PROJECTS */}
      <FadeSlideIn>
        <FeaturedProjects />
      </FadeSlideIn>

      {/* TECHNOLOGIES USED */}
      <FadeSlideIn>
        <TechnologiesUsed />
      </FadeSlideIn>
    </div>
  );
}
