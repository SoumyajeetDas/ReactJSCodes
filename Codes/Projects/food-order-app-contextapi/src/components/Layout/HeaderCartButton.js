import React, { useContext, useEffect, useState } from 'react'
import CartContext from '../../store/cart-context'
import './HeaderCartButtonStyling.css'


export default function HeaderCartButton(props) {

    const cartContext = useContext(CartContext);

    const [buttonIsHighlighted, setButtonIsHighlighted] = useState(false);


    const { items } = cartContext;

    // This takes each item from the array of food items and checks the no. of/amount of that particular item (which gets updated 
    // from the MealItemForm input value and updates the cartContext with the help of useReducer) and adds it and updates the cart.
    const numberOfCartItems = cartContext.items.reduce((total, item) => {
        return total + item.amount
    }, 0)

    useEffect(() => {

        // If there is no item in cart then no bumps.
        if (items.length === 0) {
            return;
        }


        setButtonIsHighlighted(true);


        // If we don't make to false then buttonIsHighlighted will remain true and bumps will happen for first time the whole page 
        // reloads
        const timer = setTimeout(() => {
            setButtonIsHighlighted(false);
        }, 300);


        // Flush the timer
        return () => {
            clearTimeout(timer);
        }


    }, [items]) // When there will be a add or delete in the items aray then only the useEffect will run and the bump will happen
    return (

        <div id="cart" onClick={() => props.handleShow()} className={`${buttonIsHighlighted ? 'bump' : ''}`}>
            <span className="material-symbols-rounded text-white" style={{ cursor: "pointer" }}>
                shopping_cart
            </span>
            <span className="text-white" style={{ cursor: "pointer" }}><b>Your cart</b></span>
            <span className="text-white text-center p-2" id="number" style={{ cursor: "pointer" }}>{numberOfCartItems}</span>
        </div>

    )
}
