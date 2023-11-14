/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Button, Col, Container, Form, OverlayTrigger, Popover, Row } from 'react-bootstrap';

const SummaryForm = ({ setOrderPhase }) => {

    const [isChecked, setIsChecked] = useState(false);
    const popover = (
        <Popover id="popover-basic">
            <Popover.Body>
                No icecream will actually be delivered
            </Popover.Body>
        </Popover>
    );

    const checkBoxLabel = (
        <span>
            I agree to
            <OverlayTrigger placement="right" overlay={popover}>

                <span style={{ color: "blue" }}>
                    Terms and Conditions
                </span>
            </OverlayTrigger>
        </span>
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        setOrderPhase("completed");
    }
    return (<form onSubmit={handleSubmit}>
        <Container>
            <Row>
                <Col>
                    <Form.Group className="mb-3">
                        <Form.Check
                            required
                            label={checkBoxLabel}
                            checked={isChecked}
                            onChange={(e) => setIsChecked(e.target.checked)}
                        />
                    </Form.Group>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button disabled={!isChecked} type="submit">Confirm Order</Button>
                </Col>
            </Row>
        </Container>

    </form>);
};

export default SummaryForm;
