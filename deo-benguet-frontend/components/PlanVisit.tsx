"use client";

import { useFadeIn } from "@/hooks/useFadeIn";

const visitInfo = [
	{
		title: "What to Expect",
		description:
			"A warm welcome, uplifting worship, and practical, Bible-centered teaching.",
	},
	{
		title: "What to Wear",
		description:
			"Come as you are. Some dress casually, others more formal — you'll fit right in.",
	},
	{
		title: "For Families",
		description:
			"We provide a safe and engaging environment for children during our services.",
	},
];

function InfoCard({
    title,
    description,
}: {
    title: string;
    description: string;
}) {
    return (
        <div className="bg-white/10 p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-300">
            <h3 className="font-semibold text-lg mb-2 text-teal-100">{title}</h3>
            <p className="text-teal-100">{description}</p>
        </div>
    );
}

export default function PlanVisit() {
	useFadeIn();
	return (
		<section id="visit" className="bg-teal-600 text-white relative py-28 overflow-hidden scroll-mt-24 fade-in">
			{/* Soft teal background glow */}

			<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
				{/* LEFT SIDE */}
				<div>
					<h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
						Planning Your First Visit?
					</h2>

					<p className="text-teal-100 mb-6 leading-relaxed">
						We understand visiting a church for the first time can feel
						unfamiliar. At DEO Church, you’ll find a welcoming community,
						practical teaching, and a place where you can grow in faith.
					</p>

					<p className="text-teal-100 mb-8 leading-relaxed">
						Come as you are. We’re excited to meet you.
					</p>

					<a
						href="#location"
						className="inline-block bg-teal-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-teal-700 transition duration-300"
					>
						Find Us
					</a>
				</div>

				{/* RIGHT SIDE */}
				<div className="space-y-8">
					{visitInfo.map((info) => (
						<InfoCard key={info.title} {...info} />
					))}
				</div>
			</div>
		</section>
	);
}