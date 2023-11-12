import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import mealsImage from '../../assets/meals.jpg'
import './Header.css'
import HeaderCartButton from './HeaderCartButton';

export default function Header(props) {
    return (
        <>
            <header>
                <Navbar style={{ backgroundColor: '#7B241C'}} expand="lg">
                    <Container>
                        <Navbar.Brand href="#home" className="text-white"><h2>React Meals</h2></Navbar.Brand>

                        <HeaderCartButton handleShow={props.handleShow}/>
                    </Container>
                </Navbar>
            </header>

            <div className="main-image">
                <img src={mealsImage} alt="Loading"></img>
            </div>
        </>
    )
}
