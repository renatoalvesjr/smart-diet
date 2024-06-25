import React from "react";
import { MDBCard, MDBCardBody, MDBCardHeader, MDBCardText } from "mdb-react-ui-kit";

export default function Post(props) {
    const avatar = "../" + props.avatar;
    console.log(avatar);
    return (
        <>
            <MDBCard className="mb-4">
                <MDBCardHeader className="d-flex align-items-center">

                    <img
                        src={avatar}
                        className="rounded-circle"
                        height="40"
                        width="40"
                        alt="Avatar"
                    />
                    <MDBCardText className="ms-3 mb-0 fw-bold">{props.name}</MDBCardText>
                </MDBCardHeader>
                <MDBCardBody>
                    <p>{props.text}</p>
                </MDBCardBody>
            </MDBCard>
        </>
    );
}