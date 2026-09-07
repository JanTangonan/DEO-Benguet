import Hero from "@/components/Hero";
import Features from "@/components/Features";
import ServiceTimes from "@/components/ServiceTimes";
import PlanVisit from "@/components/PlanVisit";
import Location from "@/components/Location";
import Testimonials from "@/components/Testimonials";
import ThisWeek from "@/components/ThisWeek";
import Ministries from "@/components/Ministries";
import { Analytics } from '@vercel/analytics/next';

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ThisWeek />
      <ServiceTimes />
      <Ministries />
      <PlanVisit />
      <Testimonials />
      <Location />
      <Features />
      <Analytics />
    </main>
  );
}
