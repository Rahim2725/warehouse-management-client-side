import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div>
            <Navbar className='shadow mb-5 ' collapseOnSelect expand="lg" bg="light">
                <Container>
                    <Navbar.Brand as={Link} to="/">Smart Phones Shop</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                        </Nav>
                        <Nav>
                            <>
                                <Nav.Link as={Link} to="/mangeItem">Mange-Item</Nav.Link>
                                <Nav.Link as={Link} to="/addItem">Add-Item</Nav.Link>
                                <Nav.Link as={Link} to="/myItem">My-Item</Nav.Link>
                                <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
                            </> <Nav.Link as={Link} to="/login" >
                                Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;