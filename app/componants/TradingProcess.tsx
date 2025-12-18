// app/components/WorkProcess.jsx

export default function TradingProcess() {
  const steps = [
  {
    number: 1,
    title: "Trading Goals & Risk Assessment",
    desc: "We understand your trading objectives, risk appetite, capital allocation, and preferred markets (stocks, forex, crypto, commodities) to define a clear trading framework."
  },
  {
    number: 2,
    title: "Strategy Design & Market Analysis",
    desc: "We design data-driven trading strategies using technical, fundamental, and sentiment analysis, tailored to current market conditions and your investment horizon."
  },
  {
    number: 3,
    title: "Strategy Implementation",
    desc: "Our team executes the strategy manually or via automated systems, applying disciplined entries, exits, and position sizing aligned with the defined risk model."
  },
  {
    number: 4,
    title: "Live Monitoring & Optimization",
    desc: "We continuously monitor trades and market movements, making real-time adjustments to optimize performance and manage volatility."
  },
  {
    number: 5,
    title: "Backtesting & Risk Validation",
    desc: "Each strategy is rigorously tested against historical data and live conditions to validate performance, drawdowns, and consistency."
  },
  {
    number: 6,
    title: "Deployment & Scaling",
    desc: "Proven strategies are deployed at scale with controlled exposure, ensuring smooth execution and sustainable growth."
  },
  {
    number: 7,
    title: "Ongoing Reporting & Support",
    desc: "We provide transparent performance reports, risk metrics, and continuous support to refine strategies and adapt to evolving market conditions."
  }
];


  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      <p className="text-sm font-semibold tracking-widest text-gray-500">PROCESS</p>
      <h2 className="text-4xl font-bold mt-2 mb-12">Our work process</h2>

      <div className="relative border-l-2 border-blue-500 pl-14 space-y-14">

        {steps.map((step) => (
          <div key={step.number} className="relative flex flex-col group">
            
          
            <span
              className="absolute -left-20 top-0 flex items-center justify-center
              w-10 h-10 rounded-full border-2 border-blue-500 bg-white 
              text-black-600 font-semibold group-hover:bg-blue-800 group-hover:text-white transition-colors duration-75"
            >
              {step.number}
            </span>

            <h3 className="text-xl font-semibold hover:text-blue-800 border-b w-fit border-blue-700 hover:cursor-pointer">{step.title}</h3>

            <p className="text-gray-600 mt-2">{step.desc}</p>
          </div>
        ))}

      </div>
    </section>
  );
}
