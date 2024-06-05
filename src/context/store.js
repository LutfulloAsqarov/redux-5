import { configureStore } from "@reduxjs/toolkit";
import wishlistSlice from "./slice/wishlistSlice";
import { api } from "./api/api";
import productSlice from "./slice/productSlice";

export const store = configureStore({
    reducer: {
        wishlist: wishlistSlice,
        productEdit: productSlice,
        [api.reducerPath]: api.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});
