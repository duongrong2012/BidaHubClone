import Product from "@/types/product";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
    products: Product[];
}

const initialState: InitialState = {
    products: [],
}

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        getProducts: () => { },
        getProductsSuccess: (state, { payload }: PayloadAction<Product[]>) => {
            state.products = payload;
        },
        getProductsFailure: () => {

        }
    }
})

export const ProductsActions = productsSlice.actions

export default productsSlice