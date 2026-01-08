"use client";

import { useState } from "react";
import { ArrowRight, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { jobs } from "@/app/data/jobs";

const JOBS_PER_PAGE = 9;

export default function JobOpeningsPage() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [currentPage, setCurrentPage] = useState(1);

  const handleSearch = () => {
    setCurrentPage(1);

    if (!search.trim() && !location && !category) {
      setFilteredJobs(jobs);
      return;
    }

    const results = jobs.filter((job) => {
      const titleMatch = job.title
        .toLowerCase()
        .includes(search.trim().toLowerCase());

      const locationMatch =
        location === "" ||
        job.location.toLowerCase().includes(location.toLowerCase());

      const categoryMatch = category === "" || job.category === category;

      return titleMatch && locationMatch && categoryMatch;
    });

    setFilteredJobs(results);
  };

  const totalPages = Math.ceil(filteredJobs.length / JOBS_PER_PAGE);
  const startIndex = (currentPage - 1) * JOBS_PER_PAGE;
  const currentJobs = filteredJobs.slice(
    startIndex,
    startIndex + JOBS_PER_PAGE
  );

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="mb-10 mt-10 text-4xl font-bold text-gray-900">
          Job Openings
        </h1>

        <div className="mb-10 max-w-7xl">
          <div className="flex flex-col overflow-hidden rounded-md border md:flex-row">
            <div className="flex flex-1 items-center gap-3 border-b px-4 py-3 md:border-b-0 md:border-r">
              <Search className="h-5 w-5 text-blue-600" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for a job title"
                className="w-full text-sm outline-none"
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
            </div>

            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="px-4 py-3 text-sm md:w-60"
            >
              <option value="">All Locations</option>
              <option value="Lahore">Lahore</option>
              <option value="Dubai">Dubai</option>
              <option value="Remote">Remote</option>
            </select>

            <button
              onClick={handleSearch}
              className="bg-blue-600 px-6 py-3 text-sm font-medium text-white hover:bg-blue-700"
            >
              Search Jobs
            </button>
          </div>
        </div>

        <p className="mb-6 text-sm text-gray-600">
          <span className="font-bold font-lg">Result: </span>
          <span className="font-medium">{filteredJobs.length}</span> vacancies
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {currentJobs.map((job) => (
            <div
              key={job.id}
              className=" min-h-[150px] group rounded-lg border border-gray-200 bg-white p-6 transition hover:border-blue-500 hover:shadow-md"
            >
              <div className="flex justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">{job.title}</h3>
                  <p className="mt-2 text-sm text-gray-500">{job.location}</p>
                </div>
                <ArrowRight className="h-5 w-5 text-blue-600 transition group-hover:translate-x-1" />
              </div>
            </div>
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-12 flex justify-end">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
                disabled={currentPage === 1}
                className="flex h-9 w-9 items-center justify-center rounded border disabled:opacity-40"
              >
                <ChevronLeft size={16} />
              </button>

              {Array.from({ length: totalPages }).map((_, i) => {
                const page = i + 1;
                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`h-9 w-9 rounded border text-sm font-medium
                      ${
                        currentPage === page
                          ? "bg-blue-600 text-white border-blue-600"
                          : "border-gray-300 hover:bg-gray-100"
                      }`}
                  >
                    {page}
                  </button>
                );
              })}

              <button
                onClick={() =>
                  setCurrentPage((p) => Math.min(p + 1, totalPages))
                }
                disabled={currentPage === totalPages}
                className="flex h-9 w-9 items-center justify-center rounded border disabled:opacity-40"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
