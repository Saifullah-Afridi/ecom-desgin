import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface cartItemInterface {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  size: string;
  color: string;
  totalPrice: number;
}

interface cartIntialStateInterface {
  items: cartItemInterface[];
}

interface AddItemPayload {
  id: string;
  name: string;
  image: string;
  price: number;
  quantity: number;
  size: string;
  color: string;
}

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    items: [],
  } as cartIntialStateInterface,
  reducers: {
    addItem: (state, action: PayloadAction<AddItemPayload>) => {
      const { id, size, color, quantity, price } = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === id && item.size === size && item.color === color,
      );

      if (existingItem) {
        existingItem.quantity += quantity;
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
        return;
      }

      state.items.push({
        ...action.payload,
        totalPrice: price * quantity,
      });
    },
    removeItem: (
      state,
      action: PayloadAction<{ id: string; size: string; color: string }>,
    ) => {
      state.items = state.items.filter(
        (item) =>
          !(
            item.id === action.payload.id &&
            item.size === action.payload.size &&
            item.color === action.payload.color
          ),
      );
    },
    updateQuantity: (
      state,
      action: PayloadAction<{
        id: string;
        size: string;
        color: string;
        quantity: number;
      }>,
    ) => {
      const { id, size, color, quantity } = action.payload;
      const existingItem = state.items.find(
        (item) => item.id === id && item.size === size && item.color === color,
      );

      if (existingItem) {
        existingItem.quantity = Math.max(quantity, 1);
        existingItem.totalPrice = existingItem.quantity * existingItem.price;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
