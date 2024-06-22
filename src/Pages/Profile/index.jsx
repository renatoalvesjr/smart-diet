import React from 'react';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBProgress,
    MDBProgressBar,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem
} from 'mdb-react-ui-kit';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function ProfilePage() {
    return (
        <section style={{ backgroundColor: '#eee' }}>
            <Header />
            <MDBContainer className="py-5">

                <MDBRow>
                    <MDBCol lg="4">
                        <MDBCard className="mb-4">
                            <MDBCardBody className="text-center">
                                <MDBCardImage
                                    src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                    alt="avatar"
                                    className="rounded-circle"
                                    style={{ width: '150px' }}
                                    fluid />
                                <p className="text-muted my-3"><u>Renato</u></p>
                                <div className="d-flex justify-content-center mb-2">
                                    <MDBBtn>Seguir</MDBBtn>

                                </div>
                            </MDBCardBody>
                        </MDBCard>

                        <MDBCard className="mb-4 mb-lg-0">
                            <MDBCardBody className="p-0">
                                <MDBListGroup flush className="rounded-3">
                                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                        <MDBIcon fab icon="twitter fa-lg" style={{ color: '#55acee' }} />
                                        <MDBCardText>@renato_O_alves</MDBCardText>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                        <MDBIcon fab icon="instagram fa-lg" style={{ color: '#ac2bac' }} />
                                        <MDBCardText>@renatooaalves</MDBCardText>
                                    </MDBListGroupItem>
                                    <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                        <MDBIcon fab icon="facebook fa-lg" style={{ color: '#3b5998' }} />
                                        <MDBCardText>Renato Alves Junior</MDBCardText>
                                    </MDBListGroupItem>
                                </MDBListGroup>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                    <MDBCol lg="8">
                        <MDBCard className="mb-4">
                            <MDBCardBody>
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Nome Completo</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">Renato Alves Junior</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Email</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">renato.alvesjr00@gmail.com</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Telefone</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">(34) 99994-9555</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Cidade</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">Uberaba, Minas Gerais, Brasil</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                                <hr />
                                <MDBRow>
                                    <MDBCol sm="3">
                                        <MDBCardText>Objetivo</MDBCardText>
                                    </MDBCol>
                                    <MDBCol sm="9">
                                        <MDBCardText className="text-muted">Ganho de Massa</MDBCardText>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>

                        <MDBRow>
                            <MDBCol md="6">
                                <MDBCard className="mb-4 mb-md-0">
                                    <MDBCardBody>
                                        <MDBCardText className="mb-4"><span className=" font-italic me-1">Progresso Diário</span></MDBCardText>
                                        <MDBCardText className="mb-1" style={{ fontSize: '.88rem' }}>Calorias</MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar width={83.3} valuemin={0} valuemax={100}>2500/3000</MDBProgressBar >
                                        </MDBProgress>

                                        <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Proteínas</MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar width={50} valuemin={0} valuemax={100}>150/300</MDBProgressBar >
                                        </MDBProgress>

                                        <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Carboidratos</MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar width={89} valuemin={0} valuemax={100}>2500/3000</MDBProgressBar >
                                        </MDBProgress>

                                        <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Gordura</MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar bgColor='warning' width={33.3} valuemin={0} valuemax={100}>10/30</MDBProgressBar >
                                        </MDBProgress>

                                        <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Sono</MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar width={87.5} valuemin={0} valuemax={100}>7h/8h</MDBProgressBar >
                                        </MDBProgress>

                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>

                            <MDBCol md="6">
                                <MDBCard className="mb-4 mb-md-0">
                                    <MDBCardBody>
                                        <MDBCardText className="mb-4"><span className=" font-italic me-1">Atividades Semanais</span></MDBCardText>

                                        <MDBCardText className="mb-1" style={{ fontSize: '.77rem' }}>Caminhada</MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar width={80} valuemin={0} valuemax={100}> 4.5km/5km</MDBProgressBar >
                                        </MDBProgress>

                                        <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Musculação</MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar width={50} valuemin={0} valuemax={100}> 3h/6h</MDBProgressBar >
                                        </MDBProgress>

                                        <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Natação</MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar bgColor='success' width={100} valuemin={0} valuemax={100}> 2h/2h</MDBProgressBar >
                                        </MDBProgress>

                                        <MDBCardText className="mt-4 mb-1" style={{ fontSize: '.77rem' }}>Luta</MDBCardText>
                                        <MDBProgress className="rounded">
                                            <MDBProgressBar width={75} valuemin={0} valuemax={100}> 1.5h/2h</MDBProgressBar >
                                        </MDBProgress>

                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <Footer />
        </section>
    );
}