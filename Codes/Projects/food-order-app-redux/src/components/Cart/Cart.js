import React, { useState } from 'react'
import {useSelector} from 'react-redux'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CheckOut from '../../UI/CheckOut';
import CartItem from './CartItem';
import { cartActions } from '../../store';
import {useDispatch} from 'react-redux'

export default function Cart(props) {

    const items = useSelector(state => state.cartReducer.items);
    const totalPrice = useSelector(state => state.cartReducer.totalPrice);
    const dispatch = useDispatch();

    const [status, setStatus] = useState('');

    const handleSubmit = () => {
        props.setCheckout(true)
    }

    const submitOrder = async (data) => {
        props.setBeforeSubmit(false)
        props.setisSubmitting(true);


        const newData = {
            ...data,
            orders: items
        }



        let response = await fetch('http://localhost:5001/api/v1/food/checkOut', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newData)
        });

        if (response.status === 201) {
            setStatus("Ordered Successfully")
        }
        else {
            // let { message } = await response.json();
            setStatus("Something went wrong !!")
        }

        props.setisSubmitting(false);
        props.setafterSubmit(true);

        dispatch(cartActions.clearItem())

    }

    const cartModal = (
        <>
            <Modal.Header closeButton>
                <Modal.Title>Orders !!</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {items.length === 0 ? <i>No items in Cart </i> :
                    <div className="p-3" style={{ overflowY: "scroll", maxHeight: "15rem" }}>
                        {

                            items.map(item =>
                                <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price} item={item} />)
                        }
                    </div>
                }

                <div className="my-3" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <h4>Total Amount</h4>
                    <h4>${totalPrice.toFixed(2)}</h4>
                </div>

                {props.isCheckout && <CheckOut submitOrder={submitOrder} />}
            </Modal.Body>
            {!props.isCheckout && <Modal.Footer>
                <Button variant="outline-danger" onClick={props.handleClose} style={{ borderRadius: "20px" }}>
                    Close
                </Button>
                <Button className={`${items.length === 0?'disabled':''}`} style={{ backgroundColor: '#7B241C', border: "none", borderRadius: "20px" }} onClick={() => handleSubmit()}>
                    Order
                </Button>
            </Modal.Footer>}
        </>
    )

    const submitModal = (

        <>
            <b class="p-2 text-success">{status}!!</b>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={props.handleClose} style={{ borderRadius: "20px" }} >
                    Close
                </Button>
            </Modal.Footer>
        </>


    )


    return (
        <Modal show={props.show} onHide={props.handleClose}>
            {props.beforeSubmit && cartModal}
            {props.isSubmitting && <p class="p-2 text-info">.......Submiting!!</p>}
            {props.afterSubmit && submitModal}
        </Modal >

    )
}
