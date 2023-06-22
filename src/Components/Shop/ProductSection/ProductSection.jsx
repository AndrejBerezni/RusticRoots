import React from "react";
import Row from 'react-bootstrap/Row';
import ItemCard from "../ItemCard/ItemCard";

export default function ProductSection({ products }) {
    return (
        <Row className="product-row gap-3 mb-5">
            {products.map(product => (
                <ItemCard
                    product = {product}
                />
            ))}
        </Row>
    )
};