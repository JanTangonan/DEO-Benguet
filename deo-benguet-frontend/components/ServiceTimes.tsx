export default function ServiceTimes() {
    return (
        <section className="bg-white py-16">
            <div className="max-w-5xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-10">
                    Join Us This Weekend
                </h2>

                <div className="grid md:grid-cols-3 gap-8">
                    <div className="p-6 rounded-2xl shadow-sm border">
                        <h3 className="font-semibold text-xl mb-2">Sunday Worship</h3>
                        <p className="text-gray-600">9:00 AM</p>
                    </div>

                    <div className="p-6 rounded-2xl shadow-sm border">
                        <h3 className="font-semibold text-xl mb-2">Sunday Evening</h3>
                        <p className="text-gray-600">5:00 PM</p>
                    </div>

                    <div className="p-6 rounded-2xl shadow-sm border">
                        <h3 className="font-semibold text-xl mb-2">Wednesday Prayer</h3>
                        <p className="text-gray-600">7:00 PM</p>
                    </div>
                </div>
            </div>
        </section>
    );
}