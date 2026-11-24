export default function Footer() {
    return (
        <footer className="bg-gray-900 py-8 text-gray-300 sm:py-10">
            <div className="max-w-6xl mx-auto px-4 text-center sm:px-6">
                <p className="text-lg font-semibold text-white">DEO Church - Benguet</p>
                <p className="mt-2">1229 Camanggaan, Virac, Itogon, Benguet, Itogon, Philippines</p>
                <p className="mt-4 text-sm">© {new Date().getFullYear()} ARViN.Dev . All rights reserved.</p>
            </div>
        </footer>
    );
}