import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './basket/cartSlice'
import storage from 'redux-persist/lib/storage'
import { persistStore, persistReducer, FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER, } from 'redux-persist'

const basketPersistConfig  = {
    key: 'cart',
    storage,
whitelist: ['Items', 'totalItems']
}

const persistCardReducer = persistReducer(basketPersistConfig,cartReducer)

const store = configureStore({
    reducer: {
        cart: persistCardReducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
})
export const persistor = persistStore(store);

export default store