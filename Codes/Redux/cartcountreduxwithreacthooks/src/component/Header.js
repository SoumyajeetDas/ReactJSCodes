import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decCartNumber } from '../action/action'


const Header = () => {


     // useSelector Hook is basically used to get the state from the Store and the access has been provide by the Provider in the index.js
    const cartItems = useSelector((state)=>state.cartItems)

     // useDispatch() is used to prepare the dispatch method which will call the action from the View as said in the Redux Architecture
    const dispatch=useDispatch();

    const removeCartHandler = ()=>{
        dispatch(decCartNumber());
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Shopify</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">

                            <button className="nav-link active" aria-current="page" href="/" onClick = {()=>removeCartHandler()}>Remove from Cart</button>
                        </li>

                    </ul>
                </div>

                <div>
                    <span className="material-symbols-rounded">
                        shopping_cart
                    </span>
                    <div style={{position: 'absolute', top:'0px', right:'5px' }}>
                        {cartItems.actioncartItems.length}
                    </div>
                </div>
            </div>
        </nav>
    )
}


export default Header