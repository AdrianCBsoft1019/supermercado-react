import React from "react";
import { useCart } from "../context/CartContext";

export default function CartItem({ item }) {
  const { addItem, decreaseItem, removeItem } = useCart();

  const formatCurrency = (n) => {
    try {
      return n.toLocaleString(undefined, { minimumFractionDigits: 0, maximumFractionDigits: 0 });
    } catch (err) {
      console.warn(err);
      return n;
    }
  };

  return (
    <div className="flex items-center gap-4 p-4 bg-white rounded shadow">
      <img
        src={item.image || "/icons/placeholder.png"}
        alt={item.name}
        className="w-20 h-20 object-cover rounded"
      />

      <div className="flex-1">
        <h4 className="font-semibold">{item.name}</h4>
        <p className="text-sm text-gray-600">Precio: ${formatCurrency(item.price)}</p>
        <p className="text-sm text-blue-600">Subtotal: ${formatCurrency(item.price * item.qty)}</p>
      </div>

      <div className="flex flex-col items-center space-y-2">
        <button
          onClick={() => addItem(item)}
          className="w-8 h-8 rounded bg-blue-600 text-white flex items-center justify-center"
          aria-label={`Agregar una unidad de ${item.name}`}
        >
          +
        </button>

        <div className="font-medium">{item.qty}</div>

        <button
          onClick={() => decreaseItem(item.id)}
          className="w-8 h-8 rounded bg-red-500 text-white flex items-center justify-center"
          aria-label={`Disminuir una unidad de ${item.name}`}
        >
          -
        </button>

        <button
          onClick={() => removeItem(item.id)}
          className="text-xs text-gray-500 underline"
          aria-label={`Eliminar ${item.name} del carrito`}
        >
          Eliminar
        </button>
      </div>
    </div>
  );
}
