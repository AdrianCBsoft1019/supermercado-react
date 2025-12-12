import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import ProductGrid from "./Components/ProductList";
import SobreNosotros from "./Components/Sobrenosotros";
import Footer from "./Components/Footer";
import CartPage from "./Pages/CartPage";
import { CartProvider } from "./context/CartContext";
import Header from "./Components/Header";
import Carrousel from "./Components/Carrousel";
import Login from "./Pages/Login";
import SignIn from "./Pages/SignIn";
import Botontono from "./Components/BotonDark"; 

function AppContent() {
  const location = useLocation();
  const showCarrousel = location.pathname === "/";

  return (
    <div className="min-h-screen flex flex-col bg-blue-50 dark:bg-gray-900 dark:text-white relative">

      <div className="fixed bottom-6 right-6 z-50">
        <Botontono />
      </div>

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
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
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
