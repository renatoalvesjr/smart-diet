import React from "react";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Figure from 'react-bootstrap/Figure';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();
    return (
        <Navbar collapseOnSelect expand="md" className="bg-body-tertiary" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="/smart-diet" style={{ color: 'red', fontFamily: 'Pacifico' }}>SmartDiet</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link onClick={() => navigate("/feed")}>Feed</Nav.Link>
                        <Nav.Link onClick={() => navigate("/progresso")}>Progresso</Nav.Link>
                        <Nav.Link onClick={() => navigate("/ranking")}>Ranking</Nav.Link>
                        <Nav.Link onClick={() => navigate("/smartchoices")}>SmartChoices</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link onClick={() => navigate("/profile")}>Meu Perfil</Nav.Link>
                        <Nav.Link onClick={() => navigate("/profile")}>
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
