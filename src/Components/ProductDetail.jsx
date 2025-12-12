import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useCart } from "../context/CartContext";

function Stars({ value }) {
  return (
    <div className="flex items-center gap-1 text-yellow-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={i < value ? "currentColor" : "#e6e6e6"}
          className="w-4 h-4"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.447a1 1 0 00-.364 1.118l1.287 3.95c.3.921-.755 1.688-1.54 1.118L10 13.347l-3.37 2.447c-.784.57-1.84-.197-1.54-1.118l1.287-3.95a1 1 0 00-.364-1.118L2.644 9.377c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.95z" />
        </svg>
      ))}
    </div>
  );
}

export default function ProductDetailModal({ product, onClose }) {
  const { addItem } = useCart();
  const [reviews, setReviews] = useState([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);

  const key = `product_reviews_${product.id}`;

  useEffect(() => {
    const raw = localStorage.getItem(key);
    if (raw) {
      setReviews(JSON.parse(raw));
    }
  }, [key]);

  useEffect(() => {

    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = original);
  }, []);

  const saveReviews = (next) => {
    setReviews(next);
    localStorage.setItem(key, JSON.stringify(next));
  };

  const handleAddReview = (e) => {
    e.preventDefault();
    const r = {
      id: Date.now(),
      name: name || "Anónimo",
      comment,
      rating: Number(rating),
      date: new Date().toISOString(),
    };
    saveReviews([r, ...reviews]);
    setName("");
    setComment("");
    setRating(5);
  };

  const avgRating =
    reviews.length === 0
      ? 0
      : Math.round((reviews.reduce((s, r) => s + r.rating, 0) / reviews.length) * 10) / 10;

  const discountedPrice = product.discount
    ? +(product.price * (1 - product.discount / 100)).toFixed(0)
    : null;

  const content = (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-hidden
      />

      <div className="relative bg-white max-w-3xl w-full rounded-lg shadow-lg overflow-auto max-h-[90vh]">
        <div className="flex justify-between items-start p-4 border-b">
          <h3 className="text-xl font-semibold text-blue-900">{product.title}</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
            aria-label="Cerrar"
          >
            ✕
          </button>
        </div>

        <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-1">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-56 object-cover rounded"
            />
            <div className="mt-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold text-blue-900">
                    {discountedPrice
                      ? discountedPrice.toLocaleString("es-CO", { style: "currency", currency: "COP" })
                      : product.price.toLocaleString("es-CO", { style: "currency", currency: "COP" })}
                  </span>
                  {product.discount && (
                    <span className="text-sm line-through text-gray-400">
                      {product.price.toLocaleString("es-CO", { style: "currency", currency: "COP" })}
                    </span>
                  )}
                </div>
                <div className="text-sm text-gray-600">{product.category}</div>
              </div>

              {product.discount && (
                <div className="text-xs text-green-600 mt-1">{product.discount}% OFF</div>
              )}

              <div className="mt-3">
                <button
                  onClick={() => addItem(product)}
                  className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition font-semibold"
                >
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <p className="text-gray-700 mb-3">{product.desc}</p>

            <div className="mb-4">
              <h4 className="font-semibold text-blue-900">Características</h4>
              <ul className="list-disc list-inside text-sm text-gray-700 mt-2">
                {(product.features || [product.desc]).map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>

            <div className="mb-4">
              <h4 className="font-semibold text-blue-900 flex items-center gap-2">Reseñas {avgRating > 0 && <span className="text-sm text-gray-600">({avgRating} / 5)</span>}</h4>

              <div className="mt-3">
                <form onSubmit={handleAddReview} className="mb-4 grid grid-cols-1 md:grid-cols-3 gap-2">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Tu nombre (opcional)"
                    className="md:col-span-1 border rounded px-3 py-2"
                  />
                  <select
                    value={rating}
                    onChange={(e) => setRating(e.target.value)}
                    className="md:col-span-1 border rounded px-3 py-2"
                  >
                    <option value={5}>5 - Excelente</option>
                    <option value={4}>4 - Muy bueno</option>
                    <option value={3}>3 - Bueno</option>
                    <option value={2}>2 - Regular</option>
                    <option value={1}>1 - Malo</option>
                  </select>
                  <button className="md:col-span-1 bg-green-600 text-white rounded px-3 py-2">Enviar reseña</button>

                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Escribe tu reseña..."
                    className="md:col-span-3 mt-2 border rounded px-3 py-2"
                    rows={3}
                    required
                  />
                </form>

                <div className="space-y-3">
                  {reviews.length === 0 && <div className="text-sm text-gray-500">No hay reseñas aún.</div>}
                  {reviews.map((r) => (
                    <div key={r.id} className="border rounded p-3">
                      <div className="flex items-center justify-between">
                        <div className="font-semibold text-sm">{r.name}</div>
                        <div className="flex items-center gap-2">
                          <Stars value={r.rating} />
                          <div className="text-xs text-gray-500">{new Date(r.date).toLocaleDateString()}</div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-700 mt-2">{r.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(content, document.body);
}
