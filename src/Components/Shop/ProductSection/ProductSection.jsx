import React from 'react';
import Row from 'react-bootstrap/Row';
import PropTypes from 'prop-types';

import ItemCard from '../ItemCard/ItemCard';

export default function ProductSection({ products }) {
  return (
    <Row className="product-row gap-3 mb-5">
      {products.map((product, index) => (
        <ItemCard
          key={`${product.name}-${product.size}`}
          index={index}
          product={product}
        />
      ))}
    </Row>
  );
}

ProductSection.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types, react/require-default-props
  products: PropTypes.object,
};
