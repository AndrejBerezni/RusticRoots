import React, { useRef } from "react";
import './SignIn.css';
//Bootstrap
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from "react-bootstrap/Alert";
// Router
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { hideSignIn } from "../../../ReduxActions/showSignInActions";
import { hideSignInAlert, showSignInAlert } from "../../../ReduxActions/showAlertActions";
import { signIn } from "../../../ReduxActions/signInActions";
// Firebase
import { auth } from "../../../firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export default function SignIn() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const show = useSelector(state => state.showSignIn);
    const inCart = useSelector(state => state.showCart);
    const alert = useSelector((state) => state.showSignInAlert.showAlert);
    const alertMessage = useSelector((state) => state.showSignInAlert.message);

    const handleClose = () => dispatch(hideSignIn());
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    // Handle sign up
    const firebaseSignUp = () => {
        createUserWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = {
                    uid: userCredential.user.uid,
                    email: userCredential.user.email
                }
                dispatch(signIn(user));
                dispatch(hideSignIn());
                // There are two places that prompt user to sign in/up - cart and link to account page
                // If user is not in cart, then it means user wants to navigate to account page:
                if (!inCart) {
                    navigate('/account');
                }
            })
            .catch((error) => {
                // Adding user-friendly text for known errors:
                let errorMessage;
                if (error.message === 'Firebase: Error (auth/email-already-in-use).') {
                    errorMessage = "Email already in use, please use other one."
                } else if (error.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
                    errorMessage = 'Password should be at least 6 characters long. Try again.'
                } else if (error.message === 'Firebase: Error (auth/missing-email).') {
                    errorMessage = 'Please add your email to sign up.'
                } else if (error.message === 'Firebase: Error (auth/missing-password).') {
                    errorMessage = 'Please create password to sign up.'
                } else {
                    errorMessage = error.message
                }
                console.log(error.message)
                dispatch(showSignInAlert(errorMessage));
            });
    }

    // Handle sign in
    const firebaseSignIn = () => {
        signInWithEmailAndPassword(auth, emailRef.current.value, passwordRef.current.value)
            .then((userCredential) => {
                // Signed in 
                const user = {
                    uid: userCredential.user.uid,
                    email: userCredential.user.email
                }
                dispatch(signIn(user));
                dispatch(hideSignIn());
                if (!inCart) {
                    navigate('/account');
                }
            })
            .catch((error) => {
                // Adding user-friendly text for known errors:
                let errorMessage;
                if (error.message === 'Firebase: Error (auth/wrong-password).') {
                    errorMessage = 'Wrong password. Please try again.'
                } else if (error.message === 'Firebase: Error (auth/user-not-found).') {
                    errorMessage = 'User not found.'
                } else if (error.message === 'Firebase: Error (auth/invalid-email).') {
                    errorMessage = 'Invalid email'
                } else {
                    errorMessage = error.message
                }
                dispatch(showSignInAlert(errorMessage));
            });
    }

    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            className="sign-in-modal"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title className="sign-in-title">Please sign in to continue:</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {alert && (
                    <Alert
                        variant="danger"
                        dismissible
                        onClose={() => dispatch(hideSignInAlert())}
                    >
                        {alertMessage}
                    </Alert>
                )}
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className="sign-in-label">Email address</Form.Label>
                        <Form.Control ref={emailRef} className="sign-in-input" type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className="sign-in-label">Password</Form.Label>
                        <Form.Control ref={passwordRef} className="sign-in-input" type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button className='sign-in-btn' type='submit' onClick={e => {
                        e.preventDefault()
                        firebaseSignIn()
                    }
                    }>
                        Sign In
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <p className="sign-in-text">Do not have an account?</p>
                <p className="sign-in-text">Fill the fields above and <Link className="sign-up-btn" onClick={firebaseSignUp}>Sign Up</Link></p>
            </Modal.Footer>
        </Modal>
    )
}