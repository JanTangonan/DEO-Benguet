import Image from "next/image";
import Link from "next/link";
import FeatureCard from "@/components/Features";

function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold">Your Church</div>

        <div className="hidden md:flex gap-8 items-center text-gray-700 font-medium">
          <Link href="/about">About Us</Link>
          <Link href="/sermons">Sermons</Link>
          <Link href="/events">Events</Link>
          <Link href="/contact">Contact</Link>

          <button className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition">
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative h-[70vh] w-full">
      <Image
        src="https://images.unsplash.com/photo-1507692049790-de58290a4334"
        alt="Church worship"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative z-10 flex flex-col justify-center h-full max-w-6xl mx-auto px-6 text-white">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight max-w-2xl">
          Welcome to <span className="text-teal-400">Your Church</span>
        </h1>

        <p className="mt-4 text-lg max-w-xl text-gray-200">
          We are a family deeply moved by the love of Jesus. Join us this Sunday
          and experience community, faith, and purpose.
        </p>

        <div className="mt-6">
          <button className="bg-teal-600 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-teal-700 transition">
            Plan a Visit
          </button>
        </div>
      </div>
    </section>
  );
}

function Features() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <FeatureCard
          title="Midweek Groups"
          description="Come together in smaller groups throughout the week to grow in faith and friendship."
        />

        <FeatureCard
          title="Loving & Giving"
          description="Our mission is to spread Jesus' love through service and compassion."
        />

        <FeatureCard
          title="Our Sermons"
          description="Watch and listen to messages that inspire and guide your spiritual journey."
        />
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-lg font-semibold text-white">Your Church</p>
        <p className="mt-2">123 Hope Street • Your City</p>
        <p className="mt-4 text-sm">© {new Date().getFullYear()} Your Church. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Features />
      <Footer />
    </main>
  );
}
