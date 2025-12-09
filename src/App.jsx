import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ProductGrid from "./Components/ProductList";
import SobreNosotros from "./Components/SobreNosotros";
import Footer from "./Components/Footer";
import CartPage from "./pages/CartPage";
import { CartProvider } from "./context/CartContext";
import Header from "./Components/Header";
import Carrousel from "./Components/Carrousel";

function AppContent() {
  const location = useLocation();
  const showCarrousel = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col bg-blue-50">
      <Header />
      {showCarrousel && <Carrousel />}
      <main className="flex-1">
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
            </Routes>
          </main>

          <Footer />
        </div>
      );
}

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </CartProvider>
  );
}
