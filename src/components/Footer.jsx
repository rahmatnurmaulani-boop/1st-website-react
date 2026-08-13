import { MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  const menuLinks = [
    "Cemilan Manis",
    "Cookies",
    "Donat Favorit",
    "Exclusive by D'Crumble",
    "Favorit Keluarga",
    "Jajanan Nusantara",
    "Produk Viral",
    "Roti Hemat",
    "Roti Pilihan Istimewa",
    "Spesial Pilihan Acara",
    "Tart Karakter",
    "Untuk yang Spesial",
    "Whipping Tart Premium",
    "Whipping Tart Spesial",
  ];

  const layananLinks = [
    "Pesanan Korporat",
    "Snack Box & Meeting",
    "Promo",
    "Karir",
    "Katalog",
    "Kontak",
  ];

  return (
    <>
      <footer
        id="kontak"
        className="bg-rose-900 w-full grid grid-cols-1 md:grid-cols-4 gap-10 px-6 md:px-12 py-16"
      >
        <div className="max-w-md">
          <div className="font-extrabold text-lg text-white mb-3">
            D'Crumble
          </div>
          <p className="text-sm leading-relaxed text-white/90">
            Sejak 2020, D'Crumble hadir untuk menemani keseharian keluarga
            Indonesia. Dengan 25 outlet dan layanan untuk pesanan personal,
            corporate, hingga jumlah besar, kami ingin selalu jadi tetangga baik
            yang siap membantu di setiap momen.
          </p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Menu</h4>
          <div className="space-y-2">
            {menuLinks.map((item, index) => (
              <a
                key={index}
                href="#"
                className="block text-sm text-white/90 hover:text-rose-300 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-3">Layanan</h4>
          <div className="space-y-2">
            {layananLinks.map((item, index) => (
              <a
                key={index}
                href="#"
                className="block text-sm text-white/90 hover:text-rose-300 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-white mb-3">
            Hubungi Kami
          </h4>
          <p className="text-sm text-white/90 mb-2 flex items-center gap-2">
            <MapPin className="w-4 h-4 text-rose-300 shrink-0" />
            Jl. **** No. ** Kota **** Indonesia
          </p>
          <p className="text-sm text-white/90 mb-2 flex items-center gap-2">
            <Mail className="w-4 h-4 text-rose-300 shrink-0" />
            hello@dcrumble.id
          </p>
          <p className="text-sm text-white/90 flex items-center gap-2">
            <Phone className="w-4 h-4 text-rose-300 shrink-0" />
            +62 812 **** ****
          </p>
        </div>
      </footer>

      <div className="text-center bg-rose-950 border-t border-rose-800 text-xs text-rose-200 py-6">
        © 2026 D'Crumble. Semua hak dilindungi.
      </div>
    </>
  );
}
