import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Project.css';
import Projects from './ProjectData';
import { motion } from 'framer-motion';

const Project = (prop) => {

    return (
        <Container className="my-5" ref={prop.projects}>
            <motion.div
                initial={{ opacity: 0 }}

                // whileInViewtells when the element is in view do the animations given but just when the element enters it
                // starts animating
                whileInView={{ opacity: 1, transition: { duration: 1.1 } }}

                // That is where viewport comes into picture to control when the animation will start depending on the amount.
                // amount :0.5 is the helf of the element see in the view.
                viewport={{ once: true, amount: 0.2 }}

                id="contain-projects">
                <Row>
                    <h1>#My Projects</h1>

                    {Projects.map(data => <Col key={data.name} lg={6} className="mb-lg-0 mb-4">
                        <div className="projectset">
                            <div id="image-style">
                                <img src={data.image} alt="Loading..." />
                            </div>

                            <h3>{data.name}</h3>
                            <p>{data.description}</p>

                            <div id="buttons-style">
                                <motion.a
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.9 }}

                                    className="btn" target="_blank" href={data.website_url} rel="noreferrer">
                                    <b>Website</b>
                                    <span className="material-symbols-rounded">
                                        outbound
                                    </span>
                                </motion.a>

                                <motion.a
                                    whileHover={{ scale: 1.04 }}
                                    whileTap={{ scale: 0.9 }}

                                    className="btn" target="_blank" href={data.github_url} rel="noreferrer">
                                    <b>GitHub</b>
                                    <span className="material-symbols-rounded">
                                        outbound
                                    </span>
                                </motion.a>
                            </div>

                        </div>
                    </Col>
                    )}


                </Row>
            </motion.div>
        </Container>
    )
}

export default Project
