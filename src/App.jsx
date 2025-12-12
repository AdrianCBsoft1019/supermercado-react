import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import ProductGrid from "./Components/ProductList";
import SobreNosotros from "./Components/Sobrenosotros";
import Footer from "./Components/Footer";
import CartPage from "./Pages/CartPage";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import Header from "./Components/Header";
import Carrousel from "./Components/Carrousel";
import Login from "./Pages/Login";
import SignIn from "./Pages/SignIn";
import Loader from "./Components/Loader";

function AppContent() {
  const location = useLocation();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 900);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  const showCarrousel = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col bg-blue-50 relative">
      <Header />

      {loading && (
        <div className="fixed inset-0 bg-gray-300 bg-opacity-60 flex items-center justify-center z-50 backdrop-blur-sm">
          <Loader />
        </div>
      )}

      {showCarrousel && !loading && <Carrousel />}

      <main className="flex-1">
        {!loading && (
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <ProductGrid />
                  <div id="sobre-nosotros">
                    <SobreNosotros />
                  </div>
                </>
              }
            />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        )}
      </main>

      {!loading && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <AppContent />
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}