import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,

} from 'mdb-react-ui-kit';
import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import FollowCard from '../../Components/Profile Components/FollowCard';
import SocialCard from '../../Components/Profile Components/SocialCard';
import DescriptionCard from '../../Components/Profile Components/DescriptionCard';
import ProgressBar from "../../Components/ProgresBar";
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
                    <MDBCardText className="mb-4">
                      <span className=" font-italic me-1">
                        Progresso Diário
                      </span>
                    </MDBCardText>


                    <MDBCardText
                      className="mb-1"
                      style={{ fontSize: ".88rem" }}
                    >
                      Calorias
                    </MDBCardText>
                    <ProgressBar un={'kcal'} atingido={1500} total={2000} />

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Proteínas
                    </MDBCardText>
                    <ProgressBar un={'g'} atingido={50} total={200} />

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Carboidratos
                    </MDBCardText>
                    <ProgressBar un={'g'} atingido={65} total={100} />

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Gordura
                    </MDBCardText>
                    <ProgressBar un={'g'} atingido={5} total={20} />

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Sono
                    </MDBCardText>
                    <ProgressBar un={'h'} atingido={7} total={8} />


                  </MDBCardBody>
                </MDBCard>
              </MDBCol>

              <MDBCol md="6">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4">
                      <span className=" font-italic me-1">
                        Atividades Semanais
                      </span>
                    </MDBCardText>

                    <MDBCardText
                      className="mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Caminhada
                    </MDBCardText>
                    <ProgressBar un={'h'} atingido={2} total={3} />

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Musculação
                    </MDBCardText>
                    <ProgressBar un={'h'} atingido={1.5} total={5} />

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Natação
                    </MDBCardText>
                    <ProgressBar un={'h'} atingido={1.5} total={2} />

                    <MDBCardText
                      className="mt-4 mb-1"
                      style={{ fontSize: ".77rem" }}
                    >
                      Luta
                    </MDBCardText>
                    <ProgressBar un={'h'} atingido={2} total={2} />

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
