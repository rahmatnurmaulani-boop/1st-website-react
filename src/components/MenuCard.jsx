export default function MenuCard({ title, desc, badge, image, onSelect }) {
  return (
    <div className="bg-white border border-rose-200 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-rose-300 relative flex flex-col w-60 min-h-80 p-5 shadow-md">
      {badge && (
        <span className="absolute top-4 right-4 bg-rose-600 text-white text-[10px] px-2.5 py-1 rounded-full font-medium z-10">
          {badge}
        </span>
      )}

      {/* Gambar */}
      <img
        src={image}
        alt={title}
        className="w-full h-36 object-cover rounded-lg mb-4"
      />

      <h3 className="font-semibold text-rose-900 text-sm mb-2">{title}</h3>
      <p className="text-xs text-rose-500 mb-4">{desc}</p>

      <button
        type="button"
        onClick={onSelect}
        className="bg-rose-900 text-white px-6 py-2 rounded-2xl text-sm font-semibold transition-all duration-200 hover:bg-rose-700 mt-auto"
      >
        Lihat Produk!
      </button>
    </div>
  );
}
