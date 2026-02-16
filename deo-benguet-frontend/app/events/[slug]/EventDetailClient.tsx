"use client";

import Link from "next/link";
import { events } from "../../../data/event";
import { useEffect, useState } from "react";

export function EventDetailClient({ event }: { event: typeof events[0] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = event.images || (event.image ? [event.image] : ["/events/placeholder.jpg"]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <main className="fade-in py-24">
      <div className="max-w-4xl mx-auto px-6">

        <Link href="/events" className="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold mb-8">
          ← Back to Events
        </Link>

        {/* Carousel */}
        <div className="relative mb-12">
          {/* Image */}
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src={images[currentIndex]}
              alt={event.title}
              className="w-full h-96 object-cover rounded-3xl"
            />
          </div>

          {/* Previous Button */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10"
          >
            ❮
          </button>

          {/* Next Button */}
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full z-10"
          >
            ❯
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition ${
                  index === currentIndex ? "bg-teal-600" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <h1 className="text-4xl font-bold mb-4">
          {event.title}
        </h1>

        <p className="text-teal-600 font-medium mb-6">
          {event.date}
        </p>

        <p className="text-gray-700 leading-relaxed text-lg">
          {event.fullDescription}
        </p>

      </div>
    </main>
  );
}
