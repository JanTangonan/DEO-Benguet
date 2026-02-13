import Image from "next/image";
import FeatureCard from "@/components/Features";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ServiceTimes from "@/components/ServiceTimes";
import PlanVisit from "@/components/PlanVisit";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ServiceTimes />
      <PlanVisit />
      <Features />
    </main>
  );
}
