import { configureStore } from "@reduxjs/toolkit";
import {cartSlice} from './cart-slice';
import {statusSlice} from './status-slice'


const store = configureStore({
    reducer: {
        cartReducer: cartSlice.reducer,
        statusReducer: statusSlice.reducer
    }

})


export const cartActions = cartSlice.actions
export const statusActions = statusSlice.actions

export default store;