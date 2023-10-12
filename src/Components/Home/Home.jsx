import React from 'react';
import './Home.css';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import { heroText, honeyText, ciderText } from '../../Data/Hometext';
import logo from '../../Assets/logo-nobg.png';
import cider from '../../Assets/roxburyrussetcider.png';
import honey from '../../Assets/tilia.png';

const transitionFramer = { duration: 1.2 };

function ProductDescription({ img, title, btnText, text, target }) {
  return (
    <Col xs={10} md={5} className="product-description my-3 gap-3">
      <Image src={img} roundedCircle className="product-img" />
      <h2 className="product-title">{title}</h2>
      <p className="product-text">{text}</p>
      <Button as={NavLink} to={target} className="product-btn">
        {btnText}
      </Button>
    </Col>
  );
}

ProductDescription.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  btnText: PropTypes.string,
  text: PropTypes.string,
  target: PropTypes.string,
};
ProductDescription.defaultProps = {
  img: '',
  title: '',
  btnText: '',
  text: '',
  target: '',
};

export default function Home() {
  return (
    <Container className="home">
      <Row className="about-us d-flex justify-content-center align-items-center mt-3 mb-5">
        <Col xs md={5}>
          <motion.p
            className="hero-text"
            animate={{
              x: 0,
              opacity: 1,
            }}
            initial={{
              x: -500,
              opacity: 0,
            }}
            transition={transitionFramer}
          >
            {heroText}
          </motion.p>
        </Col>
        <Col xs md={5}>
          <motion.img
            src={logo}
            className="logo"
            animate={{
              x: 0,
              scale: 1,
              opacity: 1,
            }}
            initial={{
              x: 500,
              scale: 0,
              opacity: 0,
            }}
            transition={transitionFramer}
          />
        </Col>
      </Row>
      <motion.div
        className="row product-description-section d-flex justify-content-around align-items-strech my-3"
        animate={{
          y: 0,
          opacity: 1,
        }}
        initial={{
          y: 300,
          opacity: 0,
        }}
        transition={transitionFramer}
      >
        <ProductDescription
          img={cider}
          text={ciderText}
          title="Apple Cider"
          btnText="Shop Cider"
          target="/shop/cider"
        />
        <ProductDescription
          img={honey}
          text={honeyText}
          title="Honey"
          btnText="Shop Honey"
          target="/shop/honey"
        />
      </motion.div>
      <motion.div
        className="arrow"
        animate={{
          opacity: 1,
        }}
        initial={{
          opacity: 0,
        }}
        transition={{
          delay: 2,
          duration: 0.5,
        }}
      >
        <span />
        <span />
        <span />
      </motion.div>
    </Container>
  );
}
