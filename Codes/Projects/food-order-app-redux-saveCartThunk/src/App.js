import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import Notification from './UI/Notification';
import { useDispatch, useSelector } from 'react-redux';
import { saveCartData, fetchCartData } from './store/cart-slice'

const App = () => {

  const [show, setShow] = useState(false);
  const [isCheckout, setCheckout] = useState(false);

  const [beforeSubmit, setBeforeSubmit] = useState(true);
  const [isSubmitting, setisSubmitting] = useState(false);
  const [afterSubmit, setafterSubmit] = useState(false);

  const cart = useSelector(state => state.cartReducer);
  const statusShow = useSelector(state => state.statusReducer.statusShow)
  const dispatch = useDispatch();

  // Both the dispatcher can be written anywhere other than the App.js path
  // We cannot do sideeffects(actions with the useEffect), async tasks within the reducers.
  // For doing that we use Thunk and Componenets. For keeping componenent lean we created the fetchData() and saveData() thunk.
  // Code written in the fetchCartData() and saveData() can be kept within the useEffect() and there was no requirement of 
  // dispatching the thunks. But done just to keep the UI part with less logic.

  useEffect(() => {

    dispatch(fetchCartData())


    // eslint-disable-next-line
  }, [])


  // Whenever there will be change in cart the cart data will get updated in DB except the first render
  // For first render fetchCartData() will be called in the above useEffect().
  // The cart.changed will be false as inside the fetchCartData() the value not be modified.
  useEffect(() => {

    if(cart.changed){

      // saveCartData() saves the data in cart whenever the cart gets modified. Suring addItem() and removeItem() reducers 
      // in cart-slice

      dispatch(saveCartData(cart))
    }


    // eslint-disable-next-line
  }, [cart, dispatch])



  const handleClose = () => {

    setCheckout(false);
    setShow(false);

    setBeforeSubmit(true);
    setisSubmitting(false);
    setafterSubmit(false);
  }


  const handleShow = () => setShow(true);



  return (

    <>
      {statusShow && <Notification />}
      <Header handleShow={handleShow} />
      <Meals />
      <Cart handleClose={handleClose}
        show={show}
        isCheckout={isCheckout}
        setCheckout={setCheckout}
        beforeSubmit={beforeSubmit}
        isSubmitting={isSubmitting}
        afterSubmit={afterSubmit}
        setBeforeSubmit={setBeforeSubmit}
        setisSubmitting={setisSubmitting}
        setafterSubmit={setafterSubmit}
      />
    </>


  );
}

export default App;
