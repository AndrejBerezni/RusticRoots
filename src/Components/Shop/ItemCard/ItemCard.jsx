import React from "react";
import './ItemCard.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import cart from '../../../Assets/shopping-cart.png'

export default function ItemCard({ img, title, size, description, price }) {
    return (
        <Card className='product-card' style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img} className='card-img'/>
            <Card.Body>
                <Card.Title className='product-card-title'>{title}</Card.Title>
                <Card.Text className='product-card-description'>{description}</Card.Text>
                <Card.Text className='product-card-size'>{size}</Card.Text>
                <Card.Text className='product-card-price'>Price: ${price}</Card.Text>
                <div className="card-btn-div d-flex justify-content-center">
                    <Button className='card-btn-decrement' >-</Button>
                    <div className="item-number">0</div>
                    <Button className='card-btn-increment'>+</Button>
                </div>
                <Button className="add-btn"><img alt='cart' className='btn-img' src={cart}/>Add to cart</Button>
            </Card.Body>
        </Card>
    )
}