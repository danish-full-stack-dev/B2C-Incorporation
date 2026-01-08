import React from "react";

const TechnicalExpertise: React.FC = () => {
  return (
    <section className="">
      <section className="flex items-center bg-[#00091f] h-80">
        <div className="flex md:flex-row flex-col  text-white md:gap-0 gap-3 md:p-0 p-5">
          <div className="md:w-1/3 font-sans font-bold flex md:justify-center justify-start">
            <h2 className="text-xl md:text-2xl">
              TECHNICAL EXPERTISES
            </h2>
          </div>
          <div className="md:w-3/4 flex justify-center">
            <p className="md:w-8/12 md:text-xl text-sm font-sans">
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
      <section className="md:relative flex flex-col bg-[#00091f] py-20 font-sans text-white">
        <div className="flex flex-col justify-center md:items-center items-center">
          <div className="font-sans flex md:justify-start justify-center font-bold md:text-4xl text-xl md:my-20 my-10 md:w-10/12 w-11/12 px-5">
            <h4 className="captalize">B2C INC. SUCCESS STATS</h4>
          </div>
          <div className="grid md:grid-cols-4 md:grid-flow-col grid-flow-row md:w-9/12 px-5 md:gap-0 gap-5">
            {[
              { header: "WE WORK SINCE", value: "2024" },
              { header: "LOCATION WORLDWIDE", value: "02" },
              { header: "ON-GOING CLIENTS", value: "200+" },
              { header: "SERVED CLIENTS", value: "1000+" },
            ].map((v, idx) => (
              <div
                key={idx}
                className="px-5 flex flex-col justify-around md:h-52 h-32 border-2 border-white hover:bg-blue-800 transition-colors duration-150 ease-in-out"
              >
                <p className="py-2 font-medium md:text-base text-sm">
                  {v.header}
                </p>
                <h1 className="md:text-[80px] text-[60px] font-sans font-bold">
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
