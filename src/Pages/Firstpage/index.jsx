import React from "react";
import Header from "../../Components/HeaderFirstPage";
import Footer from "../../Components/Footer";
import { Container } from 'react-bootstrap';
import './FirstPage.css'

export default function FirstPage(){
    return (
        <>
            <Header />
                 <div className="img-second"></div>
                    <Container fluid id="second-page-container">
                        <div className="secondContent">
                        </div>
                    </Container>
            <Footer />
        </>
       
    )

}
