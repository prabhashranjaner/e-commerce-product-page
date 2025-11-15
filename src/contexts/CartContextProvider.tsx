// const CartContext

import { createContext, useContext, useReducer, type ReactNode } from "react";
import type { ActionType, CartContextType, CartType } from "../types";

const CartContext = createContext<CartContextType | null>(null);

function reducer(state: CartType, action: ActionType) {
  switch (action.type) {
    case "item/add":
      return [...state, action.payload];
    case "item/remove":
      return state.filter((item) => item.id !== action.payload);
    case "item/update":
      return state.map((item) => {
        if (item.id === action.payload.id)
          return { ...item, quantity: action.payload.quantity };
        else return item;
      });
    case "cart/clear":
      return [];

    default:
      return state;
  }
}

export default function CartContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [state, dispatch] = useReducer(reducer, []);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

// eslint-disable-next-line
export function useCart() {
  const context = useContext(CartContext);

  if (!context) throw new Error("Context called out of provider");

  return context;
}
