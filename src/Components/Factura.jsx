export default function Factura({ factura, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50 p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6 animate-fadeIn">

        <h2 className="text-2xl font-bold text-center text-blue-700 mb-4">
          Factura de Compra
        </h2>

        <div className="bg-gray-50 rounded-xl border p-5 shadow-inner space-y-3">
          <p className="text-gray-700">
            <strong>Cliente:</strong> {factura.cliente}
          </p>

          <p className="text-gray-700">
            <strong>Artículos:</strong> {factura.cantidad}
          </p>

          <p className="text-gray-700">
            <strong>Total:</strong>{" "}
            <span className="text-green-600 font-semibold">${factura.total}</span>
          </p>

          <p className="text-gray-700">
            <strong>Fecha:</strong> {factura.fecha}
          </p>

          <p className="text-gray-700">
            <strong>Estado:</strong>{" "}
            <span className="text-blue-600 font-semibold">Pagado ✔</span>
          </p>
        </div>

        <button
          onClick={onClose}
          className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg shadow transition"
        >
          Cerrar
        </button>

      </div>
    </div>
  );
}
