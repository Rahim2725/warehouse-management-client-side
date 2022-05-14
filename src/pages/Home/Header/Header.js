import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);
    const logout = () => {

        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }
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
                            <Nav.Link as={Link} to="/products">Products</Nav.Link>
                        </Nav>
                        <Nav>
                            {
                                user ?
                                    <>
                                        <Nav.Link as={Link} to="/mangeItem">Mange-Item</Nav.Link>
                                        <Nav.Link as={Link} to="/addProduct">Add-Product</Nav.Link>
                                        <Nav.Link as={Link} to="/myItem">My-Product</Nav.Link>
                                        <Nav.Link onClick={logout} as={Link} to="/">Logout</Nav.Link>
                                    </>
                                    :
                                    <Nav.Link as={Link} to="/login" >
                                        Login
                                    </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;