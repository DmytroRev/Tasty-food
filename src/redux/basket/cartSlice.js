import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    Items: [],
    totalItems: 0,
  },
  reducers: {
    addItem: (state, action) => {
      state.Items.push(action.payload);
      state.totalItems += 1;
    },
    removeItem: (state, action) => {
      state.Items = state.Items.filter((item) => item.id !== action.payload.id);
      state.totalItems -= 1;
    },
    clearCart: (state) => {
      state.Items = [];
      state.totalItems = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer