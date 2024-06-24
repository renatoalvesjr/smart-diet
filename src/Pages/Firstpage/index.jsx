import React, { useState } from "react";
import Header from "../../Components/HeaderFirstPage";
import Footer from "../../Components/Footer";
import { Container, Card, Button, Form, Row, Col } from 'react-bootstrap';
import './FirstPage.css';
import AppStoreButton from "../../Components/MobileStoreButton/AppStoreButton";

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
                <Row className="justify-content-md-center">
                    {/* Card principal */}
                    <Col md={6}>
                        <Card className="text-center main-card shadow">
                            <Card.Img variant="top" src="https://via.placeholder.com/800x400" className="card-img-top" />
                            <Card.Body>
                                <Card.Title className="mb-3">Apresentação do Site</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus gravida, ipsum id fringilla commodo, sapien lorem hendrerit mi, et volutpat justo ipsum non purus.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    {/* Coluna para os botões */}
                    <Col md={6} className="d-flex align-items-center justify-content-center">
                        <Card className="text-center w-75 buttons-card">
                            <Card.Body>
                                <Card className="mb-3 action-card">
                                    <Card.Body className="d-flex flex-column align-items-center">
                                        <Card.Title>Registrar</Card.Title>
                                        <Form.Group controlId="formEmail" className="w-75">
                                            <Form.Control
                                                type="email"
                                                placeholder="Digite seu email"
                                                value={email}
                                                onChange={handleEmailChange}
                                            />
                                        </Form.Group>
                                        <Button variant="dark" onClick={handleSubmit} className="mt-3">Registrar</Button>
                                    </Card.Body>
                                </Card>

                                {/* Card de Baixar o Aplicativo */}
                                <Card className="mb-3 action-card">
                                    <Card.Body>
                                        <Card.Title>Baixar o Aplicativo</Card.Title>
                                        <Card.Text>
                                            Baixe o nosso aplicativo para dispositivos móveis.
                                        </Card.Text>
                                        <AppStoreButton/>
                                       
                                    </Card.Body>
                                </Card>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
}
