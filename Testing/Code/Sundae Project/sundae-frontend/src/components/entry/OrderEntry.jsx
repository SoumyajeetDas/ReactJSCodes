import React from 'react';
import Options from './Options.jsx';
import { useOrderDetails } from '../../hooks/useOrderDetails';
import { Button, Col, Container, Row } from 'react-bootstrap';

const OrderEntry = ({ setOrderPhase }) => {
  const { total } = useOrderDetails();
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <Options optionType="scoops" />
          <Options optionType="toppings" />
          <h2>Grand total: ${(total.scoops + total.toppings).toFixed(2)}</h2>
          {/* <SummaryForm setOrderPhase={setOrderPhase} /> */}
          <Button
            disabled={total.scoops ? false : true}
            onClick={() => setOrderPhase('review')}
          >
            Order Sundae
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderEntry;
