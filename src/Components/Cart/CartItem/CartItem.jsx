import React from 'react';
import './CartItem.css';
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import deleteIcon from '../../../Assets/delete.png';
import {
  incrementItemNumber,
  decrementItemNumber,
  removeItem,
} from '../../../ReduxActions/manageItemsInCart';

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <p className="cart-item-name">{item.name}</p>
      <div className="cart-item-btns">
        <Button
          className="cart-item-delete-btn"
          onClick={() => dispatch(removeItem(item))}
        >
          <img
            className="cart-item-delete-icon"
            src={deleteIcon}
            alt="delete icon"
          />
        </Button>
        <Button
          className="cart-item-decrement-btn"
          onClick={() => dispatch(decrementItemNumber(item))}
        >
          -
        </Button>
        <p>{item.count}</p>
        <Button
          className="cart-item-increment-btn"
          onClick={() => dispatch(incrementItemNumber(item))}
        >
          +
        </Button>
      </div>
      <p className="cart-item-total-price">€{item.totalPrice}</p>
    </div>
  );
}

CartItem.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types, react/require-default-props
  item: PropTypes.object,
};
