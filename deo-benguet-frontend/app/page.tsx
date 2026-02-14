import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ServiceTimes from "@/components/ServiceTimes";
import PlanVisit from "@/components/PlanVisit";
import Location from "@/components/Location";
import Testimonials from "@/components/Testimonials";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ServiceTimes />
      <PlanVisit />
      <Testimonials />
      <Location />
      <Features />
    </main>
  );
}
