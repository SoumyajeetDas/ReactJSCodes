import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './Header.css'

const Header:React.FC = () => {
    return (
        <Container className='mt-5'>
            <Row>
                <Col sm={12}>
                    <div id="header">
                        <h1>Planify</h1>
                    </div>

                </Col>
                <Col sm={6} className="m-auto">
                    <div className='d-flex justify-content-center align-items-center'>
                        <img id="photo" src="planify.gif" height="100" width="100" alt="Laoding"></img>
                    </div>

                </Col>
            </Row>
        </Container>
    )
}

export default Header
