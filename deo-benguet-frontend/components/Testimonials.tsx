interface Testimonial {
    name: string;
    quote: string;
}

const testimonials: Testimonial[] = [
    {
        name: "Kate",
        quote: "DEO Church became our family. We felt welcomed from the very first visit."
    },
    {
        name: "Arvin T.",
        quote: "The messages are practical and inspiring. It has strengthened my faith."
    },
    {
        name: "Anti L.",
        quote: "Our children love coming here. It truly feels like home. The community is amazing."
    }
];

export default function Testimonials() {
    return (
        <section className="bg-white py-24">
            <div className="max-w-6xl mx-auto px-6 text-center">
                
                <h2 className="text-3xl md:text-4xl font-bold mb-12">
                    Testimonials from Our Church Family
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition duration-300 text-left"
                        >
                            <p className="text-gray-700 mb-4">
                                “{testimonial.quote}”
                            </p>
                            <p className="font-semibold text-teal-600">
                                — {testimonial.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}