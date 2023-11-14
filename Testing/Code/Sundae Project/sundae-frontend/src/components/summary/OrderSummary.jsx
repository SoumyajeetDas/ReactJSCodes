import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useOrderDetails } from '../../hooks/useOrderDetails';
import SummaryForm from './SummaryForm.jsx';

const OrderSummary = ({ setOrderPhase }) => {
  const { total, optionCounts } = useOrderDetails();

  // Object to Array
  const scoopsArray = Object.entries(optionCounts.scoops); // [["Choclate",1],["Vanilla",2]]
  const toppingsArray = Object.entries(optionCounts.toppings); // [["M&Ms",1],["Mochi",2]]

  const scoopList = scoopsArray.map(([key, value]) => (
    <li key={key}>
      {value} {key}
    </li>
  ));
  const toppingsList = toppingsArray.map(([key]) => <li key={key}>{key}</li>);
  return (
    <div>
      <Container>
        <h1>Order Summary</h1>
        <Row>
          <Col sm={12}>
            <h2>Scoops: ${total.scoops.toFixed(2)}</h2>
            <ul>{scoopList}</ul>
          </Col>
          <Col sm={12}>
            {!total.toppings || <h2>Toppings: ${total.toppings.toFixed(2)}</h2>}
            <ul>{toppingsList}</ul>
          </Col>
          <Col sm={12}>
            <h2>Total: ${(total.scoops + total.toppings).toFixed(2)}</h2>
          </Col>
        </Row>
      </Container>
      <SummaryForm setOrderPhase={setOrderPhase} />
    </div>
  );
};

export default OrderSummary;
