import React, { useState } from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBIcon,
    MDBInputGroup
} from 'mdb-react-ui-kit';
import { Button, Popover, PopoverBody, OverlayTrigger } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function FollowCard() {
    const [name, setName] = useState('Renato');
    const [follow, setFollow] = useState('Seguir');

    const changeName = (e) => {
        setName(e.target.value);
    }

    const changeFollow = () => {
        if (follow === 'Seguir') {
            setFollow('Seguindo');
        } else {
            setFollow('Seguir');
        }
    }

    const popover = (
        <Popover dismiss id="popover-basic">
            <PopoverBody>
                <form>
                    <MDBInputGroup textBefore="Foto">
                        <input
                            className="form-control"
                            type="file"
                            placeholder="Nome"
                            aria-label="Nome"
                        />
                    </MDBInputGroup>
                    <MDBInputGroup textBefore="Nome">
                        <input
                            className="form-control"
                            type="text"
                            placeholder="Nome"
                            aria-label="Nome"
                            id='name'
                            value={name}
                            onChange={changeName}
                        />
                    </MDBInputGroup>
                </form>


            </PopoverBody>
        </Popover>
    )
    return (
        <>
            <MDBCard className="mb-4">
                <div className='m-2 position-absolute end-0'>
                    <OverlayTrigger trigger="click" placement="right" overlay={popover} rootClose={true}>
                        <Button size="sm" variant="secondary"><MDBIcon fas icon="pen" /></Button>
                    </OverlayTrigger>
                </div>

                <MDBCardBody className="text-center">

                    <MDBCardImage
                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                        alt="avatar"
                        className="rounded-circle"
                        style={{ width: '150px' }}
                        fluid />
                    <p className="fw-bold text-decoration-underline text-muted my-3">{name}</p>

                    <div className="d-flex justify-content-center mb-2">
                        <Button variant={follow === 'Seguir' ? 'primary' : 'secondary'} onClick={changeFollow}>{follow}</Button>

                    </div>
                </MDBCardBody>
            </MDBCard >
        </>
    )
}