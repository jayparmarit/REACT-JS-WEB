import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products:[],
}

const ProductSlice = createSlice ({
    name:"product",
    initialState,
    reducer:{

    }
})

export default ProductSlice.reducer