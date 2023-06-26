import React from "react";
import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import cart from '../../Assets/shopping-cart.png';
import { useSelector, useDispatch } from "react-redux";
import Cart from "../Cart/Cart";
import { showCart } from "../../ReduxActions/showCartActions";
import SignIn from "../Account/SignIn/SignIn";
import { showSignIn } from "../../ReduxActions/showSignInActions";


export default function Navigation() {
    const dispatch = useDispatch();
    const isSignedIn = useSelector(state => state.signedIn.isSignedIn);
    let numberOfItemsInCart = 0;
    useSelector(state => state.cart).forEach(item => numberOfItemsInCart += item.count);

    return (
        <Navbar expand='md' sticky="top" className="navbar">
            <Container className="navigation justify-content-between">
                <Navbar.Brand href='/' className="nav-brand">Rustic Roots Honey & Cider</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" id='navbar-toggle' />
                <Navbar.Collapse id='basic-navbar-nab'>
                    <Nav className='nav-links gap-5 ms-auto'>
                        <Nav.Link to={'/'} as={NavLink} className='nav-link'>Home</Nav.Link>
                        <Nav.Link to={'/shop'} as={NavLink} className='nav-link'>Shop</Nav.Link>
                        {isSignedIn ?
                            <Nav.Link to={'/account'} as={NavLink} className='nav-link'>Account</Nav.Link>
                            :
                            <Nav.Link onClick={() => { dispatch(showSignIn()) }}  className='nav-link'>Account</Nav.Link>
                        }
                        <Nav.Link onClick={() => { dispatch(showCart()) }}><img src={cart} alt='cart' /><div id='items-number'>{numberOfItemsInCart}</div></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <Cart />
            <SignIn />
        </Navbar>
    )
}