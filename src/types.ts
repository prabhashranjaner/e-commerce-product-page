import type { Dispatch } from "react";

export type ItemType = {
  id: string;
  name: string;
  quantity: number;
  price: number;
};

export type CartType = ItemType[];

export type ActionType =
  | { type: "item/add"; payload: ItemType }
  | { type: "item/remove"; payload: string }
  | { type: "item/update"; payload: { id: string; quantity: number } }
  | { type: "cart/clear" };

export type CartContextType = {
  state: CartType;
  dispatch: Dispatch<ActionType>;
};
