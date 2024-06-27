import React, { useState } from "react";
import {
    MDBCard,
    MDBCardBody,
    MDBCardText,
    MDBCol,
    MDBIcon,
    MDBInput,
    MDBRow,
} from "mdb-react-ui-kit";

import { Button } from "react-bootstrap";
import './styles.css';


export default function DescriptionCard() {
    const [name, setName] = useState('Renato Alves Junior');
    const [nameEdit, setNameEdit] = useState(true);

    const [email, setEmail] = useState('renato.alvesjr00@gmail');
    const [emailEdit, setEmailEdit] = useState(true);

    const [telefone, setTelefone] = useState('(11) 99999-9999');
    const [telEdit, setTelEdit] = useState(true);

    const [cidade, setCidade] = useState('Uberaba, MG');
    const [cidadeEdit, setCidadeEdit] = useState(true);

    const [objetivo, setObjetivo] = useState('Ganho de Massa');
    const [objetivoEdit, setObjetivoEdit] = useState(true);



    return (
        <>
            <MDBCard className="mb-4">
                <MDBCardBody>
                    <MDBRow>
                        <MDBCol sm="3">
                            <MDBCardText>Nome Completo</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="6">
                            <MDBInput className="text-muted text-editor" value={name} disabled={nameEdit} onChange={(e) => { setName(e.target.value) }}></MDBInput>
                        </MDBCol>
                        <MDBCol className="ms-5 ps-5 text-secondary" sm="1">
                            <Button className="btn-edit" onClick={() => { setNameEdit(!nameEdit) }} ><MDBIcon fas icon="pen" className="text-secondary" /></Button>
                        </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                        <MDBCol sm="3">
                            <MDBCardText>Email</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="6">
                            <MDBInput className="text-muted text-editor" value={email} disabled={emailEdit} onChange={(e) => { setEmail(e.target.value) }}></MDBInput>
                        </MDBCol>
                        <MDBCol className="ms-5 ps-5 text-secondary" sm="1">
                            <Button className="btn-edit" onClick={() => { setEmailEdit(!emailEdit) }}><MDBIcon fas icon="pen" className="text-secondary" /></Button>
                        </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                        <MDBCol sm="3">
                            <MDBCardText>Telefone</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="6">
                            <MDBInput className="text-muted text-editor" value={telefone} disabled={telEdit} onChange={(e) => { setTelefone(e.target.value) }}></MDBInput>
                        </MDBCol>
                        <MDBCol className="ms-5 ps-5 text-secondary" sm="1">
                            <Button className="btn-edit" onClick={() => { setTelEdit(!telEdit) }} ><MDBIcon fas icon="pen" className="text-secondary" /></Button>
                        </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                        <MDBCol sm="3">
                            <MDBCardText>Cidade</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="6">
                            <MDBInput className="text-muted text-editor" value={cidade} disabled={cidadeEdit} onChange={(e) => { setCidade(e.target.value) }}></MDBInput>
                        </MDBCol>
                        <MDBCol className="ms-5 ps-5 text-secondary" sm="1">
                            <Button className="btn-edit" onClick={() => { setCidadeEdit(!cidadeEdit) }} ><MDBIcon fas icon="pen" className="text-secondary" /></Button>
                        </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                        <MDBCol sm="3">
                            <MDBCardText>Objetivo</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="6">
                            <MDBInput className="text-muted text-editor" value={objetivo} disabled={objetivoEdit} onChange={(e) => { setObjetivo(e.target.value) }}></MDBInput>
                        </MDBCol>
                        <MDBCol className="ms-5 ps-5 text-secondary" sm="1">
                            <Button className="btn-edit" onClick={() => { setObjetivoEdit(!objetivoEdit) }}><MDBIcon fas icon="pen" className="text-secondary" /></Button>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </>
    );
}