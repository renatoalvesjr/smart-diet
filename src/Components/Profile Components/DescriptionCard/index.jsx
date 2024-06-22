import React, { useState } from "react";
import {
    MDBCard,
    MDBCardBody,
    MDBCardText,
    MDBCol,
    MDBRow,
} from "mdb-react-ui-kit";

export default function DescriptionCard() {
    return (
        <>
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
        </>
    );
}