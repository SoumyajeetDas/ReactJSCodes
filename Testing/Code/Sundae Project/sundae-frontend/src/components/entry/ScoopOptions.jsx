import React, { useState } from 'react';
import { Col, Form } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useOrderDetails } from '../../hooks/useOrderDetails';
// import ScoopO from './Options.jsx';

const ScoopOptions = ({ item, optionType }) => {
  const { updateItemCount } = useOrderDetails();
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    const currentValue = e.target.value;

    const currentValueFloat = parseFloat(currentValue);
    const valueIsValid =
      currentValueFloat >= 0 &&
      currentValueFloat <= 10 &&
      Math.floor(currentValueFloat) === currentValueFloat;

    // Validate
    setIsValid(valueIsValid);

    updateItemCount(item.name, valueIsValid ? currentValue * 1 : 0, 'scoops');
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
        <Form.Group controlId={`${item.name}-scoop`}>
          <Form.Label column xs={6}>
            {item.name}
          </Form.Label>
          <Col xs={5}>
            <Form.Control
              type="number"
              defaultValue={0}
              onChange={handleChange}
              isInvalid={!isValid}
            />
          </Col>
        </Form.Group>
      </Form>
    </Col>
  );
};

export default ScoopOptions;
