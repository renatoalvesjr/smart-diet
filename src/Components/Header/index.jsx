import React from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Figure from 'react-bootstrap/Figure';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
    return (
        <Navbar collapseOnSelect expand="md" className="bg-body-tertiary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/" style={{ color: 'red', fontFamily: 'Pacifico' }}>SmartDiet</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Feed</Nav.Link>
                        <Nav.Link href="/progress">Progresso</Nav.Link>
                        <Nav.Link href="/">Objetivos</Nav.Link>
                        <Nav.Link href="/">Ranking</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/profile">Meu Perfil</Nav.Link>
                        <Nav.Link href="/profile">
                            <Figure.Image
                                width={25}
                                height={25}
                                alt="profile picture"
                                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                            />
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
