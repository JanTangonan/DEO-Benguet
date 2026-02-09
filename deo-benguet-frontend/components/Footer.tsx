export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <p className="text-lg font-semibold text-white">Your Church</p>
                <p className="mt-2">123 Hope Street • Your City</p>
                <p className="mt-4 text-sm">© {new Date().getFullYear()} Your Church. All rights reserved.</p>
            </div>
        </footer>
    );
}