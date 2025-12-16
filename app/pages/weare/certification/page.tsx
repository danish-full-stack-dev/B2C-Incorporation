"use client";
import React from "react";
import Image from "next/image";

export default function Certification() {
  return (
    <>
      <section className="w-full py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="max-w-xl mt-14">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Our proven expertise<span className="text-blue-600">.</span>
              </h2>

              <p className="mt-8 text-xl text-gray-600 leading-relaxed">
                Here you can find the recognized accomplishments and certifications obtained by EffectiveSoft,
                affirming our expertise, adherence to industry standards, and commitment to excellence.
              </p>

              <p className="mt-6 text-xl text-gray-600 leading-relaxed">
                Explore our collection of certificates, which serve as tangible evidence
                of our dedication to delivering high-quality IT solutions and instill trust
                in potential clients and partners.
              </p>
            </div>

            <div className="w-full">
              <div className="grid grid-cols-3 gap-0 max-w-2xl ml-auto">
                <div className="aspect-[1/0.8] relative overflow-hidden">
                  <div className="absolute inset-0 flex items-end">
                    <div className="w-full h-full bg-blue-600 rounded-t-full"></div>
                  </div>
                </div>
                <div className="aspect-[1/0.8] relative overflow-hidden">
                  <div className="absolute inset-0 flex items-end">
                    <div className="w-full h-full bg-blue-200 rounded-t-full"></div>
                  </div>
                </div>

                <div className="aspect-[1/0.8] relative overflow-hidden rounded-full">
                  <img
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                    alt="Conference room"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="col-span-3 grid grid-cols-3 gap-0">
                  <div className="col-span-2 aspect-[2/0.8] relative overflow-hidden rounded-[12%]">
                    <img
                      src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&q=80"
                      alt="Business team"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="aspect-[1/0.8] relative overflow-hidden rounded-full">
                    <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600"></div>
                  </div>
                </div>

                <div className="aspect-[1/0.8] relative overflow-hidden">
                  <div className="absolute inset-0 flex items-start">
                    <div className="w-full h-full bg-blue-200 rounded-b-full"></div>
                  </div>
                </div>

                <div className="aspect-[1/0.8] relative overflow-hidden rounded-full">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                    alt="Woman presenting"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="aspect-[1/0.8] relative overflow-hidden">
                  <div className="w-full h-full flex gap-2">
                    <div className="flex-1 relative">
                      <div className="absolute inset-0 flex items-start">
                        <div className="w-full h-full bg-lime-400 rounded-b-full"></div>
                      </div>
                    </div>
                    <div className="flex-1 relative">
                      <div className="absolute inset-0 flex items-start">
                        <div className="w-full h-full bg-lime-400 rounded-b-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 lg:py-24 bg-gray-50 ">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Company level
              </h2>

              <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-3xl">
                We hold a range of certifications that highlight our commitment to excellence and industry standards.
                These certifications validate our ability to deliver high-quality products and services and showcase our
                dedication to continuous improvement.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-lg p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                  <div className="w-24 h-24 mb-6 flex items-center justify-center">
                    <img
                      src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=200&q=80"
                      alt="ISO Certification"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    ISO/IEC 27001:2022 (B2C Corp.)
                  </h3>
                  <p className="text-gray-600 text-sm">
                    CERT International
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                  <div className="w-24 h-24 mb-6 flex items-center justify-center">
                    <img
                      src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=200&q=80"
                      alt="ISO Certification"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    ISO/IEC 27001:2022 (B2C Poland)
                  </h3>
                  <p className="text-gray-600 text-sm">
                    CERT International
                  </p>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                  <div className="w-24 h-24 mb-6 flex items-center justify-center">
                    <img
                      src="https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=200&q=80"
                      alt="Microsoft Partner"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Microsoft Solutions Partner Digital & App Innovation
                  </h3>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                  <div className="w-24 h-24 mb-6 flex items-center justify-center">
                    <img
                      src="https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=200&q=80"
                      alt="Microsoft Partner"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Microsoft Solutions Partner Data & AI
                  </h3>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                  <div className="w-24 h-24 mb-6 flex items-center justify-center">
                    <img
                      src="https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=200&q=80"
                      alt="AWS Partner"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    AWS Partner
                  </h3>
                </div>

                <div className="bg-white border border-gray-200 rounded-lg p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                  <div className="w-24 h-24 mb-6 flex items-center justify-center">
                    <img
                      src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80"
                      alt="Oracle Partner"
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    Oracle Partner
                  </h3>
                </div>
              </div>

              <div id="certificates-compliance" className="mt-20">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Certificates of compliance
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-3xl">
                  Our certificates of compliance demonstrate our adherence to regulatory requirements and industry best practices, 
                  ensuring the highest standards of quality and security in our operations.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                    <div className="w-24 h-24 mb-6 flex items-center justify-center">
                      <img
                        src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=200&q=80"
                        alt="Compliance Certificate"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      GDPR Compliance
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Data Protection Certification
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                    <div className="w-24 h-24 mb-6 flex items-center justify-center">
                      <img
                        src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=200&q=80"
                        alt="Compliance Certificate"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      SOC 2 Type II
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Security & Availability
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                    <div className="w-24 h-24 mb-6 flex items-center justify-center">
                      <img
                        src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=200&q=80"
                        alt="Compliance Certificate"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      HIPAA Compliance
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Healthcare Data Security
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                    <div className="w-24 h-24 mb-6 flex items-center justify-center">
                      <img
                        src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=200&q=80"
                        alt="Compliance Certificate"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      PCI DSS
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Payment Card Industry
                    </p>
                  </div>
                </div>
              </div>

              <div id="personal-certificates" className="mt-20">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Personal employee certificates
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-3xl">
                  Our team members hold numerous professional certifications that validate their expertise 
                  and commitment to continuous learning in their respective fields.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                    <div className="w-24 h-24 mb-6 flex items-center justify-center">
                      <img
                        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200&q=80"
                        alt="AWS Certification"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      AWS Certified Solutions Architect
                    </h3>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                    <div className="w-24 h-24 mb-6 flex items-center justify-center">
                      <img
                        src="https://images.unsplash.com/photo-1633419461186-7d40a38105ec?w=200&q=80"
                        alt="Azure Certification"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Microsoft Azure Administrator
                    </h3>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                    <div className="w-24 h-24 mb-6 flex items-center justify-center">
                      <img
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&q=80"
                        alt="Google Cloud Certification"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Google Cloud Professional
                    </h3>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                    <div className="w-24 h-24 mb-6 flex items-center justify-center">
                      <img
                        src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=200&q=80"
                        alt="Scrum Certification"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Certified Scrum Master
                    </h3>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                    <div className="w-24 h-24 mb-6 flex items-center justify-center">
                      <img
                        src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200&q=80"
                        alt="PMP Certification"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Project Management Professional
                    </h3>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                    <div className="w-24 h-24 mb-6 flex items-center justify-center">
                      <img
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&q=80"
                        alt="DevOps Certification"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Certified DevOps Engineer
                    </h3>
                  </div>
                </div>
              </div>

              <div id="industry-recognition" className="mt-20">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Industry recognition
                </h2>

                <p className="text-gray-600 text-lg leading-relaxed mb-12 max-w-3xl">
                  We are proud to be recognized by leading industry organizations and publications for our 
                  innovative solutions and commitment to excellence in software development.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                    <div className="w-24 h-24 mb-6 flex items-center justify-center">
                      <img
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&q=80"
                        alt="Industry Award"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Top Software Development Company 2024
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Clutch
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                    <div className="w-24 h-24 mb-6 flex items-center justify-center">
                      <img
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&q=80"
                        alt="Industry Award"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Best Enterprise Software Solution
                    </h3>
                    <p className="text-gray-600 text-sm">
                      TechReview
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                    <div className="w-24 h-24 mb-6 flex items-center justify-center">
                      <img
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&q=80"
                        alt="Industry Award"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Innovation Award in AI & ML
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Tech Innovation Awards
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg p-8 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
                    <div className="w-24 h-24 mb-6 flex items-center justify-center">
                      <img
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&q=80"
                        alt="Industry Award"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                      Great Place to Work Certified
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Great Place to Work Institute
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4">
              <nav className="bg-white border border-gray-200 rounded-lg p-6 sticky top-6">
                <ul className="space-y-4">
                  <li>
                    <a
                      href="#company-level"
                      className="text-gray-900 font-medium hover:text-blue-600 transition-colors flex items-center border-l-4 border-blue-600 pl-4 py-2"
                    >
                      Company level
                    </a>
                  </li>
                  <li>
                    <a
                      href="#certificates-compliance"
                      className="text-gray-600 hover:text-blue-600 transition-colors flex items-center border-l-4 border-transparent pl-4 py-2 hover:border-gray-300"
                    >
                      Certificates of compliance
                    </a>
                  </li>
                  <li>
                    <a
                      href="#personal-certificates"
                      className="text-gray-600 hover:text-blue-600 transition-colors flex items-center border-l-4 border-transparent pl-4 py-2 hover:border-gray-300"
                    >
                      Personal employee certificates
                    </a>
                  </li>
                  <li>
                    <a
                      href="#industry-recognition"
                      className="text-gray-600 hover:text-blue-600 transition-colors flex items-center border-l-4 border-transparent pl-4 py-2 hover:border-gray-300"
                    >
                      Industry recognition
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
