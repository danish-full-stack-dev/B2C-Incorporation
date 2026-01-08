"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { jobs } from "@/app/data/jobs";
import Image from "next/image";

export default function CareersPage() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");

  const [filteredJobs, setFilteredJobs] = useState(jobs.slice(0, 9));

  const handleSearch = () => {
    if (!search.trim() && !location && !category) {
      setFilteredJobs(jobs.slice(0, 9));
      return;
    }

    const results = jobs.filter((job) => {
      const titleMatch = job.title
        .toLowerCase()
        .includes(search.trim().toLowerCase());

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
              <span className="font-medium">bcd.media@gmail.com</span>.
            </p>

            <div>
              <button className="bg-blue-600 hover:bg-blue-700 transition px-8 py-3 rounded text-white font-medium">
                Write to us
              </button>
            </div>
          </div>
      const locationMatch =
        location === "" ||
        job.location.toLowerCase().includes(location.toLowerCase());

      const categoryMatch = category === "" || job.category === category;

      return titleMatch && locationMatch && categoryMatch;
    });

    setFilteredJobs(results);
  };

  return (
    <>
      <section className="relative pt-32 h-screen w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/carrers.mp.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 " />

        <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
          <h1 className="max-w-4xl text-3xl font-semibold leading-tight text-white md:text-5xl">
            Invest in your career, <span className="text-blue-500">Grow</span>
            <br />
            with tech’s top talent.
          </h1>
          <div className="mt-10 w-full max-w-6xl">
            <div className="flex flex-col overflow-hidden rounded-md bg-white shadow-lg md:flex-row">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for a job title"
                className="flex-1 px-4 py-4 text-sm outline-none"
              />

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="px-4 py-4 text-sm md:w-64 border-t md:border-t-0 md:border-l"
              >
                <option value="">All Categories</option>
                <option value="Engineering">Engineering</option>
                <option value="Marketing">Marketing</option>
                <option value="Sales">Sales</option>
                <option value="Finance">Finance</option>
                <option value="Operations">Operations</option>
                <option value="Internship">Internship</option>
              </select>

              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="px-4 py-4 text-sm md:w-64 border-t md:border-t-0 md:border-l"
              >
                <option value="">All Locations</option>
                <option value="Lahore">Wazirabad</option>
                <option value="Dubai">Dubai</option>
                <option value="Remote">Remote</option>
              </select>

              <button
                onClick={handleSearch}
                className="bg-blue-600 px-8 py-4 text-sm font-medium text-white transition hover:bg-blue-700"
              >
                Search Jobs
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          {filteredJobs.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center">
              <Image src="/mg.png" alt="Hero Image" width={100} height={100} />
              <h3 className="text-5xl font-bold text-gray-800">
                There are no vacancies right now…
              </h3>
              <p className="mt-3 text-lg text-gray-500">
                Keep an eye on our openings or send us your resume for future
                opportunities.
              </p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredJobs.map((job) => (
                  <div
                    key={job.id}
                    className="group min-h-[160px] rounded-lg border border-gray-200 bg-white p-6 transition hover:border-blue-500 hover:shadow-md cursor-pointer"
                  >
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-semibold text-gray-900 text-lg">
                          {job.title}
                        </h3>
                        <p className="mt-3 text-sm text-gray-500">
                          {job.location}
                        </p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-blue-600 transition group-hover:translate-x-1" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-16 flex justify-center">
                <Link
                  href="/pages/weare/leadership/carrers/jobs"
                  className="rounded-md bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700"
                >
                  See all {jobs.length} job roles
                </Link>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
}
