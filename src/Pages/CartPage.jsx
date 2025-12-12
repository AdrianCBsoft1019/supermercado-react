import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import CartItem from "../Components/CartItem";

export default function CartPage() {
  const cart = useCart();
  const auth = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [showInvoice, setShowInvoice] = useState(false);
  const [invoiceNumber] = useState(() => String(Date.now()).slice(-6));

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const wantPay = params.get("pay") === "1";

    if (wantPay && auth?.user) {
      navigate(location.pathname, { replace: true });
      setTimeout(() => setShowInvoice(true), 0);
    }
  }, [location.search, auth?.user, navigate, location.pathname]);

  // Validar que los contextos están disponibles
  if (!cart || !auth) {
    return (
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Error al cargar</h2>
        <p className="text-gray-600">Por favor, recarga la página.</p>
      </div>
    );
  }

  const { items, subtotal, shipping, total, eta, clear } = cart;
  const { user, setRedirectAfterLogin } = auth;

  const handlePay = () => {
    if (!user) {
      setRedirectAfterLogin(`/cart?pay=1`);
      navigate("/signin");
      return;
    }

    setShowInvoice(true);
  };

  const confirmPayment = () => {
    const invoice = {
      id: "FAC-" + Date.now(),
      date: new Date().toLocaleString(),
      userEmail: user?.email || "invitado",
      items: items,
      subtotal,
      shipping,
      total,
    };

    try {
      const invoices = JSON.parse(localStorage.getItem("invoices") || "[]");
      invoices.push(invoice);
      localStorage.setItem("invoices", JSON.stringify(invoices));
    } catch {
      // Error al guardar factura en localStorage
    }

    clear();

    alert(`Pago simulado OK. Factura ${invoice.id} generada.`);

    setShowInvoice(false);

    navigate("/");
  };

  if (!items || items.length === 0) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-2xl font-semibold mb-4">Tu carrito está vacío</h2>
        <p className="text-gray-600 mb-6">Añade productos para verlos aquí.</p>
        <button
          onClick={() => navigate("/")}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Volver a comprar
        </button>
      </div>
    );
  }

  const facturaPreview = {
    cliente: user?.email || "Invitado",
    cantidad: items.reduce((s, it) => s + it.qty, 0),
    total: total,
    fecha: new Date().toLocaleDateString(),
    estado: "Pendiente",
  };

  return (
    <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <h2 className="text-2xl font-semibold mb-4">
          Carrito ({items.reduce((s, i) => s + i.qty, 0)} artículos)
        </h2>

        <div className="space-y-4">
          {items.map((it) => (
            <CartItem key={it.id} item={it} />
          ))}
        </div>
      </div>

      <aside className="bg-white p-4 rounded shadow">
        <h3 className="font-semibold">Resumen</h3>

        <div className="mt-3 space-y-2 text-sm text-gray-700">
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${subtotal.toLocaleString()}</span>
          </div>

          <div className="flex justify-between">
            <span>Envío</span>
            <span>{shipping === 0 ? "Gratis" : `$${shipping}`}</span>
          </div>

          <div className="flex justify-between font-semibold">
            <span>Total estimado</span>
            <span>${total.toLocaleString()}</span>
          </div>

          <div className="pt-3 text-xs text-gray-500">Entrega estimada: {eta}</div>
        </div>

        <button
          onClick={handlePay}
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded"
        >
          Continuar con el pago
        </button>

        <button
          onClick={clear}
          className="mt-3 w-full border border-gray-300 py-2 rounded text-sm"
        >
          Vaciar carrito
        </button>
      </aside>

      {showInvoice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-xl p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-2xl font-bold text-blue-700">Factura de Compra</h3>
                <p className="text-sm text-gray-500 mt-1">Resumen de tu pedido</p>
              </div>

              <div className="text-right">
                <p className="text-sm text-gray-500">Factura</p>
                <p className="font-medium">#{invoiceNumber}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 rounded-lg border p-4">
                <p className="text-sm text-gray-700"><strong>Cliente:</strong> {facturaPreview.cliente}</p>
                <p className="text-sm text-gray-700 mt-1"><strong>Fecha:</strong> {facturaPreview.fecha}</p>
                <p className="text-sm text-gray-700 mt-1"><strong>Estado:</strong> <span className="text-orange-600 font-semibold">{facturaPreview.estado}</span></p>
              </div>

              <div className="bg-gray-50 rounded-lg border p-4">
                <p className="text-sm text-gray-700"><strong>Artículos:</strong> {facturaPreview.cantidad}</p>
                <p className="text-sm text-gray-700 mt-1"><strong>Total:</strong> <span className="text-green-600 font-semibold">${facturaPreview.total.toLocaleString()}</span></p>
                <p className="text-sm text-gray-500 mt-2">Entrega estimada: {eta}</p>
              </div>
            </div>

            <div className="mt-4">
              <h4 className="font-medium text-gray-700 mb-2">Productos</h4>
              <ul className="max-h-40 overflow-auto divide-y">
                {items.map((it) => (
                  <li key={it.id} className="py-2 flex justify-between text-sm">
                    <span className="text-gray-700">{it.title} x {it.qty}</span>
                    <span className="text-gray-700">${(it.price * it.qty).toLocaleString()}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
              <div className="text-sm text-gray-600">
                <div>Subtotal: ${subtotal.toLocaleString()}</div>
                <div>Envío: {shipping === 0 ? "Gratis" : `$${shipping}`}</div>
                <div className="font-semibold">Total: ${total.toLocaleString()}</div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setShowInvoice(false)}
                  className="px-4 py-2 border rounded-md"
                >
                  Cerrar
                </button>

                <button
                  onClick={confirmPayment}
                  className="px-4 py-2 bg-green-600 text-white rounded-md"
                >
                  Confirmar y generar factura
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}