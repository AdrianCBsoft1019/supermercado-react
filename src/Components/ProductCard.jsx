import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addItem } = useCart();

  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-cover rounded-lg mb-3"
      />

      <h4 className="text-lg font-semibold text-blue-900">{product.title}</h4>
      <p className="text-sm text-gray-600 mb-2">{product.desc}</p>

      <p className="text-blue-900 font-bold mb-3">
        {product.price.toLocaleString("es-CO", {
          style: "currency",
          currency: "COP",
        })}
      </p>

      <button
        onClick={() => addItem(product)}
        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
      >
        Agregar al carrito
      </button>
    </div>
  );
}