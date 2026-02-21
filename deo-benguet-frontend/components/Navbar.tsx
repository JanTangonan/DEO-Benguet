"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50 bg-white backdrop-blur-md shadow-sm ">

            {/* Top Bar */}
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/logo.svg"
                        alt="Church Logo"
                        width={200}
                        height={80}
                        priority
                    />
                </Link>

                <button
                    aria-label="Toggle menu"
                    className="md:hidden text-2xl"
                    onClick={() => setMenuOpen(prev => !prev)}
                >
                    ☰
                </button>

                <div className="hidden md:flex gap-8 items-center font-medium text-gray-700">
                    <Link href="/about">About</Link>
                    <Link href="/events">Events</Link>
                    <Link href="/contact">Contact</Link>
                    <Link href="/newsletter">News Letter</Link>

                    <a
                        href="/contact/#contact"
                        className="bg-teal-600 px-8 text-white py-2 rounded-lg text-lg font-semibold hover:bg-teal-700 transition inline-block"
                    >
                        Contact Us
                    </a>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden bg-white px-6 space-y-4 shadow-md transition-all duration-300 ${menuOpen ? "max-h-96 opacity-100 pb-6 pointer-events-auto" : "max-h-0 opacity-0 overflow-hidden pointer-events-none"
                    }`}
            >
                <Link href="/about" className="block py-2 text-lg" onClick={() => setMenuOpen(false)}>About</Link>
                <Link href="/events" className="block py-2 text-lg" onClick={() => setMenuOpen(false)}>Events</Link>
                <Link href="/contact" className="block py-2 text-lg" onClick={() => setMenuOpen(false)}>Contact</Link>
                <Link href="/newsletter" className="block py-2 text-lg" onClick={() => setMenuOpen(false)}>News Letter</Link>

                <a
                    href="/contact/#contact"
                    className="bg-teal-600 px-8 py-3 text-white rounded-lg text-lg font-semibold hover:bg-teal-700 transition inline-block"
                >
                    Contact Us
                </a>
            </div>

        </nav>
    );
}
