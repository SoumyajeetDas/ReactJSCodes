import React, { useEffect, useState } from 'react';
import { useOrderDetails } from '../../hooks/useOrderDetails';
import { Button, Col, Container, Row } from 'react-bootstrap';
import axios from 'axios';
import AlertBanner from '../common/AlertBanner.jsx';

const OrderConfirmation = ({ setOrderPhase }) => {
  const [orderNumber, setOrderNumber] = useState(null);
  const [showError, setShowError] = useState(false);
  const { resetOrder } = useOrderDetails();

  const handleClick = () => {
    resetOrder();
    setOrderPhase('inProgress');
  };

  useEffect(() => {
    (async () => {
      try {
        let res = await axios.post(
          'http://localhost:3030/api/v1/order/addOrder',
        );

        setOrderNumber(res.data.orderNumber);
      } catch (err) {
        setShowError(true);
      }
    })();
  }, []);

  if (orderNumber) {
    return (
      <Container>
        <Row>
          <Col className="text-center">
            <h1>Thank You</h1>
            <p>Your order number is {orderNumber}</p>

            <Button onClick={handleClick}>Create new order</Button>
          </Col>
        </Row>
      </Container>
    );
  } else if (showError) {
    return (
      <Container>
        <Row>
          <Col className="text-center">
            <AlertBanner />
          </Col>
        </Row>
      </Container>
    );
  } else {
    return (
      <Container>
        <Row>
          <Col className="text-center">
            <h3>Loading...</h3>
          </Col>
        </Row>
      </Container>
    );
  }
};

export default OrderConfirmation;
