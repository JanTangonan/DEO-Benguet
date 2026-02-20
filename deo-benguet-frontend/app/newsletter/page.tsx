"use client";

import { newsletters } from "../../data/newsletter";
import { useFadeIn } from "@/hooks/useFadeIn";

export default function NewsLetterPage() {
    useFadeIn();
    return (
        <section className="py-20 w-full object-contain bg-gray-100 fade-in scroll-mt-24">
            <div className="max-w-4xl mx-auto px-6">

                <h2 className="text-4xl font-bold text-center mb-4">
                    Monthly Newsletter
                </h2>

                <p className="text-center text-gray-600 mb-16">
                    Monthly updates, testimonies, and highlights from Deo Church Benguet.
                </p>

                <div className="space-y-20">

                    {newsletters.map((newsletter) => (
                        <div key={newsletter.id} className="shadow-xl overflow-hidden bg-white fade-in">
                            <h3 className="text-sm font-semibold mb-6">
                                {newsletter.title}
                            </h3>
                            <img
                                src={newsletter.image}
                                alt={newsletter.title   }
                                className="w-full object-contain"
                            />
                        </div>
                    ))}

                </div>

            </div>
        </section>
    );
}