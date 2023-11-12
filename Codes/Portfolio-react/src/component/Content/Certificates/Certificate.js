import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Certificate.css'
import Certificates from './CertificateData';
import { motion } from 'framer-motion';


const Certificate = (prop) => {

    return (
        <Container className="my-5" ref={prop.cert}>
            <motion.div
                initial={{ opacity: 0 }}

                // whileInViewtells when the element is in view do the animations given but just when the element enters it
                // starts animating
                whileInView={{ opacity: 1, transition: { duration: 1.1 } }}

                // That is where viewport comes into picture to control when the animation will start depending on the amount.
                // amount :0.5 is the helf of the element see in the view.
                viewport={{ once: true, amount: 0.2 }}

                id="certificate">
                <Row>
                    <h1>#My Certificates</h1>

                    {Certificates.map(data => <Col key={data.name} lg={4} className="mb-lg-0 mb-4">
                        <div className="certificate-style">
                            <div id="certificate-image-style">
                                <img src={data.image} alt="Loading..." />
                            </div>

                            <p>{data.name}</p>


                            <motion.a
                                whileHover={{ scale: 1.04 }}
                                whileTap={{ scale: 0.9 }}

                                className="btn" href={data.link} target="_blank" rel="noreferrer">
                                <b>Certificate</b>
                                <span className="material-symbols-rounded">
                                    outbound
                                </span>
                            </motion.a>

                        </div>
                    </Col>
                    )}


                </Row>
            </motion.div>
        </Container>
    )
}

export default Certificate
