import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductGrid from "./components/ProductGrid";
import SobreNosotros from "./components/SobreNosotros";
import Footer from "./components/Footer";
import CartButton from "./components/CartButton";
import CartPage from "./pages/CartPage";
import { CartProvider } from "./context/CartContext";

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-blue-50">
          <CartButton />

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
      </BrowserRouter>
    </CartProvider>
  );
}
