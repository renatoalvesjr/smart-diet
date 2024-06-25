import React, { useState } from "react";
import Header from "../../Components/HeaderFirstPage";
import Footer from "../../Components/Footer";
import { Container, Card, Button, Form, Row, Col } from 'react-bootstrap';
import './FirstPage.css';
import PlayStore from "../../Components/ButtonComponents/PlayStoreButton";
import Apple from "../../Components/ButtonComponents/AppStoreButton";

export default function FirstPage() {
    const [email, setEmail] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = () => {
        // Aqui você pode implementar a lógica para lidar com o envio do e-mail
        console.log('Email submetido:', email);
        // Exemplo simples: limpar o campo após o envio
        setEmail('');
    };

    return (
        <>
            <Header />
            <div className="img-second"></div>
            <Container fluid id="second-page-container">
                <Row className="justify-content-end">
                    <Col md={6} className="d-flex align-items-start justify-content-end">
                        <div className="stacked-cards">
                            <Card className="main-card shadow mb-4 gradient-bg">
                                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                                    <Card.Title>Apresentação do Site</Card.Title>
                                    <Card.Text className="text-center">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida, ipsum id fringilla commodo, sapien lorem hendrerit mi, et volutpat justo ipsum non purus.
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card className="main-card shadow mb-4 gradient-bg">
                                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                                    <Card.Title>Registrar</Card.Title>
                                    <Card.Text className="text-center">
                                        <Form.Group controlId="formEmail" className="w-100"> {/* Alterado de w-75 para w-100 */}
                                            <Form.Control
                                                type="email"
                                                placeholder="Digite seu email"
                                                value={email}
                                                onChange={handleEmailChange}
                                                className="gradient-bg"
                                            />
                                        </Form.Group>
                                        <Button variant="dark" onClick={handleSubmit} className="mt-3 register">Registrar</Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>

                            <Card className="main-card shadow gradient-bg">
                                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                                    <Card.Title>Baixar o Aplicativo</Card.Title>
                                    <Card.Text className="text-center">
                                        Baixe o nosso aplicativo para dispositivos móveis.
                                    </Card.Text>
                                    <Row className="justify-content-center">
                                        <Col xs="auto">
                                            <PlayStore />
                                        </Col>
                                        <Col xs="auto">
                                            <Apple />
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}
