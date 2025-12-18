import React from "react";

const TechnicalExpertise: React.FC = () => {
  return (
    <section className="">
      {/* Hero Section */}
      <section className="flex items-center bg-[#00091f] min-h-[320px] sm:min-h-[400px] lg:h-80 py-8 sm:py-12 lg:py-0">
        <div className="flex flex-col lg:flex-row text-white w-full px-4 sm:px-6 lg:px-8 gap-6 lg:gap-0">
          {/* Title */}
          <div className="w-full lg:w-1/3 font-sans font-medium flex justify-center lg:justify-center items-center">
            <h4 className="text-sm sm:text-base lg:text-lg tracking-wider text-center lg:text-left">
              TECHNICAL EXPERTISE
            </h4>
          </div>
          
          {/* Description */}
          <div className="w-full lg:w-3/4 flex justify-center items-center">
            <p className="w-full sm:w-10/12 lg:w-8/12 text-base sm:text-lg lg:text-2xl font-sans text-center lg:text-left leading-relaxed">
              B2C INC. combines expertise in AI, blockchain, data analytics,
              automation, fintech, trading platforms, design, digital marketing,
              app & web development, and ORM to build robust digital systems
              that drive innovation and operational excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Award Image Section */}
      <section className="flex flex-col w-full">
        <img
          src="award__2.png"
          alt="bg award image"
          className="w-full h-auto object-cover"
        />
      </section>

      {/* Success Stats Section */}
      <section className="relative flex flex-col bg-[#00091f] py-12 sm:py-16 lg:py-20 font-sans text-white">
        <div className="flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
          {/* Section Heading */}
          <div className="font-sans flex justify-start font-medium text-2xl sm:text-3xl lg:text-4xl my-8 sm:my-12 lg:my-20 w-full sm:w-11/12 lg:w-9/12 px-0 sm:px-5">
            <h4 className="capitalize">B2C INC. SUCCESS STATS</h4>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full sm:w-11/12 lg:w-9/12 gap-4 sm:gap-0">
            {[
              { header: "WE WORK SINCE", value: "2024" },
              { header: "LOCATION WORLDWIDE", value: "02" },
              { header: "ON-GOING CLIENTS", value: "200+" },
              { header: "SERVED CLIENTS", value: "1000+" },
            ].map((v, idx) => (
              <div
                key={idx}
                className="px-4 sm:px-5 flex flex-col justify-around h-40 sm:h-44 lg:h-52 border-2 border-white hover:bg-blue-800 transition-colors duration-150 ease-in-out cursor-pointer"
              >
                <p className="py-2 font-medium text-xs sm:text-sm lg:text-base tracking-wide">
                  {v.header}
                </p>
                <h1 className="text-5xl sm:text-6xl lg:text-[80px] font-sans font-bold">
                  {v.value}
                </h1>
              </div>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};

export default TechnicalExpertise;
