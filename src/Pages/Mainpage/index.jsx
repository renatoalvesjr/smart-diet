import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import './MainPage.css';

function MainPage() {

  const [fadeOut, setFadeOut] = useState(false);
  const navigate = useNavigate();
  const handleGetStartedClick = () => {
    setFadeOut(true);
    setTimeout(() => {
      navigate('/home')
    }, 500);
  };

  return (
    <>
        <Container
          fluid
          id="first-page-container"
          className={`p-0 ${
            fadeOut ? 'fadeOutRight' : ''
          }`}
        >
          <div className="img-main"></div>
          <div className="firstContent">
            <h1>SmartDiet</h1>
            <h2>Bem-vindo ao nosso site!</h2>
            <p>Convidamos você a explorar tudo o que temos para oferecer.</p>
            <div className="text-center">
              <Button variant="light" onClick={handleGetStartedClick}>
                Comece Por Aqui!
              </Button>
            </div>
          </div>
        </Container>
    </>
  );
}

export default MainPage;
