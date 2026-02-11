import Image from "next/image";

export default function Hero() {
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
                    Welcome to <span className="text-teal-400">DEO Church-Benguet</span>
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