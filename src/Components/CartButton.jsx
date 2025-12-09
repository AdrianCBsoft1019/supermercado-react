import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { FaShoppingCart } from "react-icons/fa";

export default function CartButton() {
  const { items } = useCart();
  const count = items.reduce((s, i) => s + i.qty, 0);

  return (
    <div className="w-full flex justify-end p-4 bg-blue-700 shadow-md">
      <Link
        to="/cart"
        className="relative inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold transition"
      >
        <FaShoppingCart />
        <span className="hidden sm:inline">Carrito</span>

        {count > 0 && (
          <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs rounded-full px-2">
            {count}
          </span>
        )}
      </Link>
    </div>
  );
}