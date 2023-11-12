import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <Container className="my-5">
            <Row>
                <Col sm={4} className="m-auto">
                    <div id="footer">
                        soumyajeet-portfolio.netlify.app © 2022
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer
