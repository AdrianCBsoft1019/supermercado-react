import { useCart } from "../context/CartContext";

export default function CartItem({ item }) {
  const { addItem, removeItem } = useCart();

  return (
    <div className="flex items-center bg-white p-3 rounded-lg shadow-md">
      <img
        src={item.image}
        alt={item.title}
        className="w-20 h-20 object-cover rounded-lg mr-4"
      />

      <div className="flex-1">
        <h4 className="font-semibold text-blue-900">{item.title}</h4>

        <p className="text-sm text-gray-600">
          Precio:{" "}
          {item.price.toLocaleString("es-CO", {
            style: "currency",
            currency: "COP",
          })}
        </p>

        <p className="text-sm font-semibold text-blue-700">
          Subtotal:{" "}
          {(item.price * item.qty).toLocaleString("es-CO", {
            style: "currency",
            currency: "COP",
          })}
        </p>
      </div>

      <div className="flex flex-col items-center ml-4">
        <button
          onClick={() => addItem(item)}
          className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
        >
          +
        </button>

        <span className="font-bold text-blue-900 my-1">{item.qty}</span>

        <button
          onClick={() => removeItem(item.id)}
          className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
        >
          -
        </button>
      </div>
    </div>
  );
}