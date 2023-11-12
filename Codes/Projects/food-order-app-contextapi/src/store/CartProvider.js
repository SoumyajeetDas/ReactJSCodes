import { useReducer } from "react"
import CartContext from "./cart-context"


const intialCartState = {
    items: [],
    totalPrice: 0
}



const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        // const updatedItems = state.items.concat(action.item);
        const updatedtotalPrice = state.totalPrice + action.item.price * action.item.amount; // Costing


        /******************Checking new or updated element**************************/

        // 1. Find the index
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id); // findIndex will return the index if value found otherwise -1
        
        // 2. Find the item with the index
        const existingCartItem = state.items[existingCartItemIndex]; // If the index is incorrect then the value of existingCartItem is undefined


        // 3. Update the item if present and add in the list if new
        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            }

            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem
        }
        else {
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalPrice: updatedtotalPrice
        }
    }

    if (action.type === "REMOVE") {

         // 1. Find the index
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.id);


        // 2. Find the item with the index
        const existingCartItem = state.items[existingCartItemIndex];

       // 3. Update the amount for the item if present and remove it when the amount is 0
        const updatedtotalPrice = state.totalPrice - existingCartItem.price;

        let updatedItems;

        if (existingCartItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !== action.id);
        }
        else {
            const updatedItem = { ...existingCartItem, amount: existingCartItem.amount - 1 }
            updatedItems = [...state.items]
            updatedItems[existingCartItemIndex] = updatedItem
        }

        return {
            items: updatedItems,
            totalPrice: updatedtotalPrice
        }
    }

    if(action.type==="CLEAR"){
        return intialCartState;
    }

    return intialCartState;
}

const CartProvider = (props) => {


    const [cartState, dispatchCartAction] = useReducer(cartReducer, intialCartState);

    // AddItem and Remove Item is used in different components by useContext().
    const addItemToCartHandler = (item) => {
        dispatchCartAction({ type: 'ADD', item }) // This will call the cartReducer and will update the state.
    }

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({ type: 'REMOVE', id })
    }

    const clearItemFormHandler = ()=>{
        dispatchCartAction({ type: 'CLEAR'})
    }

    // Cart Context is passed as value prop to the other components 
    const cartContext = {
        items: cartState.items, // Items array which consist of objects of Item details from the cartState.
        totalPrice: cartState.totalPrice, // The total price of all the items in cart is getting updated.
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        clearItem:clearItemFormHandler
    }



    return (

        // Passing the cartcontext value prop data to other components using useContext()
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>

    );
}

export default CartProvider