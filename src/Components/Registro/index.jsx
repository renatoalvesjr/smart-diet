import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
} from 'mdb-react-ui-kit';
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import './Registro.css'

function Registro({ onClose }) {

  const navigate = useNavigate();

    const handleGetStartedClick = () => {
        setTimeout(() => {
          navigate('/profile')
        }, 0);
    };

  return (
    <MDBContainer fluid>
      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
              <h2 className="fw-bold mb-2 text-uppercase">Registro</h2>
              <p className="text-white-50 mb-3">Crie sua conta!</p>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' placeholder='Nome' id='formControlLg' type='email' size="lg"/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' placeholder='Email' id='formControlLg' type='email' size="lg"/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' placeholder='Senha' id='formControlLg' type='password' size="lg"/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' placeholder='Confirme sua senha' id='formControlLg' type='password' size="lg"/>
              <Button variant="danger" className='mx-2 px-5 button-color' size='lg' onClick={handleGetStartedClick}>
                Registrar
              </Button>
              <p className="text-white-50 mt-3 mb-0">Ou</p>
              <div className='d-flex flex-row mb-3'>
                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='facebook-f' size="lg"/>
                </MDBBtn>
                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='twitter' size="lg"/>
                </MDBBtn>
                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='google' size="lg"/>
                </MDBBtn>
              </div>
              <div>
                <p className="mb-0">Já possui uma conta? <a onClick={onClose} href="#!" className="text-white-50 fw-bold">Login</a></p>
              </div>
              <Button variant="danger" className='mt-3 px-5 button-color' size='lg' onClick={onClose}>
                Fechar
              </Button>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Registro;
