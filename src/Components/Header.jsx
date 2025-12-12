import React, { useState, useEffect } from "react";
import { ShoppingCart, Search, User } from "lucide-react";
import { useNavigate, Link } from "react-router-dom"; // Importar 'Link'
import { useCart } from "../context/CartContext"; // Importar el hook useCart

export default function Header() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  // 1. Obtener items y calcular el contador del carrito (Lógica de CartButton)
  const { items } = useCart();
  const count = items.reduce((s, i) => s + i.qty, 0);

  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const loadUser = () => {
      const u = JSON.parse(localStorage.getItem("user") || "null");
      if (u && u.logged && u.email) {
        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const found = users.find((x) => x.email === u.email) || { email: u.email };
        setUserInfo(found);
      } else {
        setUserInfo(null);
      }
    };

    loadUser();
    const onStorage = () => loadUser();
    window.addEventListener("storage", onStorage);
    // also listen to custom in-tab events when user changes
    window.addEventListener("userChange", onStorage);
    return () => {
      window.removeEventListener("storage", onStorage);
      window.removeEventListener("userChange", onStorage);
    };
  }, []);

  const submitSearch = (e) => {
    if (e) e.preventDefault();
    const q = search.trim();
    if (!q) return;
    // Navigate to tienda with query param
    navigate(`/tienda?search=${encodeURIComponent(q)}`);
  };

  return (
    <header className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo (click to go home) */}
          <div className="flex items-center space-x-1">
            <Link to="/" className="text-2xl sm:text-gray-300 font-bold">
              Fast DRC Supermarket
            </Link>
          </div>

          {/* Busqueda Desktop */}
          <form onSubmit={submitSearch} className="hidden md:flex flex-1 mx-8">
            <div className="w-full relative flex">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar productos"
                className="w-full px-2 py-2 rounded-l-lg focus:outline-none bg-white text-black"
              />
              <button
                type="submit"
                className="bg-blue-600 px-5 py-3 rounded-r-lg transition"
              >
                <Search size={18} />
              </button>
            </div>
          </form>

          <div className="flex items-center space-x-4">
            {userInfo ? (
              <div className="flex items-center space-x-2 px-3 py-2 rounded-lg">
                <span className="text-sm font-semibold">Hola, {userInfo.name || userInfo.email}</span>
                <button
                  onClick={() => {
                    localStorage.removeItem("user");
                    setUserInfo(null);
                    navigate("/");
                  }}
                  className="text-xs bg-white text-blue-700 px-2 py-1 rounded ml-2"
                >
                  Salir
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="relative hover:bg-blue-600 px-3 py-2 rounded-lg transition"
              >
                <User size={24} />
              </Link>
            )}

            <Link
              to="/cart"
              className="relative hover:bg-blue-600 px-3 py-2 rounded-lg transition"
            >
              <ShoppingCart size={24} />
              {count > 0 && (
                <span className="absolute -top-1 -right-1 bg-yellow-400 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center transform translate-x-1/2 -translate-y-1/2">
                  {count}
                </span>
              )}
            </Link>
          </div>
        </div>

        {/* Busqueda Móvil */}
        <form onSubmit={submitSearch} className="md:hidden mt-4">
          <div className="relative flex">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Buscar..."
              className="w-full px-3 py-2 rounded-l-lg focus:outline-none bg-white text-black text-sm"
            />
            <button
              type="submit"
              className="bg-blue-600 px-4 py-2 rounded-r-lg transition"
            >
              <Search size={18} />
            </button>
          </div>
        </form>
      </nav>
    </header>
  );
}
