import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import './Skills.css';
import skills from './SkillData';
import { motion } from 'framer-motion'

const Skills = (prop) => {

    const responsive = {
        512: {
            items: 2
        },
        991: {
            items: 3
        },
        1200: {
            items: 4
        },
        1400: {
            items: 5
        }

    }


    const items = skills.map(data => {
        return (<motion.div
            whileHover={{ scale: 1.1 }}

            className="skillset">

            <img src={data.image} width="40" height="40" alt="Loading..." />
            <h4>{data.skillName}</h4>
        </motion.div>)
    });


    return (
        <Container className="my-5" ref={prop.skills}>
            <motion.div
                initial={{ opacity: 0 }}

                // whileInViewtells when the element is in view do the animations given but just when the element enters it
                // starts animating
                whileInView={{ opacity: 1, transition: { duration: 1.1 } }}

                // That is where viewport comes into picture to control when the animation will start depending on the amount.
                // amount :0.5 is the helf of the element see in the view.
                viewport={{ once: true, amount: 0.5 }}

                id="contain-skills">
                <Row>
                    <h1>#Skill Set</h1>
                    <AliceCarousel
                        mouseTracking
                        infinite
                        autoPlayInterval={400}
                        animationDuration={400}
                        disableButtonsControls
                        // disableDotsControls
                        responsive={responsive}
                        autoPlay
                        items={items}
                    />

                </Row>
            </motion.div>
        </Container>
    )
}

export default Skills
