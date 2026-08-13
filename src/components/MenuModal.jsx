export default function MenuModal({ item, onClose }) {
  if (!item) return null;

  const waNumber = "6281234567890";
  const message = encodeURIComponent(
    `Halo D'Crumble, saya ingin memesan menu: *${item.title}*`,
  );
  const waUrl = `https://wa.me/${waNumber}?text=${message}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm animate-fadeIn">
      {/* Container Modal */}
      <div className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl transition-all duration-300 transform scale-100">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 font-bold text-xl transition-colors"
        >
          ✕
        </button>

        <div className="w-full h-48 bg-rose-100 rounded-xl mb-4 flex items-center justify-center overflow-hidden">
          <span className="text-rose-400 text-sm font-semibold">
            Gambar {item.title}
          </span>
        </div>

        {item.badge && (
          <span className="inline-block bg-rose-600 text-white text-xs px-3 py-1 rounded-full mb-2 shadow-sm">
            {item.badge}
          </span>
        )}

        <h3 className="text-xl font-bold text-rose-900 mb-2">{item.title}</h3>
        <p className="text-sm text-rose-600 mb-4">{item.desc}</p>
        <p className="text-xs text-gray-500 mb-6 leading-relaxed">
          Roti segar diproduksi setiap hari tanpa bahan pengawet. Cocok
          dinikmati bersama keluarga atau sebagai hantaran acara spesial.
        </p>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="w-1/2 border border-rose-900 text-rose-900 py-2.5 rounded-2xl text-sm font-medium hover:bg-rose-50 transition-colors active:scale-95"
          >
            Batal
          </button>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-1/2 bg-green-600 text-white text-center py-2.5 rounded-2xl text-sm font-medium hover:bg-green-700 transition-all shadow-md hover:shadow-lg active:scale-95 flex items-center justify-center gap-2"
          >
            Pesan via WA
          </a>
        </div>
      </div>
    </div>
  );
}
