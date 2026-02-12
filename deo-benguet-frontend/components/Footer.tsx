export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 py-10">
            <div className="max-w-6xl mx-auto px-6 text-center">
                <p className="text-lg font-semibold text-white">DEO Church - Benguet</p>
                <p className="mt-2">1229 Camanggaan, Virac, Itogon, Benguet, Itogon, Philippines</p>
                <p className="mt-4 text-sm">© {new Date().getFullYear()} ARViN.Dev . All rights reserved.</p>
            </div>
        </footer>
    );
}