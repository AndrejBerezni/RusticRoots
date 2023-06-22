import React from "react";
import './CartItem.css';
import Button from 'react-bootstrap/Button';
import deleteIcon from '../../../Assets/delete.png'

export default function CartItem({ item }) {
    return (
        <div className='cart-item'>
            <p className="cart-item-name">{item.name}</p>
            <div className="cart-item-btns">
                <Button className="cart-item-delete-btn"><img className='cart-item-delete-icon' src={deleteIcon} alt="delete icon"/></Button>
                <Button className="cart-item-decrement-btn">-</Button>
                <p>{item.count}</p>
                <Button className="cart-item-increment-btn">+</Button>
            </div>
            <p className="cart-item-total-price">${item.totalPrice}</p>
        </div>
    )
}