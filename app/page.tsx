import { Hero } from "./componants/Hero";
import { Services } from "./componants/Services";
import TechnicalExpertise from "./componants/TechnicalExpertise";
import TestimonialsSection from "./componants/Testimonials";
import WhyChooseUs from "./componants/whychoose";

export const metadata = {
  title: "B2C Incorporation",
  description: "We provide professional AI, web, and automation services.",
};

export default function Home() {
  return (
    <div>
      <Hero />
      <WhyChooseUs />
      <Services />
      <TechnicalExpertise />
      <TestimonialsSection />
    </div>
  );
}
