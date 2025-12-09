import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import CartItem from "../components/CartItem";

export default function CartPage() {
  const {
    items,
    subtotal,
    shipping,
    total,
    eta,
    paymentMethod,
    setPaymentMethod,
    clear,
  } = useCart();

  return (
    <div className="min-h-screen bg-blue-50">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-blue-900">Carrito ({items.length} artículos)</h1>
          <Link to="/" className="text-blue-700 hover:underline text-sm">Seguir comprando</Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h2 className="font-medium mb-2 text-blue-800">Opciones de retiro y entrega</h2>
              <p className="text-sm text-gray-600">(Por ahora está estático — se puede ampliar luego)</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm min-h-[220px]">
              <h2 className="font-medium mb-4 text-blue-800">Artículos</h2>

              {items.length === 0 ? (
                <div className="py-10 text-center text-blue-600">
                  Aún no has agregado productos
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((it) => (
                    <CartItem key={it.id} item={it} />
                  ))}
                </div>
              )}
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2 text-blue-800">Recomendado con tu pedido</h3>
              <p className="text-sm text-gray-600">Productos sugeridos aparecerán aquí.</p>
            </div>
          </div>

          <aside className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold mb-4 text-blue-800">Resumen</h3>

            <div className="mb-4">
              <p className="text-sm text-gray-700 mb-2">Método de pago</p>
              <div className="flex gap-2">
                <button
                  onClick={() => setPaymentMethod("card")}
                  className={`flex-1 px-3 py-2 rounded-md border ${paymentMethod === "card" ? "bg-blue-800 text-white border-blue-800" : "bg-white text-gray-700"}`}
                >
                  Tarjeta
                </button>
                <button
                  onClick={() => setPaymentMethod("cod")}
                  className={`flex-1 px-3 py-2 rounded-md border ${paymentMethod === "cod" ? "bg-blue-800 text-white border-blue-800" : "bg-white text-gray-700"}`}
                >
                  Contra entrega
                </button>
              </div>
            </div>

            <div className="text-sm text-gray-700 space-y-2 mb-4">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Envío</span>
                <span>{shipping === 0 ? "Gratis" : `$${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>Total estimado</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <div className="mb-3 text-sm text-gray-600">
              <strong>Entrega estimada:</strong> {eta}
            </div>

            <button disabled={items.length === 0} className="w-full bg-blue-800 text-white py-2 rounded-md mb-2 hover:bg-blue-700 transition disabled:opacity-60">
              Continuar con el pago
            </button>

            <button
              onClick={() => { clear(); }}
              className="w-full border border-gray-300 py-2 rounded-md text-sm hover:bg-gray-50 transition"
            >
              Vaciar carrito
            </button>
          </aside>
        </div>
      </div>
    </div>
  );
}