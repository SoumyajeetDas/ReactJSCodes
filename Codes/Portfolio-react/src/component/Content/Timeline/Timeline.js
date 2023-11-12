import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Timeline.css'
import TimelineComponent from './TimelineComponent';
import { motion
 } from 'framer-motion';

const Timeline = (prop) => {

    return (
        <Container className="my-5" ref={prop.qualification}>
            <motion.div id="timeline"
                initial={{ opacity: 0 }}

                // whileInViewtells when the element is in view do the animations given but just when the element enters it
                // starts animating
                whileInView={{ opacity: 1, transition: { duration: 1.1 } }}

                // That is where viewport comes into picture to control when the animation will start depending on the amount.
                // amount :0.5 is the helf of the element see in the view.
                viewport={{ once: true, amount: 0.2 }}
            >
                <Row>
                    <h1>#Qualification</h1>

                    <Col>
                        <TimelineComponent />
                    </Col>

                </Row>
            </motion.div>
        </Container>
    )
}

export default Timeline
