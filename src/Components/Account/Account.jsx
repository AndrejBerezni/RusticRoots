import React from "react";
import './Account.css';
// Images
import bear from '../../Assets/bear.png';
import stripe from '../../Assets/stripe-logo.png';
// Bootstrap
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { Col, Row, Container } from "react-bootstrap";
// Router
import { Link } from "react-router-dom";
// Redux
import { useSelector } from "react-redux";
// Framer-motion
import { motion } from "framer-motion";

export default function Account() {
    const userEmail = useSelector(state => state.signedIn.user.email)
    return (
        <Container className='account-page'>
            <Row>
                <Col xs={12} md={5}>
                    <motion.img
                        className='account-page-image'
                        src={bear}
                        animate={{
                            x: 0,
                            opacity: 1,
                            scale: 1
                        }}
                        initial={{
                            x: -200,
                            opacity: 0,
                            scale: 0
                        }}
                        transition={{
                            duration: 1.2
                        }}
                    />
                </Col>
                <Col xs={12} md={5}>
                    <motion.div
                        className="account-page-details-div"
                        animate={{
                            x: 0,
                            opacity: 1,
                            scale: 1
                        }}
                        initial={{
                            x: 200,
                            opacity: 0,
                            scale: 0
                        }}
                        transition={{
                            duration: 1.2
                        }}
                    >
                        <h2 className='account-page-email'>{userEmail}</h2>
                        <p className="account-page-text">Payments on Rustic Roots are powered by</p>
                        <Image className='stripe-logo' src={stripe} />
                        <p className="account-page-text">To view and change your billing information and see history of your invoices, start by clicking the button below.</p>
                        <Button as={Link} to={"https://billing.stripe.com/p/login/test_eVa8yE7xe5N63TybII"} className='account-page-stripe-link'>Go to Stripe Customer Portal</Button>
                    </motion.div>
                </Col>
            </Row>

        </Container>
    )
}