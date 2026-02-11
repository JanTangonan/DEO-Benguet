import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="w-full bg-white shadow-sm">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                {/* LOGO */}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                        src="/logo.svg"
                        alt="Church Logo"
                        width={250}
                        height={250}
                        priority
                    />
                </Link>

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
