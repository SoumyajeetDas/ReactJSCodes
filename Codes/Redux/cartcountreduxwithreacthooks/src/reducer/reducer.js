const initialState = {
    actioncartItems:[]
}

let newCart = [];

const cartItems = (state=initialState, action) => { // Redux Dev tells always to put an initialSate to state.

    
    switch (action.type) {
        case"ADD_TO_CART":
            
            // We should not make changes directly on the state object/array.
            newCart= state.actioncartItems
            newCart.push(action.payload)

            // state.actioncartItems.push(action.payload)
            return {
                actioncartItems: newCart
            }
        
        case "REMOVE_FROM_CART":
            
            // We should not make changes directly on the state object/array.
            newCart= state.actioncartItems
            newCart.pop();

            // state.actioncartItems.pop()
            return {
                actioncartItems: newCart
            }

        default:
          
            return state;

    }
}

export default cartItems;