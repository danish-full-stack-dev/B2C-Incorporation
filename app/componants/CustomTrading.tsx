
"use client";
import React, { useState } from "react";

export default function SolutionsSection() {
  const solutions = [
    {
      id: "01",
      title: "Financial trading solutions",
      description: [
      "Financial solutions go hand in hand with electronic trading software. We offer the following financial trading software: liquidity, fixed income, order matching, and spread trading systems. We also deliver payment gateway systems, high-frequency trading software development, financial data visualization apps, and accounting software for traders."
      ],
    },
    {
      id: "02",
      title: "Automated trading software",
      description: [
       "Algorithmic trading software is widely used to get, filter, and process market data and execute automated actions, such as position closing and order placing. We provide custom trading software development services, including trading robot development, that render auto trading support, help automate strategies, and implement the most recent algorithms for forecasting.",
      ],
    },
     {
      id: "03",
      title: "Mobile trading apps",
      description: [
        "Trading mobile applications are becoming increasingly popular as they help traders stay connected and respond to the latest industry changes promptly, keep abreast of current market events, and have permanent access to financial accounts. At EffectiveSoft, we know how to develop robust apps for all mobile platforms. Such mobile trading applications aid traders in managing their activities, including trading on the go. We possess all the necessary expertise for efficient mobile trading app development..",
      ],
    },
     {
      id: "04",
      title: "Analytical solutions",
      description: [
        "Being reliable trading software developers, we deliver custom analytical solutions that empower traders to keep up to date with all the processes inside their platforms. Our team provides technical analysis software and visualization, including trading charting software and footprints, assists in planning and risk management, and allows making informed forecasts and considered decisions..",
      ],
    },
     {
      id: "05",
      title: "Software security",
      description: [
        "We understand that complete security and confidentiality of trading operations is a must and pay much attention to the development of software that ensures secure transactions. Our seasoned trading platform developers put much time and effort into delivering highly productive, secure, multi-functional, and scalable trading systems that streamline core operations without risking a dime.",
      ],
    },

  ];

  return (
    <section className="bg-white text-slate-900">
      <div className="max-w-6xl mx-auto px-6 py-24">
        {/* Header */}
        <div className="mb-20">
          <p className="text-xs font-semibold tracking-widest text-slate-500 uppercase mb-4">
            Solutions
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Custom trading software development
          </h2>
          <p className="max-w-2xl text-slate-600 text-lg">
            With more than two-decade experience under our belts, we have become
            specialists in the development of custom trading software.
          </p>
        </div>

        {/* Solutions List */}
        <div className="space-y-20">
          {solutions.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-1 md:grid-cols-3 gap-10"
            >
              <div className="flex gap-6">
                <span className="text-blue-600 font-medium">
                  {item.id}
                </span>
                <h3 className="text-2xl font-semibold leading-snug">
                  {item.title}
                </h3>
              </div>

              <div className="md:col-span-2 text-slate-600 leading-relaxed">
                {item.description.map((text, index) => (
                  <p key={index} className={index > 0 ? "mt-4" : ""}>
                    {text}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
