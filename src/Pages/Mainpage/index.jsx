import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import Header from '../../Components/HeaderMainPage';
import Footer from '../../Components/Footer';
import './MainPage.css';

function MainPage() {
  const [showMainPage, setShowMainPage] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const handleGetStartedClick = () => {
    setFadeOut(true);
    setTimeout(() => {
      setShowMainPage(true);
    }, 500);
  };

  return (
    <>
      {!showMainPage && (
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
      )}

      {showMainPage && (
        <>
            
            <Header />
            <div className="img-second"></div>
            <Container fluid id="second-page-container">
                <div className="secondContent">
                    
                </div>
            </Container>
            <Footer />
        </>
      )}
    </>
  );
}

export default MainPage;
