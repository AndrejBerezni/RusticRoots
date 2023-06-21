import React from "react";
import './Shop.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ItemCard from "./ItemCard/ItemCard";
import products from "../../Data/Products";

export default function Shop() {
    const honey = products.filter(product => product.type === 'honey');
    const cider = products.filter(product => product.type === 'cider')
    return (
            <Container className='shop py-5'>
                <h1>Honey</h1>
                <Row className="gap-3 mb-5">
                {honey.map(product => (
                    <ItemCard img={product.src} title={product.name} size={product.size} description={product.description} />
                ))}
                </Row>
                <h1>Apple Cider</h1>
                <Row className="gap-3 mb-5">
                {cider.map(product => (
                    <ItemCard img={product.src} title={product.name} size={product.size} description={product.description} />
                ))}
                </Row>
            </Container>
    )
}