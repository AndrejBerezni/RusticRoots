import React from "react";
import './Cart.css'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector, useDispatch } from "react-redux";
import { hideCart } from "../../ReduxActions/showCartActions";
import CartItem from "./CartItem/CartItem";

export default function Cart() {
    const dispatch = useDispatch();
    const show = useSelector(state => state.showCart);
    const cartItems = useSelector(state => state.cart)
    const handleClose = () => { dispatch(hideCart()) };
    let totalPrice = 0;
    useSelector(state=> state.cart).forEach(item => totalPrice += item.totalPrice);

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
                <h2 className="cart-total-price">Total: ${Math.round(totalPrice*100)/100}</h2>
            </Modal.Body>
            <Modal.Footer>
                <Button className='continue-shopping-btn' onClick={handleClose}>
                    Continue Shopping
                </Button>
                <Button className='checkout-btn'>Go to Checkout</Button>
            </Modal.Footer>
        </Modal>
    );
}