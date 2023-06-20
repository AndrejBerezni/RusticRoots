import React from "react";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { NavLink } from "react-router-dom";
import './Home.css'
import { heroText, honeyText, ciderText } from '../../Data/Hometext'
import logo from "../../Assets/logo-nobg.png"
import cider from "../../Assets/roxburyrussetcider.png"
import honey from "../../Assets/tilia.png"

export default function Home() {
    return (
        <div className="home">
            <div className="hero">
                <p className="hero-text">{heroText}</p>
                <Image src={logo} className="logo" />
            </div>
            <div className="product-description-section">
                <div className="product-description">
                    <Image src={cider} roundedCircle className="product-img"/>
                    <h2 className="product-title">Apple Cider</h2>
                    <p className="product-text">{ciderText}</p>
                    <Button as={NavLink} to={'/shop'} className="product-btn">Shop Cider</Button>
                </div>
                <div className="product-description">
                <Image src={honey} roundedCircle className="product-img"/>
                <h2 className="product-title">Honey</h2>
                <p className="product-text">{honeyText}</p>
                <Button as={NavLink} to={'/shop'} className="product-btn">Shop Honey</Button>
                </div>
            </div>
        </div>
    )
}