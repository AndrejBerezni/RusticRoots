import React from "react";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { Col, Row, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import './Home.css'
import { heroText, honeyText, ciderText } from '../../Data/Hometext'
import logo from "../../Assets/logo-nobg.png"
import cider from "../../Assets/roxburyrussetcider.png"
import honey from "../../Assets/tilia.png";
import { motion } from "framer-motion";

function ProductDescription({ img, title, btnText, text, target }) {
    return (
        <Col xs={10} md={5} className="product-description my-3 gap-3">
            <Image src={img} roundedCircle className="product-img" />
            <h2 className="product-title">{title}</h2>
            <p className="product-text">{text}</p>
            <Button as={NavLink} to={target} className="product-btn">{btnText}</Button>
        </Col>
    )
}
export default function Home() {
    return (
        <Container className="home">
            <Row className="about-us d-flex justify-content-center align-items-center mt-3 mb-5">
                <Col xs md={5}>
                    <motion.p
                        className="hero-text"
                        animate={{
                            x: 0,
                            opacity: 1
                        }}
                        initial={{
                            x: -500,
                            opacity: 0
                        }}
                        transition={{
                            duration: 1.2
                        }}
                    >
                        {heroText}
                    </motion.p>
                </Col>
                <Col xs md={5}>
                    <motion.img
                        src={logo}
                        className="logo"
                        animate={{
                            x:0,
                            scale: 1,
                            opacity: 1
                        }}
                        initial={{
                            x: 500,
                            scale: 0,
                            opacity: 0
                        }}
                        transition={{
                            duration: 1.2
                        }}
                    />
                </Col>
            </Row>
            <motion.div
                className="row product-description-section d-flex justify-content-around align-items-strech my-3"
                animate={{
                    y: 0,
                    opacity: 1
                }}
                initial={{
                    y:300,
                    opacity: 0
                }}
                transition={{
                    duration: 1.2
                }}
                >
                <ProductDescription
                    img={cider}
                    text={ciderText}
                    title={'Apple Cider'}
                    btnText={'Shop Cider'}
                    target={'/shop/cider'} />
                <ProductDescription
                    img={honey}
                    text={honeyText}
                    title={'Honey'}
                    btnText={'Shop Honey'}
                    target={'/shop/honey'} />
            </motion.div>
        </Container>
    )
}