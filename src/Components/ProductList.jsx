import { useState } from "react";
import ProductCard from "./ProductCard";
import products from "../data/productos.json";

export default function ProductList() {
  const [activeCategory, setActiveCategory] = useState("todos");

  const categories = ["todos", ...new Set(products.map((p) => p.category))];

  const filtered =
    activeCategory === "todos"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <section id="productos" className="max-w-6xl mx-auto px-6 py-12">
      <h3 className="text-2xl font-semibold mb-6 text-blue-900 text-center">
        Nuestros Productos
      </h3>

      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            data-category={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all shadow-sm 
            ${
              activeCategory === cat
                ? "bg-blue-600 text-white scale-105 shadow-md"
                : "bg-white text-blue-700 border border-blue-300 hover:bg-blue-100"
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
