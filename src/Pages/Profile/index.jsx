import React from "react";
import Header from "../../Components/Header";
import Card from 'react-bootstrap/Card';
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

export default function Profile() {
    return (
        <>
            <Header />
            <Card bg="light">

                <Card.Body>
                    <Card.Img variant="top" src="https://cdn-icons-png.flaticon.com/512/149/149071.png" style={{ width: 150, height: 150 }} />
                    <Card.Title>Nome</Card.Title>
                    <Card.Text>
                        Email
                    </Card.Text>
                </Card.Body>
            </Card>
            <Tabs>
                <Tab eventKey="home" title="Informações">

                </Tab>
                <Tab eventKey="profile" title="Objetivos">

                </Tab>

            </Tabs>
        </>
    );
}