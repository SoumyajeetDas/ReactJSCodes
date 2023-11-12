import './App.css';
import React, { useState } from 'react';
import Header from './components/Layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';

function App() {

  const [show, setShow] = useState(false);
  const [isCheckout, setCheckout] = useState(false);

  const [beforeSubmit, setBeforeSubmit] = useState(true);
  const [isSubmitting, setisSubmitting] = useState(false);
  const [afterSubmit, setafterSubmit] = useState(false);

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
