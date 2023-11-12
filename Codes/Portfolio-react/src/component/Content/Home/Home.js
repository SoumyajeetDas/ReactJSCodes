import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.css';
import { motion } from 'framer-motion'


const Home = (prop) => {
    return (
        <Container className="my-5" ref={prop.home}>
            <motion.div id="contain"
                initial={{ opacity: 0 }}

                // whileInViewtells when the element is in view do the animations given but just when the element enters it
                // starts animating
                whileInView={{ opacity: 1, transition: { duration: 1.1 } }}

                // That is where viewport comes into picture to control when the animation will start depending on the amount.
                // amount :0.5 is the helf of the element see in the view.
                viewport={{ once: true, amount: 0.1 }}
            >
                <Row className='p-lg-0 p-4' >
                    <Col lg={4} className="d-flex justify-content-center align-items-center m-auto">

                        <div id="profile">
                            <div id="image-wrapper">
                                <div id="image-content">

                                </div>
                            </div>

                            <div id="social-wrapper">
                                <h5>
                                    #Connect With Me
                                    <img className='' src="down.png" width="25" height="25" alt='Loading'></img>
                                </h5>


                                <div id="social">

                                    <motion.div
                                        whileHover={{ x: 10 }}
                                    >
                                        <img className='my-2' src="linkedin.png" width="30" height="30" alt="Linkedin" />
                                        <p className='m-0 text-start'>
                                            linkedin.com/in/soumyajeetdas1998
                                        </p>
                                    </motion.div>


                                    <motion.div
                                        whileHover={{ x: 10 }}
                                    >
                                        <img className='my-2' src="email.png" width="30" height="30" alt="Linkedin" />
                                        <p className='m-0 text-start'>
                                            soumyajeetdas@outlook.com
                                        </p>

                                    </motion.div>

                                    <motion.div
                                        whileHover={{ x: 10 }}
                                    >
                                        <img className='my-2' src="whatsapp.png" width="30" height="30" alt="Linkedin" />
                                        <p className='m-0 text-start'>
                                            +91 7044139099
                                        </p>
                                    </motion.div>

                                </div>
                            </div>
                        </div>

                    </Col>
                    <Col lg={6} className="mx-auto mt-lg-0 mt-5 d-flex flex-column justify-content-center align-items-center" >
                        <div id="name">

                            <h1 className="my-3 text-start">
                                Hi,
                                <br />
                                I'm Soumyajeet
                                <img className='mb-3' src="wave.png" width="40" height="40" alt='Loading'></img>
                            </h1>


                            <h4 className="my-2 mb-4">Full Stack Developer</h4>
                            <p>
                                A computer science graduate with 2 years of experience as a Full-Stack Developer at Cognizant.
                                During this journey of 2 years I have served as Analyst Trainee and Junior Software Engineer. Prior to these roles
                                I also completed 4 months of Internship from Cognizant where I was trained on MERN Stack.
                                Believes in continuous self development. Particularly interested in Web Development and wants to work as a <b>MERN Stack Developer</b>.
                            </p>

                            <div className="d-flex justify-content-center align-items-center">
                                <motion.a
                                    href="Soumyajeet's Resume.pdf"
                                    download="Soumyajeet's Resume.pdf"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}

                                    className="btn mt-3">
                                    Download CV
                                    <span className="material-symbols-rounded">
                                        download
                                    </span>
                                </motion.a>
                            </div>


                        </div>


                    </Col>
                </Row>
            </motion.div>

        </Container>
    )
}

export default Home
