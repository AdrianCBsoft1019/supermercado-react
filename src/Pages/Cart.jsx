import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Cart = () => {
    const { user, setRedirectAfterLogin } = useAuth();
    const navigate = useNavigate();

    const [items, setItems] = useState([]);
    const [showInvoice, setShowInvoice] = useState(false);

    useEffect(() => {
        if (!user) {
            setRedirectAfterLogin("/cart");
            navigate("/signin");
        }
    }, [user]);

    const handlePay = () => {
        if (!user) {
            setRedirectAfterLogin("/cart");
            navigate("/signin");
            return;
        }

        setShowInvoice(true);
    };

    if (!user) return null;

    return (
        <div className="p-6">
            <h1 className="text-xl font-bold mb-4">Carrito</h1>

            {items.length === 0 ? (
                <p>No hay productos.</p>
            ) : (
                items.map((i, idx) => (
                    <div key={idx} className="p-3 border mb-2">
                        {i.name} - ${i.price}
                    </div>
                ))
            )}

            <button
                onClick={handlePay}
                className="bg-green-600 text-white p-2 w-full rounded mt-3"
            >
                Pagar
            </button>

            {showInvoice && (
                <div className="mt-6 p-4 bg-gray-100 rounded shadow">
                    <h2 className="text-lg font-bold mb-2">Factura</h2>
                    <p>Cliente: {user.email}</p>
                    <p>Productos: {items.length}</p>
                    <p>Total: ${items.reduce((a, b) => a + b.price, 0)}</p>

                    <button
                        onClick={() => navigate("/")}
                        className="mt-3 bg-blue-600 text-white p-2 rounded"
                    >
                        Volver al Home
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cart;