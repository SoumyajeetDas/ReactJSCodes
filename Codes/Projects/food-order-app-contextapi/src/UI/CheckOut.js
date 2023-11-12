import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './CheckOut.css'


const isEmpty = value => value.trim() === ''; // Will return true if Empty
const isFiveChars = value => value===''?false:value.toString().length === 5

export default function CheckOut(props) {

    const [formData, setFormData] = useState({
        name: '',
        street: '',
        city: '',
        postalCode: ''
    });

    const [formValididty, setFormValididty] = useState({
        name: true,
        street: true,
        city: true,
        postalCode: true
    })

    const handlInput = (e) => {

        setFormData((prevState) => {
            return {
                ...prevState,
                [e.target.id]: e.target.value
            }

        })
    }

    const checkOut = (e) => {

        e.preventDefault();


        const enteredNameIsValid = !isEmpty(formData.name); // isEmpty will return true if no data so need to reverese the boolean.
        const enteredStreet = !isEmpty(formData.street); // isEmpty will return true if no data so need to reverese the boolean.
        const enteredCity = !isEmpty(formData.city); // isEmpty will return true if no data so need to reverese the boolean.
        const enteredPostal = isFiveChars(formData.postalCode); // Postal Code will be 5 characters then only cond. will pass


        setFormValididty({
            name: enteredNameIsValid,
            street: enteredStreet,
            city: enteredCity,
            postalCode: enteredPostal
        });


        const formValid = enteredNameIsValid && enteredStreet && enteredCity && enteredPostal;

        if (!formValid) {
            console.log("Invalid")
            return;
        }
        props.submitOrder(formData);
        
    }

    return (
        <Form class="px-2" style={{ maxHeight: "16rem", overflowY: "scroll" }} onSubmit={checkOut}>
            <Form.Group className="mb-3 formgroup" >
                <Form.Label htmlFor="name" style={{ width: '6rem' }}>Your Name</Form.Label>
                <div class="textbox">
                    <Form.Control id="name" type="text" placeholder="Enter your name" onChange={handlInput} />
                    {!formValididty.name && <b class="text-danger">Please enter the name</b>}
                </div>

            </Form.Group>

            <Form.Group className="mb-3 formgroup" >
                <Form.Label style={{ width: '6rem' }} htmlFor="street" >Street</Form.Label>
                <div class="textbox">
                    <Form.Control id="street" type="text" placeholder="Enter your street" onChange={handlInput} />
                    {!formValididty.street && <b class="text-danger">Please enter the street</b>}
                </div>

            </Form.Group>

            <Form.Group className="mb-3 formgroup" >
                <Form.Label style={{ width: '6rem' }} htmlFor="postal">Portal Code</Form.Label>

                <div class="textbox">
                    <Form.Control id="postalCode" type="number" placeholder="Enter your portal code" onChange={handlInput} />
                    {!formValididty.postalCode && <b class="text-danger">Please enter the Postal Code of 5 digits</b>}
                </div>

            </Form.Group>

            <Form.Group className="mb-3 formgroup" >
                <Form.Label style={{ width: '6rem' }} htmlFor="city">City</Form.Label>

                <div class="textbox">
                    <Form.Control id="city" type="text" placeholder="Enter your city" onChange={handlInput} />
                    {!formValididty.city && <b class="text-danger">Please enter the city</b>}
                </div>

            </Form.Group>

            <Button  type="submit" style={{ backgroundColor: '#7B241C', border: "none", borderRadius: "20px" }}>
                Order
            </Button>
        </Form>
    )
}
