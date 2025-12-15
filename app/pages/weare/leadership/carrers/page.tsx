"use client";

import Image from "next/image";

export default function CareersPage() {
  return (
    <main className="w-full bg-white text-gray-900">

      <section className="w-full py-16 text-center">
        <h1 className="text-3xl md:text-5xl font-semibold mt-16">
          Find your dream job <br />
          at <span className="text-blue-600">B2C.</span>
        </h1>
      </section>

      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 text-start">
        <h1 className="text-3xl md:text-4xl font-semibold mb-6 mt-10">
          Start doing work that matters
        </h1>
        <p className="text-gray-500 max-w-2xl text-lg">
          Our philosophy is simple—hire a team of diverse, passionate people and
          foster a culture that empowers you to do your best work.
        </p>
      </section>

      <section className="w-full py-24 flex flex-col items-center text-center">
        <div className="relative w-32 h-32 mb-10">
          <div className="absolute inset-0 rounded-full bg-blue-50" />
          <div className="absolute inset-4 rounded-full bg-blue-100" />
          <div className="absolute inset-8 rounded-full bg-white flex items-center justify-center shadow">
            <Image
              src="/mg.png"
              alt="Search"
              width={120}
              height={100}
            />
          </div>
        </div>

        <h3 className="text-3xl md:text-4xl font-semibold mb-4">
          It looks like there are no vacancies right now...
        </h3>
        <p className="text-gray-500 max-w-md text-lg">
          Keep an eye on our openings or send us your resume for future
          opportunities.
        </p>
      </section>
      
     <section className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-b from-[#031433] to-[#02102A] px-12 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Left Side - Text Content */}
          <div className="flex flex-col justify-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-6">
              <span className="inline-block bg-blue-600 px-3 py-1 mb-2">DIDN'T FIND</span><br />
              <span className="inline-block bg-blue-600 px-3 py-1">A SUITABLE VACANCY?</span>
            </h2>

            <p className="text-blue-100 max-w-md mb-8 leading-relaxed">
              Even if you haven't found a suitable position listed at the moment,
              we encourage you to submit your resume through our online form or via e‑mail
              <br />
              <span className="font-medium">bcd.media.com</span>.
            </p>

            <div>
              <button className="bg-blue-600 hover:bg-blue-700 transition px-8 py-3 rounded text-white font-medium">
                Write to us
              </button>
            </div>
          </div>

          <div className="relative h-[400px] lg:h-[450px]">
            
            <div className="absolute top-0 left-0 w-44 h-48 rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
                alt="Professional woman"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute top-0 right-0 w-48 h-48 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-400" />

            <div className="absolute bottom-0 right-0 w-44 h-48 rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
                alt="Person working on laptop"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute bottom-0 left-0 flex gap-3">
              <div className="w-20 h-44 border-2 border-blue-400 rounded-l-full" />
              <div className="w-20 h-44 border-2 border-blue-400 rounded-l-full" />
            </div>

            <div className="absolute top-2 left-6 w-2 h-2 bg-blue-500 rounded-full" />

          </div>
        </div>
      </div>
    </section>
    </main>
  );
}
