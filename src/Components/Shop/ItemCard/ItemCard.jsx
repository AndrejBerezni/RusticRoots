import React, { useState } from 'react';
import './ItemCard.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

import { addItem } from '../../../ReduxActions/manageItemsInCart';
import cartImg from '../../../Assets/shopping-cart.png';

export default function ItemCard({ product, index }) {
  const dispatch = useDispatch();

  // Handle item count on card:
  const [count, setCount] = useState(1);
  const decrementCount = () => (count > 1 ? setCount(count - 1) : null);
  const incrementCount = () => setCount(count + 1);

  // Handle adding items to cart
  const addItemToCart = () => {
    const item = {
      id: `${product.name} (${product.size})`,
      name: product.name,
      size: product.size,
      price: product.price,
      priceId: product.priceId,
      count,
      get totalPrice() {
        // eslint-disable-next-line react/no-this-in-sfc
        return Math.round(this.count * this.price * 100) / 100;
      },
    };
    dispatch(addItem(item));
    setCount(1);
  };
  return (
    <motion.Card
      className="product-card"
      style={{ width: '18rem' }}
      animate={{
        y: 0,
        scale: 1,
      }}
      initial={{
        y: 100,
        scale: 0,
      }}
      transition={{
        duration: 1,
        delay: index / 5,
      }}
    >
      <Card.Img variant="top" src={product.image} className="card-img" />
      <Card.Body>
        <Card.Title className="product-card-title">{product.name}</Card.Title>
        <Card.Text className="product-card-description">
          {product.description}
        </Card.Text>
        <Card.Text className="product-card-size">{product.size}</Card.Text>
        <Card.Text className="product-card-price">
          Price: €{product.price}
        </Card.Text>
        <div className="card-btn-div d-flex justify-content-center">
          <Button className="card-btn-decrement" onClick={decrementCount}>
            -
          </Button>
          <div className="item-number">{count}</div>
          <Button className="card-btn-increment" onClick={incrementCount}>
            +
          </Button>
        </div>
        <Button className="add-btn" onClick={addItemToCart}>
          <img alt="cart" className="btn-img" src={cartImg} />
          Add to cart
        </Button>
      </Card.Body>
    </motion.Card>
  );
}

ItemCard.defaultProps = {
  product: {},
  index: 0,
};

ItemCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  product: PropTypes.object,
  index: PropTypes.number,
};
