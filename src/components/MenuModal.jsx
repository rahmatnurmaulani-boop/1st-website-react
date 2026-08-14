export default function MenuModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 relative shadow-xl">
        {/* Tombol Close (X) */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 font-bold"
        >
          ✕
        </button>

        {/* --- Gambar --- */}
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-48 object-cover rounded-xl mb-4"
        />

        {/* Badge jika ada */}
        {item.badge && (
          <span className="bg-rose-600 text-white text-[10px] px-2.5 py-1 rounded-full font-medium inline-block mb-2">
            {item.badge}
          </span>
        )}

        {/* Judul & Deskripsi */}
        <h3 className="text-xl font-bold text-rose-900 mb-1">{item.title}</h3>
        <p className="text-sm font-medium text-rose-600 mb-3">{item.desc}</p>

        <p className="text-xs text-gray-500 mb-6 leading-relaxed">
          Roti segar diproduksi setiap hari tanpa bahan pengawet. Cocok
          dinikmati bersama keluarga atau sebagai hantaran acara spesial.
        </p>

        {/* Tombol Aksi */}
        <div className="flex gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-1/2 border border-rose-900 text-rose-900 py-2 rounded-2xl text-sm font-semibold hover:bg-rose-50 transition-colors"
          >
            Batal
          </button>
          <a
            href={`https://wa.me/6281234567890?text=Halo,%20saya%20mau%20pesan%20${encodeURIComponent(item.title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-1/2 bg-emerald-600 text-white py-2 rounded-2xl text-sm font-semibold text-center hover:bg-emerald-700 transition-colors"
          >
            Pesan via WA
          </a>
        </div>
      </div>
    </div>
  );
}
