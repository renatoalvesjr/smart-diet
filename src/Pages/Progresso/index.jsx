import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Alimentos from "../../Components/Alimentos";
import { MDBCard, MDBCardTitle, MDBRow, MDBContainer, MDBCol, MDBCardBody, MDBIcon, MDBCardText, MDBDropdown, MDBProgress, MDBProgressBar, MDBDropdownToggle, MDBDropdownItem, MDBDropdownMenu } from "mdb-react-ui-kit";
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
                    <MDBCol>
                        <MDBCard className="py-2">
                            <MDBCardTitle className="text-center">Progresso Semanal</MDBCardTitle>
                            <MDBCardBody>
                                <MDBCard className="my-3">
                                    <MDBCardTitle className="text-center">Caminhada</MDBCardTitle>
                                    <MDBCardBody className="text-center">
                                        <MDBIcon fas icon="running" size="3x" />
                                        <MDBProgress height='20'>
                                            <MDBProgressBar width='70' valuemin={0} valuemax={100}>
                                                70%
                                            </MDBProgressBar>
                                        </MDBProgress>
                                        <MDBCardText>7km / 10km</MDBCardText>
                                        <MDBDropdown>
                                            <MDBDropdownToggle tag="a" className="text-center btn btn-primary">Add</MDBDropdownToggle>
                                            <MDBDropdownMenu>
                                                <MDBDropdownItem link>1km</MDBDropdownItem>
                                                <MDBDropdownItem link>2km</MDBDropdownItem>
                                                <MDBDropdownItem link>3km</MDBDropdownItem>
                                                <MDBDropdownItem link>4km</MDBDropdownItem>
                                                <MDBDropdownItem link>5km</MDBDropdownItem>
                                            </MDBDropdownMenu>
                                        </MDBDropdown>
                                    </MDBCardBody>
                                </MDBCard>
                                <MDBCard className="my-3">
                                    <MDBCardTitle className="text-center">Musculação</MDBCardTitle>
                                    <MDBCardBody className="text-center">
                                        <MDBIcon fas icon="dumbbell" size="3x" />
                                        <MDBProgress height='20'>
                                            <MDBProgressBar width='25' valuemin={0} valuemax={100}>
                                                25%
                                            </MDBProgressBar>
                                        </MDBProgress>
                                    </MDBCardBody>
                                </MDBCard>
                                <MDBCard className="my-3">
                                    <MDBCardTitle className="text-center">Natação</MDBCardTitle>

                                    <MDBCardBody className="text-center">
                                        <MDBIcon fas icon="person-swimming" size="3x" />
                                        <MDBProgress height='20'>
                                            <MDBProgressBar width='25' valuemin={0} valuemax={100}>
                                                25%
                                            </MDBProgressBar>
                                        </MDBProgress>
                                    </MDBCardBody>
                                </MDBCard>
                                <MDBCard className="my-3">
                                    <MDBCardTitle className="text-center">Bicicleta</MDBCardTitle>
                                    <MDBCardBody className="text-center">
                                        <MDBIcon fas icon="person-biking" size="3x" />
                                        <MDBProgress height='20'>
                                            <MDBProgressBar width='25' valuemin={0} valuemax={100}>
                                                25%
                                            </MDBProgressBar>
                                        </MDBProgress>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <Footer />
        </>
    );
}