import React from "react";
import './SignIn.css';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { hideSignIn } from "../../../ReduxActions/showSignInActions";

export default function SignIn() {
    const dispatch = useDispatch();
    const show = useSelector(state => state.showSignIn);
    const handleClose = () => dispatch(hideSignIn());

    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            className="sign-in-modal"
        >
            <Modal.Header closeButton>
                <Modal.Title className="sign-in-title">Please sign in to continue:</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="sign-in-label">Email address</Form.Label>
                        <Form.Control className="sign-in-input" type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="sign-in-label">Password</Form.Label>
                        <Form.Control className="sign-in-input" type="password" placeholder="Password" />
                    </Form.Group>
                    <Button className='sign-in-btn' type="submit">
                        Sign In
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <p className="sign-in-text">Do not have an account?</p>
                <p className="sign-in-text">Fill the fields above and <Link className="sign-up-btn">Sign Up</Link></p>
            </Modal.Footer>
        </Modal>
    )
}