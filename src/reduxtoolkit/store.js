import {configureStore} from "@reduxjs/toolkit"
import cartSliceReducers from "./cartSlice"

const store = configureStore({
    reducer : {
        cart : cartSliceReducers
    }
})

export default store