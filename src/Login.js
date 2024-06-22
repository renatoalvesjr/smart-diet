import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './Login.css';

const Login = () => {
  return (
    <Container fluid className="vh-100 d-flex justify-content-center align-items-center">
      <Row className="w-100">
        <Col md={{ span: 4, offset: 4 }}>
          <h2 className="text-center mb-4">Login</h2>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100 mt-3">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;

