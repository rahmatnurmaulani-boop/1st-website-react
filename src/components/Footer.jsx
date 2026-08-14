import halalLogo from "../assets/logo-halal.png";

// Ikon Instagram (SVG Custom)
function InstagramIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

// Ikon TikTok (SVG Custom)
function TiktokIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.56-1.31 1.56-1.28 2.55.02 1.25.8 2.39 1.97 2.77.98.32 2.08.12 2.92-.47.88-.61 1.34-1.67 1.33-2.73.02-4.32.01-8.64.01-12.96z" />
    </svg>
  );
}

// Ikon Facebook (SVG Custom)
function FacebookIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export default function Footer() {
  const menuLinks = [
    "Cemilan Manis",
    "Cookies",
    "Donat Favorit",
    "Exclusive by D'Crumble",
    "Favorit Keluarga",
    "Jajanan Nusantara",
    "Product Viral",
    "Roti Hemat",
    "Roti Pilihan Istimewa",
    "Special Pilihan Acara",
    "Tart Karakter",
    "Untuk yang Special",
    "Whipping Tart Premium",
    "Whipping Tart Special",
  ];

  const layananLinks = [
    "Pesanan Korporat",
    "Snack box & Meeting",
    "Promo",
    "Karir",
    "Katalog",
    "Kontak",
  ];

  return (
    <footer className="bg-rose-900 text-white w-full">
      {/* KONTEN UTAMA FOOTER */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10 md:gap-12 px-6 py-16">
        {/* KOLOM 1: BRAND, DESKRIPSI & LOGO HALAL */}
        <div className="md:w-80 shrink-0 flex flex-col justify-between">
          <div>
            <div className="font-extrabold text-2xl text-white mb-1">
              D'Crumble
            </div>
            <p className="text-xs font-semibold tracking-widest text-rose-300 mb-4 uppercase">
              Bakery
            </p>
            <p className="text-sm leading-relaxed text-white/90">
              Sejak 2020, D'Crumble hadir untuk menemani keseharian keluarga
              Indonesia. Dengan 25 outlet dan layanan untuk pesanan personal,
              corporate, hingga jumlah besar, kami ingin selalu jadi tetangga
              baik yang siap membantu di setiap momen.
            </p>
          </div>

          {/* LOGO HALAL */}
          <div className="mt-6">
            <img
              src={halalLogo}
              alt="Halal Indonesia"
              className="h-16 w-auto object-contain"
            />
          </div>
        </div>

        {/* KOLOM 2: MENU */}
        <div className="shrink-0">
          <h4 className="text-base font-bold text-white mb-4">Menu</h4>
          <ul className="space-y-2 text-sm text-white/90">
            {menuLinks.map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-rose-300 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* KOLOM 3: LAYANAN */}
        <div className="shrink-0">
          <h4 className="text-base font-bold text-white mb-4">Layanan</h4>
          <ul className="space-y-2 text-sm text-white/90">
            {layananLinks.map((item, index) => (
              <li key={index}>
                <a href="#" className="hover:text-rose-300 transition-colors">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* KOLOM 4: HUBUNGI KAMI */}
        <div className="shrink-0">
          <h4 className="text-base font-bold text-white mb-4">Hubungi Kami</h4>
          <div className="space-y-2 text-sm text-white/90 leading-relaxed">
            <p>Jl. **** No. **</p>
            <p>Kota ****</p>
            <p className="mb-4">Indonesia</p>

            <p>
              <span className="font-bold">WA D'Crumble Care: </span>
              <a
                href="https://wa.me/6281234567890"
                className="underline hover:text-rose-300"
              >
                0812 **** ****
              </a>
            </p>
            <p>
              <span className="font-bold">Phone: </span>
              <a
                href="tel:081234567890"
                className="underline hover:text-rose-300"
              >
                +62 812 **** ****
              </a>
            </p>
            <p>
              <span className="font-bold">Email: </span>
              <a
                href="mailto:hello@dcrumble.id"
                className="underline hover:text-rose-300"
              >
                hello@dcrumble.id
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-rose-950 border-t border-rose-800/60">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-rose-200">
          <p>© 2026 D'Crumble Bakery. All Rights Reserved.</p>

          <div className="flex items-center gap-3">
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-rose-900/80 hover:bg-rose-800 flex items-center justify-center transition-colors"
            >
              <InstagramIcon className="w-4 h-4 text-rose-200" />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-rose-900/80 hover:bg-rose-800 flex items-center justify-center transition-colors"
            >
              <TiktokIcon className="w-4 h-4 text-rose-200" />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full bg-rose-900/80 hover:bg-rose-800 flex items-center justify-center transition-colors"
            >
              <FacebookIcon className="w-4 h-4 text-rose-200" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
