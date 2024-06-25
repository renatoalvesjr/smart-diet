import { MDBCard, MDBContainer, MDBCardHeader, MDBCardText, MDBCardBody, MDBDropdown, MDBIcon } from "mdb-react-ui-kit";
import React, { useState } from "react";
import { Button, Dropdown } from "react-bootstrap";

export default function CreatePost() {
    const [privacy, setPrivacy] = React.useState("Público");
    const [post, setPost] = React.useState("");

    const createPost = () => {
        console.log(post);
    };

    return (
        <>
            <MDBContainer className="py-5">
                <MDBCard className="mb-4">
                    <MDBCardHeader className="d-flex align-items-center">
                        <img
                            src={require("../Post/avatarRenato.jpg")}
                            className="rounded-circle"
                            height="40"
                            width="40"
                            alt="Avatar"
                        />
                        <MDBCardText className="ms-3 mb-0 fw-bold">Renato Alves</MDBCardText>
                    </MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardText>
                            <textarea
                                className="form-control"
                                id="exampleFormControlTextarea1"
                                rows="3"
                                placeholder="Compartilhe suas ideias..."
                                onChange={(e) => setPost(e.target.value)}
                            ></textarea>
                        </MDBCardText>
                        <MDBContainer className="d-flex align-items-center m-0 p-0">
                            <Button variant="dark" className="float-end" onClick={createPost}>Postar</Button>
                            <Dropdown className="ms-auto">
                                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                    <MDBIcon fas icon="unlock" className="me-2" />
                                    {privacy}
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item onClick={() => setPrivacy("Público")}>Público</Dropdown.Item>
                                    <Dropdown.Item onClick={() => setPrivacy("Somente seguidores")}>Somente seguidores</Dropdown.Item>
                                    <Dropdown.Item onClick={() => setPrivacy("Privado")}>Privado</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </MDBContainer>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        </>
    );
}