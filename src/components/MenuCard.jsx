export default function MenuCard({ title, desc, badge, onSelect }) {
  return (
    <div className="group relative flex flex-col w-60 min-h-80 p-5 bg-white border border-rose-200 rounded-2xl shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-rose-300">
      {badge && (
        <span className="absolute top-4 right-4 bg-rose-600 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full shadow-sm z-10">
          {badge}
        </span>
      )}

      {/* Container Gambar */}
      <div className="w-full h-36 bg-rose-100 rounded-lg mb-4 overflow-hidden">
        <div className="w-full h-full bg-rose-200/60 transition-transform duration-500 group-hover:scale-110 flex items-center justify-center text-rose-400 text-xs font-semibold">
          Gambar Menu
        </div>
      </div>

      <h3 className="font-semibold text-rose-900 text-sm mb-2 group-hover:text-rose-600 transition-colors">
        {title}
      </h3>
      <p className="text-xs text-rose-500 mb-4">{desc}</p>

      <button
        onClick={onSelect}
        className="bg-rose-900 text-white px-6 py-2 rounded-2xl font-semibold text-sm mt-auto transition-all duration-200 hover:bg-rose-700 hover:shadow-md active:scale-95"
      >
        Lihat Produk!
      </button>
    </div>
  );
}
