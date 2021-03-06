import React from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import logo from "../../images/logo/logo.png";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { signOut } from "firebase/auth";
const Header = () => {
    const [user] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    };
    return (
        <nav>
            <Navbar bg="primary" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img height={30} src={logo}></img>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="home#services">Services</Nav.Link>
                            <Nav.Link href="home#experts">Experts</Nav.Link>
                            <Nav.Link as={Link} to="/home">
                                Home
                            </Nav.Link>
                            <Nav.Link as={Link} to="/about">
                                About
                            </Nav.Link>
                            {user && (
                                <>
                                    <Nav.Link className="btn btn-primary ml-2" as={Link} to="/addService">
                                        Add
                                    </Nav.Link>
                                    <Nav.Link as={Link} className="btn btn-primary ml-2" to="/manage">
                                        Manage
                                    </Nav.Link>
                                </>
                            )}

                            {user ? (
                                <button onClick={handleSignOut} className="btn btn-danger ml-2">
                                    sign out
                                </button>
                            ) : (
                                <Nav.Link as={Link} to="/login">
                                    Login
                                </Nav.Link>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </nav>
    );
};

export default Header;
