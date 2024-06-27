import React from "react";
import { MDBCard, MDBCardBody, MDBCardHeader, MDBCardText, MDBCardFooter, MDBIcon } from "mdb-react-ui-kit";

export default function Post(props) {
    return (
        <>
            <MDBCard className="mb-4">
                <MDBCardHeader className="d-flex align-items-center">

                    <img
                        src={require(`${props.avatar}`)}
                        className="rounded-circle"
                        height="40"
                        width="40"
                        alt="Avatar"
                    />
                    <MDBCardText className="ms-3 mb-0 fw-bold">{props.name}</MDBCardText>
                    <small className="text-muted ms-auto">{props.date}</small>
                </MDBCardHeader>
                <MDBCardBody>
                    <p>{props.text}</p>
                </MDBCardBody>
                <MDBCardFooter className="d-flex">
                    <MDBIcon far icon="thumbs-up" className="me-0 pt-1 fw-bold" />
                    <MDBCardText className="mb-0 ms-1 me-2">{props.likes}</MDBCardText>
                    <MDBIcon far icon="thumbs-down" className="me-4 pt-1" />
                    <MDBIcon far icon="comment-dots" className="me-0 pt-1" />
                    <MDBCardText className="mb-0 ms-1 me-4">{props.comments}</MDBCardText>
                    <MDBIcon far icon="share-square" className="pt-1"/>
                    <MDBCardText className="mb-0 ms-1">Compartilhar</MDBCardText>
                </MDBCardFooter>
            </MDBCard >
        </>
    );
}