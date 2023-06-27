import React from "react";
import './Cart.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector, useDispatch } from "react-redux";
import { hideCart } from "../../ReduxActions/showCartActions";
import CartItem from "./CartItem/CartItem";
import { loadStripe } from "@stripe/stripe-js";
import { db } from "../../firebase";
import { collection, addDoc, onSnapshot } from "firebase/firestore";
import { showSignIn } from '../../ReduxActions/showSignInActions';
import { showAlert } from "../../ReduxActions/showAlertActions";
import Alert from "react-bootstrap/Alert";
import { hideAlert } from "../../ReduxActions/showAlertActions";

export default function Cart() {
    const dispatch = useDispatch();
    const show = useSelector(state => state.showCart);
    const user = useSelector(state => state.signedIn.user);
    const signedIn = useSelector(state => state.signedIn.isSignedIn)
    const cartItems = useSelector(state => state.cart);
    const alert = useSelector((state) => state.showAlert.showAlert);
    const alertMessage = useSelector((state) => state.showAlert.message);
    const handleClose = () => {
        dispatch(hideAlert());
        dispatch(hideCart())
    };
    let totalPrice = 0;

    useSelector(state => state.cart).forEach(item => totalPrice += item.totalPrice);

    // Function that leads user to Stripe checkout:
    const createCheckout = async () => {
        // If user is not signed in, prompt him to do so
        if (!signedIn) {
            dispatch(showSignIn());
            return
        }
        // We need to pass array to line_items key when we create checkout_session document to have all our items added and price calculated
        const lineItems = [];
        cartItems.forEach(item => {
            lineItems.push({
                price: item.priceId,
                quantity: item.count
            })
        });
        // If cart is empty, break and inform user
        if (lineItems.length === 0) {
            console.log('asdasdas')
            dispatch(showAlert('Your cart is empty, please add products to continue to checkout.'));
            return
        }
        try {
            // Create new checkout_session document
            const docRef = await addDoc(collection(db, 'customers', user.uid, 'checkout_sessions'), {
                mode: 'payment',
                line_items: lineItems,
                success_url: window.location.origin,
                cancel_url: window.location.origin,
            });
            // onSnapshot is here because some properties that we need will be automatically added, and we are waiting for them
            await onSnapshot(docRef, async (doc) => {
                const { error, sessionId } = doc.data();
                if (error) {
                    alert(error.message);
                }
                // If properties are added successfully, we should have sessionId that we use to direct user to checkout
                if (sessionId) {
                    const stripe = await loadStripe('pk_test_51NNCqXKUtXesZvVb2fpF5NesqqvITDuYNWtIXEZsw5PrXl2gTdygp7hWhyaGjW5Jl2xtopXf0Cz9jhLsGCUrXUAR00FwIjkVjw');
                    stripe.redirectToCheckout({ sessionId });
                }
            });
        } catch (error) {
            console.error('Error creating checkout:', error);
        }
    };

    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title className='cart-title'>Your Order</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {cartItems.map((item, index) => (<CartItem key={index} item={item} />))}
                <h2 className="cart-total-price">Total: €{Math.round(totalPrice * 100) / 100}</h2>
                {alert && (
                    <Alert
                        className="alert"
                        variant="danger"
                        dismissible
                        onClose={() => dispatch(hideAlert())}
                    >
                        {alertMessage}
                    </Alert>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button className='continue-shopping-btn' onClick={handleClose}>
                    Continue Shopping
                </Button>
                <Button className='checkout-btn' onClick={() => createCheckout()}>Go to Checkout</Button>
            </Modal.Footer>
        </Modal>
    );
}