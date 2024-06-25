import React from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Figure from 'react-bootstrap/Figure';
import { Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HeaderMainPage.css'

export default function Header() {
    return (
        <Navbar collapseOnSelect expand="md" className="bg-body-tertiary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/" style={{ color: 'red', fontFamily: 'Pacifico' }}>SmartDiet</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    </Nav>
                    <Nav>
                        <Button className="btn"variant=""> Login</Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
