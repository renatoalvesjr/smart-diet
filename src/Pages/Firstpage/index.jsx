import React, { useState } from "react";
import Header from "../../Components/HeaderFirstPage";
import Footer from "../../Components/Footer";
import { Container, Card, Button, Form, Row, Col } from 'react-bootstrap';
import './FirstPage.css';
import PlayStore from "../../Components/ButtonComponents/PlayStoreButton";
import Apple from "../../Components/ButtonComponents/AppStoreButton";

export default function FirstPage() {
    return (
        <>
            <Header />
            <div className="img-second"></div>
            <Container fluid id="second-page-container">
                <Row className="justify-content-center">
                    <Col md={6} className="">
                        <Card className="main-card shadow mb-4 bg-transparent">
                                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                                    <Card.Title style={{ color: 'red', fontFamily: 'Pacifico', fontSize: '90px', marginBottom:'40px'}}>SmartDiet</Card.Title>
                                    <Card.Text style={{color: 'white', fontFamily: 'Arial', fontSize: '20px' }} className="text-center">
                                        Entre para a familia SmartDiet, e venha conosco fazer a escolha certa. Uma dieta saudável e inteligente.
                                    </Card.Text>
                                </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} className="d-flex align-items-start justify-content-end">
                        <div className="stacked-cards">
                            <Card className="main-card shadow mb-4 gradient-bg">
                                <Card.Body className="d-flex flex-column justify-content-center align-items-center">
                                    <Card.Title>Comece Agora!</Card.Title>
                                    <Card.Text className="text-center">
                                        <Button variant="" className="mt-3 register">Registrar-se</Button>
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
