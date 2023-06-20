import React from "react";
import './Navbar.css';
import { Nav, Navbar, Container} from "react-bootstrap";
import { NavLink }from "react-router-dom";

export default function Navigation() {
    return (
<Navbar>
    <Container  className="navigation justify-content-space-between">
        <Navbar.Brand href='/'>Rustic Roots Honey & Cider</Navbar.Brand>
        <Nav className='gap-5'>
            <Nav.Link to={'/'} as={NavLink} className='nav-link'>Home</Nav.Link>
            <Nav.Link to={'/shop'} as={NavLink} className='nav-link'>Shop</Nav.Link>
            <Nav.Link to={'/account'} as={NavLink} className='nav-link'>Account</Nav.Link>
        </Nav>
    </Container>
</Navbar>
    )
}