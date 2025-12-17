"use client";
import React, { useState } from "react";
import Image from "next/image";

const expertsData = [
  {
    id: 1,
    name: "Vg",
    title: "Business Analyst",
    image: "AI.png",
    category: "Business intelligence",
  },
  {
    id: 2,
    name: "Ap",
    title: "Senior Developer",
    image: "AI.png",
    category: "DevOps",
  },
  {
    id: 3,
    name: "M",
    title: "UX Designer",
    image: "AI.png",
    category: "Design",
  },
  {
    id: 4,
    name: "D",
    title: "AI Specialist",
    image: "AI.png",
    category: "Artificial intelligence",
  },
  {
    id: 5,
    name: "S",
    title: "Security Expert",
    image: "AI.png",
    category: "Information security",
  },
  {
    id: 6,
    name: "M",
    title: "Mobile Developer",
    image: "AI.png",
    category: "Mobile",
  },
  {
    id: 7,
    name: "E",
    title: "QA Engineer",
    image: "AI.png",
    category: "Quality Assurance",
  },
  {
    id: 8,
    name: "J",
    title: "Healthcare IT Consultant",
    image: "AI.png",
    category: "Healthcare",
  },
  {
    id: 9,
    name: "O",
    title: "Data Analyst",
    image: "AI.png",
    category: "Business intelligence",
  },
  {
    id: 10,
    name: "D",
    title: "Trading Systems Developer",
    image: "AI.png",
    category: "Trading",
  },
  {
    id: 11,
    name: "S",
    title: "AI Research Engineer",
    image: "AI.png",
    category: "Artificial intelligence",
  },
  {
    id: 12,
    name: "Robert White",
    title: "Cloud Architect",
    image: "AI.png",
    category: "DevOps",
  },
  {
    id: 13,
    name: "Lisa Garcia",
    title: "Product Designer",
    image: "AI.png",
    category: "Design",
  },
  {
    id: 14,
    name: "Thomas Moore",
    title: "Cybersecurity Analyst",
    image: "AI.png",
    category: "Information security",
  },
  {
    id: 15,
    name: "Jennifer Lee",
    title: "iOS Developer",
    image: "AI.png",
    category: "Mobile",
  },
  {
    id: 16,
    name: "Christopher Davis",
    title: "Test Automation Lead",
    image: "AI.png",
    category: "Quality Assurance",
  },
];

const categories = [
  "All",
  "Artificial intelligence",
  "Web Development",
  "Design",
  "Graphic Designing",
  "SEO",
  "Content Writer",
  "Mobile Application Development",
  "Data Analytics",
  "Trading",
];

export default function CompanyExperts() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(8);

  const filteredExperts =
    selectedCategory === "All"
      ? expertsData
      : expertsData.filter((expert) => expert.category === selectedCategory);

  const displayedExperts = filteredExperts.slice(0, visibleCount);

  const hasMore = visibleCount < filteredExperts.length;

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 8);
  };

 const handleCategoryChange = (category: string) => {
  setSelectedCategory(category);
  setVisibleCount(8);
};


  return (
    <section className="w-full py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-9">
            <h2 className="text-2xl lg:text-5xl font-bold text-gray-900 mb-16 leading-tight mt-16">
              Our company's
              <br />
              experts<span className="text-blue-600">.</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayedExperts.map((expert) => (
                <div
                  key={expert.id}
                  className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  <div className="aspect-[4/5] relative overflow-hidden bg-gray-100">
                    <img
                      src={expert.image}
                      alt={expert.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {expert.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{expert.title}</p>
                  </div>
                </div>
              ))}
            </div>

            {hasMore && (
              <div className="flex justify-center mt-12">
                <button
                  onClick={handleLoadMore}
                  className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Load More
                </button>
              </div>
            )}
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white border border-gray-200 rounded-lg p-6 sticky top-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                Categories
              </h3>

              <ul className="space-y-3">
                {categories.map((category) => (
                  <li key={category}>
                    <button
                      onClick={() => handleCategoryChange(category)}
                      className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                        selectedCategory === category
                          ? "text-blue-600 bg-blue-50 border-l-4 border-blue-600"
                          : "text-gray-600 hover:text-blue-600 hover:bg-gray-50 border-l-4 border-transparent"
                      }`}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
