import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import mealsImage from '../../assets/meals.jpg'
import './Header.css'
import HeaderCartButton from './HeaderCartButton';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store';

export default function Header(props) {

    const dispatch = useDispatch();

    const resetCartHandler = ()=>{
        dispatch(cartActions.clearItem());
    }
    return (
        <>
            <header>
                <Navbar style={{ backgroundColor: '#7B241C'}} expand="lg">
                    <Container>
                        <Navbar.Brand href="#home" className="text-white"><h2>React Meals</h2></Navbar.Brand>
                        
                        <HeaderCartButton handleShow={props.handleShow}/>
                        <Button className='btn' id="reset-button" onClick={resetCartHandler}><b>Reset Cart</b></Button>
                    </Container>
                </Navbar>
            </header>

            <div className="main-image">
                <img src={mealsImage} alt="Loading"></img>
            </div>
        </>
    )
}
