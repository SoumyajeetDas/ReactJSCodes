import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { decCartNumber } from '../action/action'


const Header = (props) => {

    
    const removeCartHandle = ()=>{
        props.removeFromCartHandler();
    }

    //console.log("In Header",props.cartData.cartItems.actioncartItems.length)
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


                            <button className="nav-link active" aria-current="page" href="/" onClick = {()=>removeCartHandle()}>Remove from Cart</button>
                        </li>

                    </ul>
                </div>

                <div>
                    <span className="material-symbols-rounded">
                        shopping_cart
                    </span>
                    <div style={{position: 'absolute', top:'0px', right:'5px' }}>

                        {props.cartData.cartItems.actioncartItems.length}
                    </div>
                </div>
            </div>
        </nav>
    )
}


export default Header