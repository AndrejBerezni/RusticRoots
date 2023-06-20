import React from "react";
import './Navbar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

export default function Navigation() {
    return (
        <Navbar expand='md' sticky="top">
            <Container className="navigation justify-content-between">
                <Navbar.Brand href='/' className="nav-brand">Rustic Roots Honey & Cider</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" id='navbar-toggle'/>
                <Navbar.Collapse id='basic-navbar-nab'>
                    <Nav className='gap-5 ms-auto'>
                        <Nav.Link to={'/'} as={NavLink} className='nav-link'>Home</Nav.Link>
                        <Nav.Link to={'/shop'} as={NavLink} className='nav-link'>Shop</Nav.Link>
                        <Nav.Link to={'/account'} as={NavLink} className='nav-link'>Account</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}