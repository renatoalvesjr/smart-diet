import React, { useState } from "react";
import {
    MDBCard,
    MDBCardBody,
    MDBListGroup,
    MDBListGroupItem,
    MDBIcon,
    MDBCardText,
    MDBInputGroup
} from 'mdb-react-ui-kit';

import { Button, Popover, PopoverBody, OverlayTrigger } from 'react-bootstrap';

export default function SocialCard() {
    const [twitter, setTwitter] = useState("renato_O_alves");
    const [insta, setInsta] = useState("renatooaalves");
    const [face, setFace] = useState("renatoalvesjr");
    const [pinterest, setPinterest] = useState("renatoalvesjr00");

    const popover = (
        <Popover dismiss id="popover-basic">
            <PopoverBody>
                <form>
                    <MDBInputGroup className="m-2" textBefore={<MDBIcon fab icon="twitter fa-lg" style={{ color: '#55acee' }} />}>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Twitter"
                            aria-label="Twitter"
                            value={twitter}
                            onChange={e => setTwitter(e.target.value)}
                        />
                    </MDBInputGroup>
                    <MDBInputGroup className="m-2" textBefore={<MDBIcon fab icon="instagram fa-lg" style={{ color: '#E1306C' }} />}>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Instagram"
                            aria-label="Instagram"
                            value={insta}
                            onChange={e => setInsta(e.target.value)}
                        />
                    </MDBInputGroup>
                    <MDBInputGroup className="m-2" textBefore={<MDBIcon fab icon="facebook fa-lg" style={{ color: '#4267B2' }} />}>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Facebook"
                            aria-label="Facebook"
                            value={face}
                            onChange={e => setFace(e.target.value)}
                        />
                    </MDBInputGroup>
                    <MDBInputGroup className="m-2" textBefore={<MDBIcon fab icon="pinterest fa-lg" style={{ color: '#E60023' }} />}>
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Pinterest"
                            aria-label="Pinterest"
                            value={pinterest}
                            onChange={e => setPinterest(e.target.value)}
                        />
                    </MDBInputGroup>
                </form>
            </PopoverBody>
        </Popover>
    )

    return (
        <>
            <MDBCard className="mb-4 rounded-3">
                <div className='m-2 position-relative'>
                    <div className="position-absolute end-0">
                        <OverlayTrigger trigger="click" placement="right" overlay={popover} rootClose={true}>
                            <Button size="sm" variant="secondary"><MDBIcon fas icon="pen" /></Button>
                        </OverlayTrigger></div>
                </div>

                <MDBCardBody className="mt-4 p-0">
                    <MDBListGroup>
                        <MDBListGroupItem noBorders className="d-flex justify-content-between align-items-center p-3">
                            <MDBIcon fab icon="twitter fa-lg" style={{ color: '#55acee' }} />
                            <MDBCardText><a className="text-decoration-none" href={`https://twitter.com/${twitter}`} rel="noreferrer" target="_blank">@{twitter}</a></MDBCardText>
                        </MDBListGroupItem>
                        <MDBListGroupItem noBorders className="d-flex justify-content-between align-items-center p-3">
                            <MDBIcon fab icon="instagram fa-lg" style={{ color: '#E1306C' }} />
                            <MDBCardText><a className="text-decoration-none" href={`https://instagram.com/${insta}`} rel="noreferrer" target="_blank">@{insta}</a></MDBCardText>
                        </MDBListGroupItem>
                        <MDBListGroupItem noBorders className="d-flex justify-content-between align-items-center p-3">
                            <MDBIcon fab icon="facebook fa-lg" style={{ color: '#4267B2' }} />
                            <MDBCardText><a className="text-decoration-none" href={`https://facebook.com/${face}`} rel="noreferrer" target="_blank">@{face}</a></MDBCardText>
                        </MDBListGroupItem>
                        <MDBListGroupItem noBorders className="d-flex justify-content-between align-items-center p-3">
                            <MDBIcon fab icon="pinterest fa-lg" style={{ color: '#E60023' }} />
                            <MDBCardText><a className="text-decoration-none" href={`https://pinterest.com/${pinterest}`} rel="noreferrer" target="_blank">@{pinterest}</a></MDBCardText>
                        </MDBListGroupItem>
                    </MDBListGroup>
                </MDBCardBody>
            </MDBCard>
        </>
    );
}
