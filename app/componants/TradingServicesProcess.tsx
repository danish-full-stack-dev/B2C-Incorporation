"use client";
import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export const TradingServicesSection: React.FC = () => {
  const [expandedItem, setExpandedItem] = useState<number>(1);
  const [isExpended, setIsExpended] = useState<boolean>(true);

  const tradingServices = [
  {
    id: 1,
    number: "01",
    title: "Market Research & Trade Strategy",
    image: "/market-research.png",
    description:
      "We analyze global markets using technical, fundamental, and sentiment analysis. Our trading strategies are designed to identify high-probability setups across stocks, forex, crypto, and commodities.",
  },
  {
    id: 2,
    number: "02",
    title: "Active Trading & Execution",
    image: "/trade-execution.png",
    description:
      "We execute precision trades using data-driven signals and disciplined risk management. Our approach focuses on optimal entries, controlled position sizing, and smart exits to protect capital.",
  },
  {
    id: 3,
    number: "03",
    title: "Algorithmic & Automated Trading",
    image: "/algo-trading.png",
    description:
      "We build and deploy automated trading systems that remove emotional bias. These algorithms scan markets 24/7, execute trades at scale, and adapt to changing market conditions.",
  },
  {
    id: 4,
    number: "04",
    title: "Risk Management & Portfolio Allocation",
    image: "/risk-management.png",
    description:
      "Capital protection is our priority. We implement stop-loss strategies, diversification models, and portfolio balancing to minimize drawdowns while maximizing long-term returns.",
  },
  {
    id: 5,
    number: "05",
    title: "Signals, Insights & Trade Alerts",
    image: "/trading-signals.png",
    description:
      "We deliver real-time trading signals, market insights, and trade alerts. Each signal is backed by analysis, clear entry levels, targets, and defined risk parameters.",
  },
  {
    id: 6,
    number: "06",
    title: "Performance Optimization & Scaling",
    image: "/performance-optimization.png",
    description:
      "We continuously refine strategies by analyzing win rates, risk-to-reward ratios, and drawdowns. Profitable systems are scaled while underperforming setups are eliminated.",
  },
  {
    id: 7,
    number: "07",
    title: "Analytics, Reporting & Transparency",
    image: "/trading-analytics.png",
    description:
      "We provide transparent performance reports and real-time dashboards. Track P&L, risk exposure, and strategy performance with full visibility and institutional-grade reporting.",
  },
];


  const [selectedImage, setSelectedImage] = useState<string>(
    tradingServices[0].image
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
              Our trading services
            </h2>
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-2 gap-12 items-start">
          {/* Left Column - Services List */}
          <div className="space-y-8">
            {tradingServices.map((service) => (
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
