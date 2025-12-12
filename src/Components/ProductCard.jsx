import { useState } from "react";
import { useCart } from "../context/CartContext";
import ProductDetail from "./ProductDetail";

export default function ProductCard({ product }) {
  const { addItem } = useCart();
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition cursor-pointer"
        onClick={() => setOpen(true)}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setOpen(true)}
        tabIndex={0}
        role="button"
      >
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-40 object-cover rounded-lg mb-3"
        />

        <h4
          onClick={() => setOpen(true)}
          onKeyDown={(e) => e.key === "Enter" && setOpen(true)}
          tabIndex={0}
          role="button"
          className="text-lg font-semibold text-blue-900 cursor-pointer"
        >
          {product.title}
        </h4>
        <p className="text-sm text-gray-600 mb-2">{product.desc}</p>

        <p className="text-blue-900 font-bold mb-3">
          {product.price.toLocaleString("es-CO", {
            style: "currency",
            currency: "COP",
          })}
        </p>

        <div className="flex gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              addItem(product);
            }}
            className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
          >
            Agregar al carrito
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setOpen(true);
            }}
            className="w-36 bg-white border border-blue-600 text-blue-700 py-2 rounded-lg hover:bg-blue-50 transition font-semibold"
          >
            Ver detalles
          </button>
        </div>
      </div>

      {open && (
        <ProductDetail product={product} onClose={() => setOpen(false)} />
      )}
    </>
  );
}
