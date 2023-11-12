import { createSlice, configureStore } from "@reduxjs/toolkit";


const initialCartState = {
    items: [],
    totalPrice: 0
}


const cartSlice = createSlice({
    name: 'cart',
    initialState: initialCartState,
    reducers: {
        addItem(state, action) {


            // const updatedItems = state.items.concat(action.item);
            state.totalPrice = state.totalPrice + action.payload.price * action.payload.amount; // Costing


            /******************Checking new or updated element**************************/

            // 1. Find the index
            const existingCartItemIndex = state.items.findIndex(item => item.id === action.payload.id); // findIndex will return the index if value found otherwise -1

            // 2. Find the item with the index
            const existingCartItem = state.items[existingCartItemIndex]; // If the index is incorrect then the value of existingCartItem is undefined


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



const store = configureStore({
    reducer: {
        cartReducer: cartSlice.reducer
    }

})


export const cartActions = cartSlice.actions

export default store;