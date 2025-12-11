"use client";
import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { SoftwareServices } from "@/app/componants/SoftwareServices";
import { OurProjects } from "../../../componants/OurProjects";
import { FeaturedProjects } from "../../../componants/FeaturedProjects";
import { TechnologiesUsed } from "../../../componants/TechnologiesUsed";
import { ProcessProgress } from "../../../componants/ProgressBar";
import { FAQForDataAI } from "@/app/componants/FQAForAI";
import useInViewAnimation from "@/app/hooks/useInViewAnimation";
import FadeSlideIn from "@/app/hooks/FadeSlideIn";


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
const steps = [
  {
    title: "Business analysis",
    description:
      "Our team of business analysts thoroughly analyzes your revenue cycle processes, needs, and constraints. We then create a clear project road map and provide a general estimate for the project.",
  },
  {
    title: "Solution architecture",
    description:
      "EffectiveSoft’s solution architects create a custom architectural blueprint, select suitable development tools and technologies, and identify potential challenges that might arise later in the project.",
  },
  {
    title: "UI/UX Design",
    description:
      "We analyze end-user needs and create an intuitive UX design focused on usability and accessibility. The design is based on project specifics and customer expectations.",
  },
];
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
  ];

  
  const Advantages = [
    {
      icon: "image.png",
      heading: "HC",
      description:
        "AI solutions can ensure accurate diagnoses, automate the creation of personalized treatment plans based on individual health data, provide data-driven predictions of diseases, efficiently monitor patients’ health conditions, manage patient flow, assist doctors during surgical operations, accelerate drug discovery, streamline medical research, and more, all while adhering to all required standards to uphold the highest levels of sensitivity for healthcare data.",
    },
    {
      icon: "image.png",
      heading: "HC",
      description:
        "AI solutions can ensure accurate diagnoses, automate the creation of personalized treatment plans based on individual health data, provide data-driven predictions of diseases, efficiently monitor patients’ health conditions, manage patient flow, assist doctors during surgical operations, accelerate drug discovery, streamline medical research, and more, all while adhering to all required standards to uphold the highest levels of sensitivity for healthcare data.",
    },
    {
      icon: "image.png",
      heading: "HC",
      description:
        "AI solutions can ensure accurate diagnoses, automate the creation of personalized treatment plans based on individual health data, provide data-driven predictions of diseases, efficiently monitor patients’ health conditions, manage patient flow, assist doctors during surgical operations, accelerate drug discovery, streamline medical research, and more, all while adhering to all required standards to uphold the highest levels of sensitivity for healthcare data.",
    },
    {
      icon: "image.png",
      heading: "HC",
      description:
        "AI solutions can ensure accurate diagnoses, automate the creation of personalized treatment plans based on individual health data, provide data-driven predictions of diseases, efficiently monitor patients’ health conditions, manage patient flow, assist doctors during surgical operations, accelerate drug discovery, streamline medical research, and more, all while adhering to all required standards to uphold the highest levels of sensitivity for healthcare data.",
    },
    {
      icon: "image.png",
      heading: "HC",
      description:
        "AI solutions can ensure accurate diagnoses, automate the creation of personalized treatment plans based on individual health data, provide data-driven predictions of diseases, efficiently monitor patients’ health conditions, manage patient flow, assist doctors during surgical operations, accelerate drug discovery, streamline medical research, and more, all while adhering to all required standards to uphold the highest levels of sensitivity for healthcare data.",
    },
    {
      icon: "image.png",
      heading: "HC",
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

   const AdvantagesDiv = ({ icon, heading, description }: Props) => {
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
            <h2 className="text-5xl font-medium">Product Engineering Services</h2>
            <p className=" py-8 w-4/5 text-2xl text-gray-600  font-sans">
              Through our full-cycle product engineering services, we help cross-industry businesses 
              of all sizes build impactful software products faster and more cost-efficiently. 
              From ideation to post-launch maintenance, we carefully guide our clients every 
              step of the way, delivering high-quality and user-centric products that satisfy the most
               exacting customer demands and realize the most innovative business strategies.
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
          <div className="w-1/2">
            <img
              src="/image.png"
              alt="image"
              className="max-h-[60vh] object-contain"
            />
          </div>
        </div>
        <FadeSlideIn
          className={`flex my-28 bg-blue-600 p-8 transition-all duration-700 h-[300px]
          ${
            inView
              ? "opacity-100 translate-x-0 ease-in" // when visible → slide to center
              : "opacity-0 -translate-x-10 ease-out"
          }
          `}
        >
          <div className="flex flex-col w-1/2 h-3/4 gap-3 text-white">
            <h2 className="text-2xl font-medium mt-50px">Clutch Proven</h2>
            <p className="text-lg font-sans">
              "EffectiveSoft has earned Top IT Services Company Outsourcing, Top IT Services Company Medical, 
              and Top Software Developers accolades from Clutch. These designations underscore our superiority 
              in providing IT and software development services, as affirmed 
              by hundreds of satisfied clients worldwide."ctiveSoft to explore the limitless potential of
            </p>
          </div>
          <div className="w-1/2 flex justify-center">
            <img src="/image.png" alt="image" className="w-40 object-contain" />
          </div>
        </FadeSlideIn>
      </div>
      <div>
        <SoftwareServices/>
      </div>\
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
      “EffectiveSoft's product engineers have extensive skill sets in project 
      management, interpersonal communication, creative thinking, design, and 
      technical expertise...”
    </p>

    <div className="mt-5">
      <p className="font-semibold text-lg">Alexey Galushko</p>
      <p className="opacity-80">Delivery Director</p>
    </div>
  </div>

</div>

<div className="py-16 my-10 px-16 text-white bg-gray-100 w-full ">
          <FadeSlideIn className="flex flex-col gap-6 py-5 px-6">
            <div className="bg-gray-100 text-black px-6 md:px-16 py-20 ml-[250px] w-[1200] items-center text-center.">
  <p className="uppercase tracking-wide mb-3 text-black font-sans">Process</p>
  <h2 className="text-4xl md:text-4xl leading-tight mb-16">
    Our software product engineering process
  </h2>

  {steps.map((step, index) => (
    <div key={index} className="flex gap-6 mb-14 group cursor-pointer">
      
       {/* Auto Number + Vertical Line */}
    <div className="flex flex-col items-center relative">
      {/* Number */}
      <div className="w-10 h-10 flex items-center justify-center rounded-full border border-blue-500
                      group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300 z-10 bg-white">
        {index + 1}
      </div>
      
      {/* Vertical Line */}
      {index !== steps.length - 1 && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 h-full w-px bg-blue-500"></div>
      )}
    </div>
      
    {/* Text */}
    <div>
      <h3 className="text-xl font-semibold text-black underline group-hover:text-blue-500 transition-colors duration-300">
        {step.title}
      </h3>
      <p className="mt-2 text-lg text-black font-sans">
        {step.description}
      </p>
    </div>
    </div>
  ))}
</div>
          </FadeSlideIn>
        </div>
      <div className="w-8/12 mx-auto">
        <FadeSlideIn className="py-10">
          <div className="flex flex-col gap-3 py-10">
            <h5 className="text-sm font-medium font-sans">INDUSTRIES</h5>
            <h2 className="text-4xl font-medium font-bold">Our product engineering expertise across<br></br>industries</h2>
          </div>
          <div className="grid grid-cols-2 space-y-6 items-center font-sans">
            {Industries.map((v, idx) => (
              <IndustryDiv
                key={idx}
                icon={v.icon}
                heading={v.heading}
                description={v.description}
              />
            ))}
          </div>
          <div className="flex justify-center py-10">
            <button className="bg-blue-700 text-white w-fit disabled px-10 py-2 hover:bg-blue-900 transition duration-300 mx-auto">
              Book a call with an expert
            </button>
          </div>
        </FadeSlideIn>

        <div className="py-16 my-10 px-16 text-white  bg-blue-950">
          <FadeSlideIn className="flex flex-col gap-6 py-5 px-6">
            <h2 className="text-5xl bg-blue-700 px-4 py-2 w-fit">
              What about you?
            </h2>
            <p className="text-xl w-3/5">
              We're eager to delve deeper and understand your specific needs to
              unlock the full potential of AI for your business. By learning
              more about your challenges and goals, we can tailor our solutions
              to serve you best.
            </p>
            <form className="group flex flex-col gap-6">
              <input
                type="text"
                placeholder="Message"
                className="w-[650px] bg-transparent pb-5 outline-none border-b my-5"
              />
              <button className="bg-blue-700 text-white w-fit disabled px-10 py-2 hover:bg-blue-900 transition duration-300">
                Next
              </button>
            </form>
          </FadeSlideIn>
        </div>
      </div>
         
         <FadeSlideIn className="py-10">
          <div className="flex flex-col gap-3 py-10 ml-[50px]">
            <h5 className="text-sm font-medium font-sans">our advantages</h5>
            <h2 className="text-4xl font-medium font-bold">Our product items are</h2>
          </div>
          <div className="grid grid-cols-3 space-y-6 items-center font-sans">
            {Industries.map((v, idx) => (
              <IndustryDiv
                key={idx}
                icon={v.icon}
                heading={v.heading}
                description={v.description}
              />
            ))}
          </div>
          <div className="flex justify-center py-10">
            <button className="bg-blue-700 text-white w-fit disabled px-10 py-2 hover:bg-blue-900 transition duration-300 mx-auto">
              Contact us for help
            </button>
          </div>
        </FadeSlideIn>

      <FadeSlideIn>
        <OurProjects />
      </FadeSlideIn>

      {/* <div className="w-8/12 mx-auto">
        <div className="py-16 my-16 px-16 text-white flex bg-blue-950">
          <div className="flex flex-col gap-6 py-5 px-6 w-1/2">
            <h2 className="text-4xl font-bold">What about you?</h2>
            <p className="text-2xl">
              We're eager to delve deeper and understand your specific needs to
              unlock the full potential of AI for your business. By learning
              more about your challenges and goals, we can tailor our solutions
              to serve you best.
            </p>
            <button className="bg-blue-700 text-white/90 w-fit disabled px-10 py-2 hover:bg-blue-900 transition duration-300 font-bold text-lg">
              Get your whitepaper
            </button>
          </div>
          <div className="w-1/2 flex justify-center">
            <img
              src="workflow.jpeg"
              alt="book"
              className="px-5 w-full h-[40vh]"
            />
          </div>
        </div>
      </div> */}

        {/* <div className="w-8/12 mx-auto">
          <div className="flex flex-col gap-3 py-10">
            <h5 className="text-sm font-medium">OUR PROCESS</h5>
            <h2 className="text-4xl font-medium">
              AI Software development process
            </h2>
          </div>
          <div className="py-10">
            <ProcessProgress active={active} setActive={setActive} />
          </div>
          <div className="grid grid-cols-3 gap-8 items-center">
            {Processes.map((v, idx) => (
              <ProcessDiv
                key={idx}
                index={idx + 1}
                heading={v.heading}
                description={v.description}
                setActive={setActive}
              />
            ))}
          </div>
        </div> */}

      <div className="w-8/12 mx-auto">

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
