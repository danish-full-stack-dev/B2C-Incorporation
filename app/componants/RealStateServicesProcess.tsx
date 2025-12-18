"use client";
import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export const RealStateServicesSection: React.FC = () => {
  const [expandedItem, setExpandedItem] = useState<number>(1);
  const [isExpended, setIsExpended] = useState<boolean>(true);

  const marketingProcess = [
    {
      id: 1,
      number: "01",
      title: "Social Media Management (SMM)",
      image: "/smm-realestate.png",
      description:
        "We build your brand authority by showcasing high-end property walkthroughs and neighborhood spotlights. Our 2025 strategy focuses on vertical video (Reels/TikTok) to capture the attention of modern homebuyers.",
    },
    {
      id: 2,
      number: "02",
      title: "Paid Ads (Facebook, Google, LinkedIn)",
      image: "/paid-ads.png",
      description:
        "We drive immediate bookings and leads. We use Google Ads for high-intent searches (luxury condos in Dubai) and Facebook/LinkedIn for hyper-targeted demographic ads based on income and investment behavior.",
    },
    {
      id: 3,
      number: "03",
      title: "SEO & Content Strategy",
      image: "/seo-strategy.png",
      description:
        "Our SEO ensures your platform ranks for 'invisible' keywords. We create long-form guides on real estate investment and market trends to capture organic traffic from serious investors and first-time buyers.",
    },
    {
      id: 4,
      number: "04",
      title: "Email Marketing & Automation",
      image: "/email-automation.png",
      description:
        "We nurture leads into bookings. Using automated workflows, we send personalized property recommendations based on user browsing history, ensuring your platform stays top-of-mind during the long buying cycle.",
    },
    {
      id: 5,
      number: "05",
      title: "Influencer & Community Marketing",
      image: "/influencer.png",
      description:
        "We partner with lifestyle influencers and local community leaders to provide authentic property reviews, building a level of trust that traditional advertising cannot achieve in the real estate market.",
    },
    {
      id: 6,
      number: "06",
      title: "Funnel Building & Conversion Optimization",
      image: "/funnel-optimization.png",
      description:
        "We streamline the path from 'just looking' to 'booked viewing.' By optimizing landing pages and simplifying lead forms, we reduce friction and maximize the ROI of every dollar spent on traffic.",
    },
    {
      id: 7,
      number: "07",
      title: "Performance Analytics & Reporting",
      image: "/analytics.png",
      description:
        "Transparency is key. We provide 2025 real-time dashboards tracking Cost Per Lead (CPL) and Booking Conversion Rates, allowing us to scale the winning campaigns and cut the underperforming ones.",
    },
  ];

  const [selectedImage, setSelectedImage] = useState<string>(
    marketingProcess[0].image
  );

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <p className="text-sm text-gray-500 uppercase tracking-wider mb-4">
            SERVICES
          </p>
          <div className="grid grid-cols-2 gap-12">
            <h2 className="text-4xl font-bold text-gray-900">
              Our real state services
            </h2>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-2 gap-12 items-start">
          {/* Left Column - Services List */}
          <div className="space-y-8">
            {marketingProcess.map((service) => (
              <div
                key={service.id}
                className="border-t border-gray-200 pt-6 cursor-pointer group"
                onClick={() => {
                  setExpandedItem(service.id);
                  setSelectedImage(service.image);
                  expandedItem === service.id
                    ? setIsExpended((prev) => !prev)
                    : setIsExpended(true);
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    <span className="text-blue-600 font-semibold text-lg">
                      {service.number}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition">
                      {service.title}
                    </h3>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-blue-600 opacity-0 group-hover:opacity-100 transition" />
                </div>
                <div
                  className={`
                            ml-12 
                            transition-all duration-300 
                            overflow-hidden
                            ${
                              isExpended && expandedItem === service.id
                                ? "opacity-100 max-h-96"
                                : "opacity-0 max-h-0 pointer-events-none"
                            }
                            `}
                >
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Sticky Image */}
          <div className="sticky top-0">
            <div className="relative w-full h-screen rounded-lg overflow-hidden">
              <img
                src={selectedImage}
                alt="AI Technology"
                className="w-full h-full object-cover"
              />
              {/* Overlay effect */}
              <div className="absolute inset-0 bg-linear-to-br from-blue-500/20 to-cyan-500/20"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
