"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
    { href: "/about", label: "About" },
    { href: "/events", label: "Events" },
    { href: "/contact", label: "Contact" },
    { href: "/get-involved", label: "Get Involved" },
    { href: "/newsletter", label: "Newsletter" },
];

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    const linkClass = (href: string, mobile = false) => {
        const active = pathname === href || pathname.startsWith(`${href}/`);
        return `${mobile ? "block rounded-lg px-3 py-2.5 text-lg" : "relative py-2 text-sm"} font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-600 ${active ? "text-teal-700" : "text-slate-700 hover:text-teal-700"} ${mobile && active ? "bg-teal-50" : ""}`;
    };

    return (
        <nav className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 shadow-sm backdrop-blur-md" aria-label="Main navigation">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
                <Link href="/" className="flex items-center gap-2 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-600" aria-label="DEO Church Benguet home">
                    <Image src="/chosen-mission.svg" alt="" width={60} height={40} priority />
                    <Image src="/logo.svg" alt="DEO Church Benguet" width={170} height={60} priority />
                </Link>

                <button type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} className="rounded-lg p-2 text-slate-800 transition hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 md:hidden" onClick={() => setMenuOpen((open) => !open)}>
                    {menuOpen ? <X size={25} aria-hidden="true" /> : <Menu size={25} aria-hidden="true" />}
                </button>

                <div className="hidden items-center gap-6 md:flex">
                    {navigation.map((item) => <Link key={item.href} href={item.href} className={linkClass(item.href)} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>)}
                    <Link href="/support/#support" className="rounded-xl bg-teal-600 px-5 py-2.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-teal-700 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">Support Us</Link>
                </div>
            </div>

            <div className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 md:hidden ${menuOpen ? "max-h-[28rem] opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="space-y-1 px-6 py-4">
                    {navigation.map((item) => <Link key={item.href} href={item.href} className={linkClass(item.href, true)} onClick={() => setMenuOpen(false)} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>)}
                    <Link href="/support/#support" className="mt-3 block rounded-xl bg-teal-600 px-5 py-3 text-center font-bold text-white transition hover:bg-teal-700" onClick={() => setMenuOpen(false)}>Support Us</Link>
                </div>
            </div>
        </nav>
    );
}
