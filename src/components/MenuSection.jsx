import { useState } from "react";
import MenuCard from "./MenuCard";
import MenuModal from "./MenuModal";

export default function MenuSection({ items = [] }) {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const categories = ["Semua", "Hemat", "Favorit", "Spesial"];
  const safeItems = items || [];

  const filteredItems =
    selectedCategory === "Semua"
      ? safeItems
      : safeItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="menu" className="max-w-6xl mx-auto px-6 py-24">
      <h2 className="text-3xl font-semibold text-center text-rose-900 mb-6">
        Menu Favorit
      </h2>

      {/* FILTER BUTTONS */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((category) => (
          <button
            type="button"
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-5 py-2 rounded-2xl text-sm font-medium transition-all duration-200 ${
              selectedCategory === category
                ? "bg-rose-900 text-white shadow-md scale-105"
                : "bg-rose-100 text-rose-900 hover:bg-rose-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* MENU CARDS */}
      <div className="flex flex-wrap justify-center gap-6">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <MenuCard
              key={item.id}
              title={item.title}
              desc={item.desc}
              badge={item.badge}
              image={item.image}
              onSelect={() => setSelectedProduct(item)}
            />
          ))
        ) : (
          <p className="text-rose-500 font-medium">Menu tidak ditemukan.</p>
        )}
      </div>

      {/* MODAL POP-UP */}
      <MenuModal
        item={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </section>
  );
}
