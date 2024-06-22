import React from 'react';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBProgress,
    MDBProgressBar,

} from 'mdb-react-ui-kit';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import FollowCard from '../../Components/Profile Components/FollowCard';
import SocialCard from '../../Components/Profile Components/SocialCard';
import DescriptionCard from '../../Components/Profile Components/DescriptionCard';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ProfilePage() {
    return (
        <section style={{ backgroundColor: '#eee' }}>
            <Header />
            <MDBContainer className="py-5">

                <MDBRow>
                    <MDBCol lg="4">
                        <FollowCard />

                        <SocialCard />
                    </MDBCol>
                    <MDBCol lg="8">
                        <DescriptionCard />

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