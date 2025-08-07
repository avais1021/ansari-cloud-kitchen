import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItem: [],
        totalPrice: 0,
    },
    reducers: {
        AddItem: (state, action) => {
            // state.push(state.find((item) => item.id === action.payload))
            const avoidDublicateItem = state.cartItem.find((item) => item.id === action.payload.id)
            if (!avoidDublicateItem) {
                state.cartItem.push(action.payload)
            }

            // const deliveryCharge = 20;
            // const totalPrice = state.cartItem.reduce((a, b) => {
            //     return a + b.price * b.food_quantity;
            // }, 0);
            // const totalPriceIncludeDelivery = state.cartItem.length > 0 ? totalPrice + deliveryCharge : 0;
            // state.totalPrice = totalPriceIncludeDelivery
        },
        RemoveItem: (state, action) => {
            state.cartItem = state.cartItem.filter((item) => item.id !== action.payload)
        },
        AddQty: (state, action) => {
            const matchItem = state.cartItem.find((item) => item.id === action.payload.id);
            if (matchItem) {
                if (action.payload.type === "increment") {
                    matchItem.food_quantity += 1;
                } else if (action.payload.type === "decrement" && matchItem.food_quantity > 1) {
                    matchItem.food_quantity -= 1;
                }
            }

        },
        totalPrice: (state, action) => {
            // const deliveryCharge = 20;
            const totalPrice = state.cartItem.reduce((a, b) => {
                return a + b.discountPrice * b.food_quantity;
            }, 0);
            // const totalPriceIncludeDelivery = state.cartItem.length > 0 ? totalPrice + deliveryCharge : 0;
            state.totalPrice = totalPrice
        }

    }

})

export const { AddItem, RemoveItem, AddQty, totalPrice } = cartSlice.actions

export default cartSlice.reducer