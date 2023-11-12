import React, {useState,useContext} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CartContext from '../../store/cart-context'

export default function MealItemForm(props) {

    let [enteredAmount, setAmount] = useState(1);
    const [amountIsValid, setAmountIsValid] = useState(false);
    const cartContext = useContext(CartContext);

    const submitHandler = (e)=>{
        e.preventDefault();

        enteredAmount *=1; // Converting into a number

        // Validation of Cart Data
        if(enteredAmount<1 || enteredAmount>5){

            setTimeout(()=>{
                setAmountIsValid(false);
            },2000)
            setAmountIsValid(true);
            return;
        }


        setAmountIsValid(false);

        // Calling the addItemToCartHandler() in CartProvider.js to change the state(adding item within the list)
        cartContext.addItem({
            id:props.id,
            name:props.name,
            amount:enteredAmount,
            price:props.price
        });
    }

    return (
        <Form onSubmit = {submitHandler}>
            <div style={{ display: 'flex', flexDirection: "column" }}>


                <Form.Group className="mb-3">
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        <Form.Label className="me-2" htmlFor={props.id}><b>Amount</b></Form.Label>
                        <Form.Control id={props.id} type="text" style={{ width: "40px", textAlign: "left" }} defaultValue="1" onChange ={(e)=>setAmount(e.target.value)}/>
                    </div>
                </Form.Group>

                
                <Button style={{ backgroundColor: '#7B241C', border: "none", borderRadius: "20px" }} type="submit">
                    <b>+ Add</b>
                </Button>


                {amountIsValid && <b className = "text-danger">Please enter a valid amount</b>}
            </div>
           
        </Form>
    )
}
