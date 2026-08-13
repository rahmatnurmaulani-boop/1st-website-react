import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-rose-100/90 backdrop-blur-md shadow-lg py-2 border-b border-rose-200"
          : "bg-rose-100 py-4 border-b border-rose-200"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6">
        <div className="font-extrabold text-lg text-rose-900 bg-white rounded-2xl px-4 py-1 border-2 border-yellow-500 drop-shadow-md">
          D'<span className="font-bold text-rose-500">Crumble</span>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-rose-900">
          <a href="#" className="hover:text-rose-600 transition-colors">
            Home
          </a>
          <a href="#menu" className="hover:text-rose-600 transition-colors">
            Produk
          </a>
          <a href="#" className="hover:text-rose-600 transition-colors">
            Korporat
          </a>
          <a href="#" className="hover:text-rose-600 transition-colors">
            Outlet Kami
          </a>
          <a href="#kontak" className="hover:text-rose-600 transition-colors">
            Tentang
          </a>
        </nav>

        <button className="hidden sm:inline-block bg-rose-900 text-white px-6 py-2 rounded-2xl font-medium text-sm transition-all duration-200 hover:bg-rose-700 hover:shadow-lg active:scale-95">
          Pesan Sekarang
        </button>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-rose-900 focus:outline-none p-1 rounded-lg hover:bg-rose-200 transition-colors"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-rose-100 border-t border-rose-200 px-6 py-4 space-y-3">
          <a href="#" className="block font-semibold text-rose-900">
            Home
          </a>
          <a href="#menu" className="block font-semibold text-rose-900">
            Produk
          </a>
          <a href="#" className="block font-semibold text-rose-900">
            Korporat
          </a>
          <a href="#" className="block font-semibold text-rose-900">
            Outlet Kami
          </a>
          <a href="#kontak" className="block font-semibold text-rose-900">
            Tentang
          </a>
          <button className="w-full mt-2 bg-rose-900 text-white px-6 py-2 rounded-2xl font-medium text-sm">
            Pesan Sekarang
          </button>
        </div>
      )}
    </header>
  );
}
