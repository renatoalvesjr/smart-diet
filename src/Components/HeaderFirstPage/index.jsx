import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeaderFirstPage.css';
import Login from '../Login'

export default function Header() {
    const [showModalLogin, setShowModalLogin] = useState(false);

    const openModalLogin = () => {
        setShowModalLogin(true);
    };

    const closeModalLogin = () => {
        setShowModalLogin(false);
    };

    return (
        <> 
            <Navbar collapseOnSelect expand="md" className="bg-body-tertiary headerFirstPage position-sticky ps-0" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="/" style={{ color: 'red', fontFamily: 'Pacifico' }}>SmartDiet</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                        </Nav>
                        <Nav>
                            <Button className="btn" variant="" onClick={openModalLogin}>Login</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            {showModalLogin &&
                <div className="modal-backdrop" >
                    <Login onClose={closeModalLogin}/>
                </div>
            }
        </>
    );
}
