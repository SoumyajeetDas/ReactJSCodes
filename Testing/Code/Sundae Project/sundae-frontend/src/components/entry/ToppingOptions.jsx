import React from 'react';
import { Col, Form } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import ScoopO from './Options.jsx';
import { useOrderDetails } from '../../hooks/useOrderDetails';

const ScoopOptions = ({ item, optionType }) => {
  const { updateItemCount } = useOrderDetails();

  const handleChange = (e) => {
    let amount = e.target.checked ? 1 : 0;
    updateItemCount(item.name, amount, 'toppings');
  };
  return (
    <Col md={4}>
      <Card className="m-3" style={{ border: 'none' }}>
        <Card.Img
          variant="top"
          // height="100%"
          // width="200px"
          src={item.imagePath}
          alt={`${item.name} ${optionType}`}
        />
        <Card.Body>
          <Card.Title style={{ textAlign: 'center', fontSize: '1.5rem' }}>
            {item.name}
          </Card.Title>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>
      <Form>
        <Form.Group controlId={`${item.name}-topping`}>
          <Col xs={5}>
            <Form.Check
              label={item.name}
              // defaultValue={0}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>
      </Form>
    </Col>
  );
};

export default ScoopOptions;
