import React from 'react'
import './MealsSummaryStyling.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


export default function MealsSummary() {
    return (
        <Container className="text-center summary" >
            <Row>
                <Col md={6} className="m-auto p-3 data">
                    <h2>Delicious Food, Delivered To You</h2>
                    <p>
                        Choose your favorite meal from our broad selection of available meals
                        and enjoy a delicious lunch or dinner at home.
                    </p>
                    <p>
                        All our meals are cooked with high-quality ingredients, just-in-time and
                        of course by experienced chefs!
                    </p>
                </Col>
            </Row>


        </Container>
    )
}
