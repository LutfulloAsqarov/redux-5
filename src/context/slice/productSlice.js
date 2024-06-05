import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
};

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        editProduct: (state, action) => {
            state.value = action.payload;
            console.log(state.value);
        },
    },
});

export const { editProduct } = productSlice.actions;
export default productSlice.reducer;
