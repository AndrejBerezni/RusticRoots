import React, {useState} from "react";
import './ItemCard.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import cartImg from '../../../Assets/shopping-cart.png'

export default function ItemCard({ product }) {
    const [count, setCount] = useState(1);

    const decrementCount = () => count > 1 ? setCount(count - 1) : setCount(count);
    const incrementCount = () => setCount(count + 1);
    return (
        <Card className='product-card' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.src} className='card-img'/>
            <Card.Body>
                <Card.Title className='product-card-title'>{product.title}</Card.Title>
                <Card.Text className='product-card-description'>{product.description}</Card.Text>
                <Card.Text className='product-card-size'>{product.size}</Card.Text>
                <Card.Text className='product-card-price'>Price: ${product.price}</Card.Text>
                <div className="card-btn-div d-flex justify-content-center">
                    <Button className='card-btn-decrement' onClick={decrementCount}>-</Button>
                    <div className="item-number">{count}</div>
                    <Button className='card-btn-increment' onClick={incrementCount}>+</Button>
                </div>
                <Button className="add-btn"><img alt='cart' className='btn-img' src={cartImg}/>Add to cart</Button>
            </Card.Body>
        </Card>
    )
}