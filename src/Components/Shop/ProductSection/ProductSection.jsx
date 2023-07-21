import React from "react";
// Bootstrap
import Row from 'react-bootstrap/Row';
// Components
import ItemCard from "../ItemCard/ItemCard";

export default function ProductSection({ products }) {
    return (
        <Row className="product-row gap-3 mb-5">
            {products.map((product, index) => (
                <ItemCard
                    key={product.name}
                    index={index}
                    product={product}
                />
            ))}
        </Row>
    )
};