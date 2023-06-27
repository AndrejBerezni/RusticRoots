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

export default function Cart() {
    const dispatch = useDispatch();
    const show = useSelector(state => state.showCart);
    const user = useSelector(state => state.signedIn.user)
    const cartItems = useSelector(state => state.cart)
    const handleClose = () => { dispatch(hideCart()) };
    let totalPrice = 0;

    useSelector(state => state.cart).forEach(item => totalPrice += item.totalPrice);

    const createCheckout = async () => {
        try {
            const docRef = await addDoc(collection(db, 'customers', user.uid, 'checkout_sessions'), {
                mode: 'payment',
                price: 'price_1NNGHMKUtXesZvVbWUI8FnbJ',
                success_url: window.location.origin,
                cancel_url: window.location.origin,
            });
            await onSnapshot(docRef, async (doc) => {
                const { error, sessionId } = doc.data();
                if (error) {
                    alert(error.message);
                }
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