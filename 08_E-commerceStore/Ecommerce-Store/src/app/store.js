import { configureStore } from "@reduxjs/toolkit";
import productReducer from "../Features/products/productSlice"

const store = configureStore({
    reducer:{
        products: productReducer
    }
})

export default store;