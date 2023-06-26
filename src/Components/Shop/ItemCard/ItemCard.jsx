import React, { useState } from "react";
import './ItemCard.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import cartImg from '../../../Assets/shopping-cart.png';
import { useDispatch } from "react-redux";
import { addItem } from '../../../ReduxActions/manageItemsInCart'

export default function ItemCard({ product }) {
    const dispatch = useDispatch();

    // Handle item count on card:
    const [count, setCount] = useState(1);
    const decrementCount = () => count > 1 ? setCount(count - 1) : setCount(count);
    const incrementCount = () => setCount(count + 1);

    // Handle adding items to cart
    const addItemToCart = () => {
        const item = {
            name: `${product.name} (${product.size})`,
            price: product.price,
            count: count,
            get totalPrice() {
                return Math.round(this.count * this.price * 100)/100
            }
        }
        dispatch(addItem(item));
        setCount(1)
    }
    return (
        <Card className='product-card' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.image} className='card-img' />
            <Card.Body>
                <Card.Title className='product-card-title'>{product.name}</Card.Title>
                <Card.Text className='product-card-description'>{product.description}</Card.Text>
                <Card.Text className='product-card-size'>{product.size}</Card.Text>
                <Card.Text className='product-card-price'>Price: €{product.price}</Card.Text>
                <div className="card-btn-div d-flex justify-content-center">
                    <Button className='card-btn-decrement' onClick={decrementCount}>-</Button>
                    <div className="item-number">{count}</div>
                    <Button className='card-btn-increment' onClick={incrementCount}>+</Button>
                </div>
                <Button className="add-btn" onClick={addItemToCart}>
                    <img alt='cart' className='btn-img' src={cartImg} />Add to cart
                </Button>
            </Card.Body>
        </Card>
    )
}