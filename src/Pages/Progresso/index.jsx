import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Alimentos from "../../Components/Alimentos";
import { MDBCard, MDBCardTitle, MDBRow, MDBContainer, MDBCol, MDBCardBody } from "mdb-react-ui-kit";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Progresso() {
    return (
        <>
            <Header />
            <MDBContainer className="p-5">
                <MDBRow fluid>
                    <MDBCol>
                        <MDBCard className="py-2">
                            <MDBCardTitle className="text-center">Progresso Diário</MDBCardTitle>
                            <MDBCardBody>
                                <Alimentos />
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <Footer />
        </>
    );
}