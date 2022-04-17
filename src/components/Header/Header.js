import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase.init';
import './Header.css';

const Header = () => {
    const [user] = useAuthState(auth);
    const logOut = () => {
        signOut(auth);
    }
    return (
        <>
            <Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/home">Health Couch</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className='justify-content-end' id="responsive-navbar-nav">
                        <Nav>
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/myservices">My Services</Nav.Link>
                            {
                                user ?
                                    <Nav.Link onClick={logOut} as={Link} to="/registration">Log Out</Nav.Link>
                                    : <Nav.Link as={Link} to="/login">Login</Nav.Link>
                            }
                            <Nav.Link as={Link} to="/registration">Registration</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    );
};

export default Header;