import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "../features/product/ProductSlice.js"

const store = configureStore({
    reducer:{
        products:ProductSlice
    }
})

export default store;