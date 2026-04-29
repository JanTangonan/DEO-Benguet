"use client";

import { useFadeIn } from "@/hooks/useFadeIn";
import Link from "next/link";
import { useState } from "react";

interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    images: string[];
    stock: boolean;
}

const products: Product[] = [
    {
        id: "shirt-1",
        name: "DEO Church T-Shirt",
        description: "Comfortable premium cotton shirt with our church logo.",
        price: 350,
        category: "Apparel",
        images: [
            "/products/taekwondo-ministry-1.jpg",
            "/products/taekwondo-ministry-2.jpg",
            "/products/taekwondo-ministry-3.jpg",
        ],
        stock: true,
    },
    {
        id: "hoodie-1",
        name: "DEO Church Hoodie",
        description: "Warm and cozy hoodie perfect for any season.",
        price: 650,
        category: "Apparel",
        images: ["/products/hoodie-1.jpg", "/products/hoodie-2.jpg", "/products/hoodie-3.jpg"],
        stock: true,
    },
    {
        id: "tote-1",
        name: "Canvas Tote Bag",
        description: "Eco-friendly tote bag for everyday use.",
        price: 250,
        category: "Bags",
        images: [
            "/products/tote-bag-1.jpg",
            "/products/tote-bag-2.jpg",
            "/products/tote-bag-3.jpg",
        ],
        stock: true,
    },
    {
        id: "mug-1",
        name: "Faith Mug",
        description: "Start your day with a reminder of faith.",
        price: 180,
        category: "Drinkware",
        images: [
            "/products/mug-1.jpg",
            "/products/mug-2.jpg",
        ],
        stock: true,
    },
    {
        id: "magnet-1",
        name: "Refrigerator Magnet",
        description: "Beautiful fridge magnet to inspire daily.",
        price: 80,
        category: "Home & Office",
        images: [
            "/products/ref-magnet-1.jpg",
            "/products/ref-magnet-2.jpg",
            "/products/ref-magnet-3.jpg",
        ],
        stock: true,
    },
    {
        id: "sticker-1",
        name: "DEO Church Sticker Pack",
        description: "Set of 5 inspiring stickers for your laptop or water bottle.",
        price: 120,
        category: "Accessories",
        images: ["/products/sticker-1.jpg", "/products/sticker-2.jpg", "/products/sticker-3.jpg"],
        stock: true,
    },
];

interface Supporter {
    id: string;
    name: string;
    product: string;
    amount: number;
    message: string;
}

const supporters: Supporter[] = [
    {
        id: "sup-1",
        name: "Jan Tangonan",
        product: "DEO Church Hoodie",
        amount: 650,
        message: "Supporting the youth ministry ❤️"
    },
    {
        id: "sup-2",
        name: "Jane Malote",
        product: "Canvas Tote Bag + Mug",
        amount: 430,
        message: "For God's glory!"
    },
    {
        id: "sup-3",
        name: "Henry Sy",
        product: "DEO Church T-Shirt x2",
        amount: 700,
        message: "Love our church community"
    },
    {
        id: "sup-4",
        name: "Benj Magalang",
        product: "Sticker Pack + Magnet",
        amount: 200,
        message: "Blessings to our church"
    },
];

function ProductCard({ product }: { product: Product }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentImageIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentImageIndex((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
    };

    const goToSlide = (index: number) => {
        setCurrentImageIndex(index);
    };

    return (
        <div className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition duration-300">

            {/* IMAGE */}
            <div className="relative overflow-hidden">
                <img
                    src={product.images[currentImageIndex]}
                    alt={product.name}
                    className="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
                />

                {/* Optional Badge */}
                {/* <div className="absolute top-4 left-4 bg-teal-600 text-white text-xs px-3 py-1 rounded-full">
                    Support
                </div> */}
            </div>

            {/* CONTENT */}
            <div className="p-6 flex flex-col justify-between h-[220px]">

                <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                        {product.name}
                    </h3>

                    <p className="text-sm text-gray-500 mb-4">
                        {product.description}
                    </p>
                </div>

                <div className="flex items-center justify-between">
                    <span className="text-teal-600 font-bold text-lg">
                        ₱{product.price}
                    </span>

                    <a
                        href="https://facebook.com/YOUR_PAGE_NAME"
                        target="_blank"
                        className="text-sm font-semibold text-teal-600 hover:underline"
                    >
                        Order →
                    </a>
                </div>

            </div>
        </div>
    );
}

export default function SupportPage() {
    useFadeIn();
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

    const categories = Array.from(new Set(products.map((p) => p.category)));
    const filteredProducts = selectedCategory
        ? products.filter((p) => p.category === selectedCategory)
        : products;

    const totalRaised = supporters.reduce((sum, sup) => sum + sup.amount, 0);

    return (
        <main>

            {/* HERO */}
            <section className="bg-teal-600 dark:bg-teal-700 text-white py-28 text-center fade-in">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                    Support the Mission
                </h1>

                <p className="max-w-2xl mx-auto text-lg text-teal-100">
                    Every purchase helps fund church activities, outreach programs,
                    and ministry efforts in our community.
                </p>
            </section>

            {/* PRODUCTS */}
            <section className="bg-gray-50 dark:bg-gray-800 py-24 fade-in">
                <div className="max-w-6xl mx-auto px-6">

                    <h2 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white">
                        Available Items
                    </h2>
                    <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
                        Browse our collection of quality items supporting church ministries. 
                        These items are created and sold to support the ongoing ministries
                        of our church. Your support allows us to reach more people, organize
                        events, and serve our community with love and purpose.
                    </p>

                    {/* Category Filter */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        <button
                            onClick={() => setSelectedCategory(null)}
                            className={`px-6 py-2 rounded-full font-semibold transition ${selectedCategory === null
                                    ? "bg-teal-600 text-white"
                                    : "bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-teal-50 dark:hover:bg-gray-600"
                                }`}
                        >
                            All Items
                        </button>
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`px-6 py-2 rounded-full font-semibold transition ${selectedCategory === category
                                        ? "bg-teal-600 text-white"
                                        : "bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-teal-50 dark:hover:bg-gray-600"
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
                        {filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>

                </div>
            </section>

            {/* SUPPORTERS RECOGNITION */}
            <section className="py-24 fade-in bg-white dark:bg-gray-900">
                <div className="max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-4 text-gray-800 dark:text-white">
                        Our Valued Supporters & Donors
                    </h2>
                    <p className="text-center text-gray-600 dark:text-gray-400 mb-4">
                        We thank you for your generosity and support
                    </p>

                    {/* Total Raised Counter */}
                    <div className="text-center mb-12 p-8 bg-teal-50 dark:bg-teal-900/30 rounded-2xl">
                        <p className="text-sm font-semibold text-teal-700 dark:text-teal-400 mb-2">Total Raised</p>
                        <h3 className="text-4xl md:text-5xl font-bold text-teal-600 dark:text-teal-400">₱{totalRaised.toLocaleString()}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mt-2">From {supporters.length} supporters</p>
                    </div>

                    {/* Supporters Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {supporters.map((supporter) => (
                            <div
                                key={supporter.id}
                                className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/30 dark:to-teal-800/30 p-6 rounded-2xl border border-teal-200 dark:border-teal-700 hover:shadow-lg transition duration-300"
                            >
                                <div className="flex items-start justify-between mb-3">
                                    <div>
                                        <h3 className="font-bold text-gray-800 dark:text-white">
                                            {supporter.name}
                                        </h3>
                                        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                                            {supporter.product}
                                        </p>
                                    </div>
                                    <span className="text-2xl">❤️</span>
                                </div>

                                <p className="text-sm italic text-gray-700 dark:text-gray-300 mb-3">
                                    "{supporter.message}"
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Be part of this amazing community of supporters!
                        </p>
                        <a
                            href="#support"
                            className="inline-block bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold transition"
                        >
                            Shop Now & Support
                        </a>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 text-center fade-in bg-gray-50 dark:bg-gray-800">
                <div className="max-w-3xl mx-auto px-6">

                    <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">
                        Want to Support?
                    </h2>

                    <p className="text-gray-600 dark:text-gray-400 mb-8">
                        If you’re interested in any item, feel free to message us directly.
                        We’d love to connect with you!
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">

                        <a
                            href="https://www.facebook.com/profile.php?id=61587087962445"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg hover:shadow-lg transition font-semibold"
                        >
                            Message on Facebook
                        </a>

                        <Link
                            href="/contact"
                            className="border-2 border-teal-600 dark:border-teal-400 text-teal-600 dark:text-teal-400 px-6 py-3 rounded-lg hover:bg-teal-50 dark:hover:bg-teal-900/20 transition font-semibold"
                        >
                            Contact Us
                        </Link>

                    </div>

                </div>
            </section>

            {/* IMPACT */}
            <section className="bg-teal-50 dark:bg-teal-900/20 py-24 text-center fade-in border-t border-teal-200 dark:border-teal-800">
                <div className="max-w-3xl mx-auto px-6">

                    <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
                        Your Support Makes a Difference
                    </h2>

                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
                        Through your support, we are able to organize youth gatherings,
                        outreach programs, and community events that impact lives and
                        spread the love of Jesus in Benguet and beyond.
                    </p>

                </div>
            </section>

        </main>
    );
}