import React from "react";
import './Account.css';
import bear from '../../Assets/bear.png';
import stripe from '../../Assets/stripe-logo.png'
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function Account() {
    const userEmail = useSelector(state => state.signedIn.user.email)
    return (
        <Container className='account-page'>
            <Row>
                <Col xs={12} md={5}>
                    <Image className='account-page-image' src={bear}></Image>
                </Col>
                <Col xs={12} md={5}>
                    <div className="account-page-details-div">
                        <h2 className='account-page-email'>{userEmail}</h2>
                        <p className="account-page-text">Payments on Rustic Roots are powered by</p>
                        <Image className='stripe-logo' src={stripe} />
                        <p className="account-page-text">To view and change your billing information and see history of your invoices, start by clicking the button below.</p>
                        <Button as={Link} to={"https://billing.stripe.com/p/login/test_eVa8yE7xe5N63TybII"} className='account-page-stripe-link'>Go to Stripe Customer Portal</Button>
                    </div>
                </Col>
            </Row>

        </Container>
    )
}