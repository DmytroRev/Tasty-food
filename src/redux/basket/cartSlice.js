import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    Items: [],
    totalItems: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.Items.find(item => item.id === action.payload.id)
      if(existingItem) {
        existingItem.quantity += 1
      } else {
        state.Items.push({...action.payload, quantity: 1})
      }
      state.totalItems += 1
    },
    removeItem: (state, action) => {
      const existingItem = state.Items.find(item => item.id === action.payload.id)
      if(existingItem) {
        if(existingItem.quantity > 1) {
          existingItem.quantity -= 1
        } else {
          state.Items = state.Items.filter(item => item.id  !== action.payload.id)
        }
        state.totalItems -= 1
      }
    },
    clearCart: state => {
      state.Items = []
      state.totalItems = 0
    }
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer