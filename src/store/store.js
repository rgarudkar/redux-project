import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Uses localStorage for web
import cartSlice from "./cartSlice";
import productSlice from "./productSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"], // Only persist the 'cart' reducer
};

const rootReducer = {
  cart: cartSlice,
  products: productSlice,
};

const persistedReducer = persistReducer(persistConfig, combineReducers(rootReducer));

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore redux-persist actions to avoid serialization warnings
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),
});

// Create a persistor object
export const persistor = persistStore(store);