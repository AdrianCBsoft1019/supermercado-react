import React, { createContext, useContext, useEffect, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  items: [], 
  paymentMethod: "card", 
};

function reducer(state, action) {
  switch (action.type) {
    case "INIT":
      return { ...state, ...action.payload };
    case "ADD": {
      const item = action.payload;
      const exists = state.items.find((i) => i.id === item.id);
      if (exists) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.id === item.id ? { ...i, qty: i.qty + 1 } : i
          ),
        };
      }
      return { ...state, items: [...state.items, { ...item, qty: 1 }] };
    }
    case "REMOVE":
      return { ...state, items: state.items.filter((i) => i.id !== action.payload) };
    case "UPDATE_QTY":
      return {
        ...state,
        items: state.items
          .map((i) =>
            i.id === action.payload.id ? { ...i, qty: action.payload.qty } : i
          )
          .filter((i) => i.qty > 0),
      };
    case "SET_PAYMENT":
      return { ...state, paymentMethod: action.payload };
    case "CLEAR":
      return { ...state, items: [] };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    try {
      const raw = localStorage.getItem("cart_state_v1");
      if (raw) dispatch({ type: "INIT", payload: JSON.parse(raw) });
    } catch (e) {}
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem("cart_state_v1", JSON.stringify(state));
    } catch (e) {}
  }, [state]);

  const addItem = (product) => dispatch({ type: "ADD", payload: product });
  const removeItem = (id) => dispatch({ type: "REMOVE", payload: id });
  const updateQty = (id, qty) => dispatch({ type: "UPDATE_QTY", payload: { id, qty } });
  const setPaymentMethod = (method) => dispatch({ type: "SET_PAYMENT", payload: method });
  const clear = () => dispatch({ type: "CLEAR" });

  const subtotal = state.items.reduce((s, it) => s + it.price * it.qty, 0);
  const shipping = subtotal === 0 ? 0 : subtotal >= 50 ? 0 : 5;
  const total = +(subtotal + shipping).toFixed(2);

  const baseMin = 2, baseMax = 4;
  const codExtra = state.paymentMethod === "cod" ? 1 : 0;
  const eta = `${baseMin + codExtra}-${baseMax + codExtra} días`;

  return (
    <CartContext.Provider
      value={{
        ...state,
        addItem,
        removeItem,
        updateQty,
        setPaymentMethod,
        clear,
        subtotal,
        shipping,
        total,
        eta,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}