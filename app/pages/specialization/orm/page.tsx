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

interface Technology {
  name: string;
  logo: string;
}

interface TechCategory {
  [key: string]: Technology[];
}
export default function TradingServices() {
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
      heading: "Automated coding and scrubbing",
      description:
        "Seamlessly connects with EHRs/EMRs, practice management systems (PMSs), insurance verification platforms, and other software.",
    },
    {
      icon: "image.png",
      heading: "Eligibility verification",
      description:
        "Verifies patients’ insurance coverage at an early stage of the RCM process, eliminates potential eligibility issues, and reduces claim denials and payment delays.",
    },
    {
      icon: "image.png",
      heading: "Kick-off",
      description:
        "We analyze your needs and goals, sketch out design concepts, and decide on the AI-based solution to develop.",
    },
    {
      icon: "image.png",
      heading: "Claims management",
      description:
        "Automates claims submissions and real-time status tracking, supports AI-powered predictive denial management, and enables claim appeals and resubmissions.",
    },
    {
      icon: "image.png",
      heading: "Patient portal",
      description:
        "Grants patients access to their health information, simplifies communication with healthcare providers, and facilitates appointment scheduling and online payments.",
    },
    {
      icon: "image.png",
      heading:"Reporting and analytics",
      description:
        "Provides real-time insights into RCM operations, analyzes relevant KPIs like clean claim and net collection rates, and drives more informed business choices.",
    },
        {
      icon: "image.png",
      heading: "Customizable dashboard",
      description:
        "Visualizes complex healthcare data using responsive charts and graphs, highlights key metrics and trends, and identifies areas for improvement.",
    },
    {
      icon: "image.png",
      heading: "Security and coding compliance",
      description:
        "Protects sensitive information with measures like encryption and HIPAA compliance and offers coding validation based on HCPCS, ICD-10, and CPT..",
    },
    {
      icon: "image.png",
      heading:"AR management",
      description:
        "Monitors outstanding invoices, sets reminders for due and past bills, follows up on claims, handles payer collections, and reduces AR days..",
    },
     {
      icon: "image.png",
      heading: "Multi-location and multi-provider support",
      description:
        "Unifies billing and collection processes across diverse locations, insurers, and healthcare providers to ensure consistent financial performance.",
    },
    {
      icon: "image.png",
      heading:"Cloud and on-premises deployment",
      description:
        "Offers the flexibility to host your RCM software in the cloud or on-premises—depending on your capabilities and preferences..",
    },
  ];

 const steps = [
  {
    title: "Business analysis",
    description:
      "Our team of business analysts thoroughly analyzes your revenue cycle processes, needs, and constraints. We then create a clear project road map and provide a general estimate for the project.",
  },
  {
    title: "Solution architecture",
    description:
      "B2CINC solution architects create a custom architectural blueprint, select suitable development tools and technologies, and identify potential challenges that might arise later in the project.",
  },
  {
    title: "UI/UX Design",
    description:
      "We analyze end-user needs and create an intuitive UX design focused on usability and accessibility. The design is based on project specifics and customer expectations.",
  },
  {
    title: "RCM development",
    description:
      "Our RCM developers translate the solution architecture and UX design into working code. We equip the software with essential RCM features to ensure your long-term financial health.",
  },
  {
    title: "Quality assurance and testing",
    description:
      "From the beginning of development, we detect emerging issues and provide immediate fixes. Once the full RCM solution is available, our testing team evaluates it for security, compliance, performance, and more.",
  },
  {
    title: "Deployment",
    description:
      "After end-to-end testing, the software is ready for launch. We select a suitable deployment strategy and integrate the RCM software into your infrastructure, paying attention to its full compatibility with existing systems.",
  },
  {
    title: "Maintenance and support",
    description:
      "Even after your solution goes live, B2CINC continues to support it—monitoring its performance, resolving emerging issues, integrating new features, and refining it based on user feedback.",
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
            <h2 className="text-5xl font-medium font-bold">Online Reputation Management System(ORM's)</h2>
            <p className="text-2xl py-8 w-4/5 font-normal">
            Negative reviews, inconsistent online presence, and unmanaged client feedback can damage your real estate brand, reduce trust, and cost you qualified buyers and tenants. In a highly competitive property market, even a few unresolved complaints can influence purchasing and leasing decisions.
            <br />
            <br />
We help real estate businesses protect and strengthen their brand with Online Reputation Management (ORM) solutions. Our services include review monitoring, reputation repair, response management, and brand sentiment analysis across property listing platforms, search engines, and social media. By proactively managing your online image, we help you build credibility, attract high-intent clients, and maintain a strong, trustworthy presence in the real estate market.
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
              src="/AI.png"
              alt="image"
              className="h-full max-h-[560vh] object-contain"
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
          <div className="flex flex-col w-1/2 h-3/4 gap-3 text-white ml-7 mb-10">
            <h2 className="text-3xl font-large mt-10 text-bold">Clutch Proven</h2>
            <p className="text-lg">
              Our extensive healthcare experience, empathy with clients, and ability to
              tackle complex medical projects have earned us the prestigious Top 
              Software Developers Medical and Top IT Services Company Medical 
              designations by Cluctch
            </p>
          </div>
          <div className="w-1/2 flex justify-center">
            <img src="/image.png" alt="image" className="w-40 object-contain" />
          </div>
        </FadeSlideIn>
      </div>
      <div>
        <AIServicesSection />
      </div>
     <div className="flex flex-col md:flex-row bg-[#001437] text-white rounded-xl overflow-hidden max-h-[300px] mx-[300px]">
  {/* Left Image */}
  <div>
    <img
      src="/AI.png"
      alt="Delivery Manager"
      className="w-[400px] h-auto object-cover"
    />
  </div>

  {/* Right Content */}
  <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
    <p className="text-lg leading-relaxed mb-6">
      “Revenue cycle management is a complex process with many nuances. With a deep
      understanding of the healthcare domain and proven expertise in cutting-edge
      technology and software implementation, B2CINC strives to bring
      maximum value to its clients. We lift the technological burden, allowing
      our clients to focus on the business side.”
    </p>

    <div>
      <h3 className="text-2xl font-semibold">Alexey Kozlovsky</h3>
      <p className="text-lg opacity-80">Delivery Manager</p>
    </div>
  </div>
</div>

      <div className="w-8/12 mx-auto">
        {/* <div className="py-16 my-10 px-16 text-white bg-blue-950">
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
                className="w-full bg-transparent pb-5 outline-none border-b my-5"
              />
              <button className="bg-blue-700 text-white w-fit disabled px-10 py-2 hover:bg-blue-900 transition duration-300">
                Next
              </button>
            </form>
          </FadeSlideIn>
        </div> */}

        <FadeSlideIn className="py-10">
          <div className="flex flex-col gap-3 py-10">
            <h5 className="text-sm font-medium">Advantages</h5>
            <h2 className="text-4xl font-large text-bold">Benefits of revenue cycle management software</h2>
            <h6 className="mt-5 text-black-500">Whether you need to build custom RCM solutions or improve existing software, B2CINC<br></br>
              has you covered. We will help you:</h6>
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

        <div className="py-16 my-10 px-16 text-white bg-blue-950">
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
                className="w-[800px] bg-transparent pb-5 outline-none border-b my-5"
              />
              <button className="bg-blue-700 text-white w-fit disabled px-10 py-2 hover:bg-blue-900 transition duration-300">
                Next
              </button>
            </form>
          </FadeSlideIn>
        </div>
      </div>

<div className="w-8/12 mx-auto">
<section className="pt-10">
          <div className="flex flex-col gap-3 py-10">
            <h5 className="text-sm font-medium">INDUSTRIES</h5>
            <h2 className="text-4xl font-medium">Industries we develop for</h2>
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
              Let's discuss your project
            </button>
          </div>
        </section>
        </div>
      <FadeSlideIn>
        <OurProjects />
      </FadeSlideIn>


      <FadeSlideIn className="min-h-screen bg-white text-black p-10 mt-10px ">
        <div className="w-8/12 mx-auto">
          <div className="flex flex-col gap-3 py-10">
            <h5 className="text-sm font-medium">Features</h5>
            <h2 className="text-4xl font-medium">
              We equip your RCM software with essential features
            </h2>
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
        </div>
      </FadeSlideIn>

      <div className="w-8/12 mx-auto">
        {/* <section className="pt-10">
          <div className="flex flex-col gap-3 py-10">
            <h5 className="text-sm font-medium">INDUSTRIES</h5>
            <h2 className="text-4xl font-medium">Industries we develop for</h2>
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
              Let's discuss your project
            </button>
          </div>
        </section> */}

        {/* <section className="py-10 min-h-screen flex justify-center">
          <div className="my-16 text-white flex bg-blue-950 relative w-full">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/X0ZGhcvM0Xs?si=c_yZRBIVaWGKp_43"
              title="hello"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full h-full"
            /> */}

            {/* <video
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover opacity-95"
            >
              <source src="/main-video-mp4.mp4" type="video/mp4" />
            </video> */}
          {/* </div>
        </section> */}

        <div className="w-full bg-[#001437] text-white py-20">
  <div className="w-full mx-auto px-6 md:px-16">
    <p className="uppercase tracking-wide text-gray-300 mb-3">Process</p>
    <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-16">
      Our revenue cycle management software <br /> development process
    </h2>

    {steps.map((step, index) => (
      <div key={index} className="flex gap-6 mb-14 group cursor-pointer">
        {/* Auto Number */}
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 flex items-center justify-center rounded-full border border-blue-500
                          group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
            {index + 1}
          </div>

          {/* Vertical Line */}
          {index !== steps.length - 1 && (
            <div className="h-full w-px bg-blue-500 mt-2"></div>
          )}
        </div>

        {/* Text */}
        <div>
          <h3 className="text-xl font-semibold underline group-hover:text-blue-500 transition-colors duration-300">
            {step.title}
          </h3>
          <p className="mt-2 text-lg text-gray-300">
            {step.description}
          </p>
        </div>
      </div>
    ))}
  </div>
</div>


<div className="w-full mx-auto">
<section className="pt-10">
          <div className="flex flex-col gap-3 py-10">
            <h5 className="text-sm font-medium">Our clients</h5>
            <h2 className="text-4xl font-medium">We build RCM software for various healthcare<br></br>entities</h2>
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
            <button className="bg-blue-600 text-white w-fit disabled px-10 py-2 hover:bg-blue-900 transition duration-300 mx-auto w-300px">
              Conatct us for help
            </button>
          </div>
        </section>
        </div>

        
<div className="px-6 md:px-16 py-20">

  <p className="uppercase tracking-widest text-blue-900 font-semibold mb-3">
    Partners
  </p>

  <h2 className="text-4xl md:text-5xl font-bold mb-16">
    We partner with the best
  </h2>

  <div className="flex items-center gap-20 mt-10">
    <img
      src="/b2clogo.png"
      alt="Microsoft Solutions Partner"
      className="w-64 object-contain"
    />

    <img
      src="/b2clogo.png"
      alt="AWS Partner"
      className="w-48 object-contain"
    />
  </div>
  </div>
        <div className="py-16 px-8 max-h-screen">
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