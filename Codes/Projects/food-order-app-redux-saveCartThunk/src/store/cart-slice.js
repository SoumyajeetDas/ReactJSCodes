import { createSlice } from "@reduxjs/toolkit";
import { statusActions } from "./index";

const initialCartState = {
    items: [],
    totalPrice: 0,
    changed: false
}

// In the addItem() and removeItem() there is no async code or sideEffects(using useEffects), only data tarnsforamation is there.
// Within reducer we can keep only sychronous codes and data tarnsforamation codes.
// There is no problem if we have a fat reducer, but better we should not be fat component.

export const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {

        replaceCart(state, action) {
            state.items = action.payload.items;
            state.totalPrice = action.payload.totalPrice
        },

        addItem(state, action) {


            // const updatedItems = state.items.concat(action.item);
            state.totalPrice = state.totalPrice + action.payload.price * action.payload.amount; // Costing


            /******************Checking new or updated element**************************/

            // 1. Find the index
            const existingCartItemIndex = state.items.findIndex(item => item.id === action.payload.id); // findIndex will return the index if value found otherwise -1

            // 2. Find the item with the index
            const existingCartItem = state.items[existingCartItemIndex]; // If the index is incorrect then the value of existingCartItem is undefined


            state.changed = true; // This is required to confirm whethere the data will be save din DB or not. Explanation in App.js

            // 3. Update the item if present and add in the list if new


            if (existingCartItem) {
                const updatedItem = {
                    ...existingCartItem,
                    amount: existingCartItem.amount + action.payload.amount
                }

                state.items[existingCartItemIndex] = updatedItem

            }
            else {

                // We can use both conact and push. However concat returns a new array while push adds data on the existing array
                // state.items = state.items.concat(action.payload)
                state.items.push(action.payload)
            }


        },

        removeItem(state, action) {

            // 1. Find the index
            const existingCartItemIndex = state.items.findIndex(item => item.id === action.payload);


            // 2. Find the item with the index
            const existingCartItem = state.items[existingCartItemIndex];

            state.changed = true; // This is required to confirm whethere the data will be save din DB or not. Explanation in App.js

            // 3. Update the amount for the item if present and remove it when the amount is 0
            state.totalPrice = state.totalPrice - existingCartItem.price;

            if (state.totalPrice < 0) {
                state.totalPrice = 0
            }

            if (state.items[existingCartItemIndex].amount === 1) {
                state.items = state.items.filter(item => item.id !== action.payload);
            }
            else {
                state.items[existingCartItemIndex].amount = state.items[existingCartItemIndex].amount - 1
            }

        },

        clearItem(state) {
            // This will not work as u r assigning / changing the refernce of state but not mutating the state.
            // state =[];

            // Mutating the items in the state.
            // state.items.length = 0;

            state.items = [];
            state.totalPrice = 0;
        }


    }
});


/****************************** Thunk ************************************* */

export const fetchCartData = () => {
    return async (dispatch) => {
        let data = await fetch('http://localhost:5001/api/v1/food/ordercart/');



        if (data.status === 200) {
            let dataJson = await data.json();

            dispatch(cartSlice.actions.replaceCart(dataJson.orders[0]));

            dispatch(statusActions.showNotification({
                title: "Data Fetched...",
                message: "Fetching Data Successful..."
            }))
        }
        else {
            dispatch(statusActions.showNotification({
                title: "Cannot Fetch Data...",
                message: "Fetching Data Unsuccessful..."
            }))
        }
    }
}

export const saveCartData = (cart) => {

    return async (dispatch) => {
        dispatch(statusActions.showStatus())

        dispatch(statusActions.showNotification({
            title: "Sending...",
            message: "Sending Cart Data..."
        }))

        let res = await fetch(`http://localhost:5001/api/v1/food/ordercart`, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(cart)
        });

        if (res.status === 200) {
            dispatch(statusActions.showNotification({
                title: "Success!!",
                message: "Sent Cart Data Success!!"
            }))

            setTimeout(() => {
                dispatch(statusActions.showStatus())
            }, 3000)
        }
        else {
            dispatch(statusActions.showNotification({
                title: "Could not Sent...",
                message: "Sending Cart Data UnSeccesful :)"
            }))
            setTimeout(() => {
                dispatch(statusActions.showStatus())
            }, 3000)
        }
    }

}


