import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './basket/cartSlice'

const store = configureStore({
    reducer: {
        cart: cartReducer
    }
})

export default store