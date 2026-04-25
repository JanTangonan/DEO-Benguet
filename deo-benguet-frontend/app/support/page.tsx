"use client";

import { useFadeIn } from "@/hooks/useFadeIn";
import Link from "next/link";

interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
}

const products: Product[] = [
    {
        id: "shirt-1",
        name: "DEO Church Shirt",
        description: "Comfortable cotton shirt with our church logo.",
        price: 350,
        image: "/products/shirt.jpg",
    },
    {
        id: "tote-1",
        name: "Canvas Tote Bag",
        description: "Eco-friendly tote bag for everyday use.",
        price: 200,
        image: "/products/tote.jpg",
    },
    {
        id: "mug-1",
        name: "Faith Mug",
        description: "Start your day with a reminder of faith.",
        price: 150,
        image: "/products/mug.jpg",
    },
];

function ProductCard({ product }: { product: Product }) {
    return (
        <div id="support" className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition duration-300">

            <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
            />

            <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">
                    {product.name}
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                    {product.description}
                </p>

                <p className="font-semibold text-teal-600 mb-4">
                    ₱{product.price}
                </p>

                <a
                    href="https://facebook.com/YOUR_PAGE_NAME"
                    target="_blank"
                    className="block text-center bg-teal-600 text-white py-2 rounded-lg hover:bg-teal-700 transition"
                >
                    Message to Order
                </a>
            </div>
        </div>
    );
}

export default function SupportPage() {
    useFadeIn();

    return (
        <main>

            {/* HERO */}
            <section className="bg-teal-600 text-white py-28 text-center fade-in">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Support the Mission
                </h1>

                <p className="max-w-2xl mx-auto text-lg text-teal-100">
                    Every purchase helps fund church activities, outreach programs,
                    and ministry efforts in our community.
                </p>
            </section>

            {/* PURPOSE */}
            <section className="py-20 text-center fade-in">
                <div className="max-w-3xl mx-auto px-6">
                    <p className="text-gray-600 text-lg leading-relaxed">
                        These items are created and sold to support the ongoing ministries
                        of our church. Your support allows us to reach more people, organize
                        events, and serve our community with love and purpose.
                    </p>
                </div>
            </section>

            {/* PRODUCTS */}
            <section className="bg-gray-100 py-24 fade-in">
                <div className="max-w-6xl mx-auto px-6">

                    <h2 className="text-3xl font-bold text-center mb-16">
                        Available Items
                    </h2>

                    <div className="grid md:grid-cols-3 gap-10">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                </div>
            </section>

            {/* CTA */}
            <section className="py-24 text-center fade-in">
                <div className="max-w-3xl mx-auto px-6">

                    <h2 className="text-3xl font-bold mb-4">
                        Want to Support?
                    </h2>

                    <p className="text-gray-600 mb-8">
                        If you’re interested in any item, feel free to message us directly.
                        We’d love to connect with you!
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">

                        <a
                            href="https://facebook.com/YOUR_PAGE_NAME"
                            target="_blank"
                            className="bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition"
                        >
                            Message on Facebook
                        </a>

                        <Link
                            href="/contact"
                            className="border border-teal-600 text-teal-600 px-6 py-3 rounded-lg hover:bg-teal-50 transition"
                        >
                            Contact Us
                        </Link>

                    </div>

                </div>
            </section>

            {/* IMPACT */}
            <section className="bg-teal-50 py-24 text-center fade-in">
                <div className="max-w-3xl mx-auto px-6">

                    <h2 className="text-3xl font-bold mb-6">
                        Your Support Makes a Difference
                    </h2>

                    <p className="text-gray-600 text-lg leading-relaxed">
                        Through your support, we are able to organize youth gatherings,
                        outreach programs, and community events that impact lives and
                        spread the love of Jesus in Benguet and beyond.
                    </p>

                </div>
            </section>

        </main>
    );
}