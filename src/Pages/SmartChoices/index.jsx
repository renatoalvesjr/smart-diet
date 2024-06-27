import React, { useState, useEffect } from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
} from "mdb-react-ui-kit";
import Footer from "../../Components/Footer";
import Header from "../../Components/Header";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import alimentosNSaudaveis from "./foodU.json";
import alimentosSaudaveis from "./foodH.json";

export default function SmartChoices() {
  const [choiceU, setChoiceU] = useState(0);

  const [choice, setChoice] = useState(0);
  const [n, setN] = useState(0);
  const [gH, setGH] = useState(0);
  const [gU, setGU] = useState(0);

  const calc = () => {

    var taxaH = alimentosSaudaveis[choice].kcal / alimentosSaudaveis[choice].peso_gramas;
    var taxaU = alimentosNSaudaveis[choiceU].kcal / alimentosNSaudaveis[choiceU].peso_gramas;
    //descobrindo o total de calorias
    var kcalTotal = taxaU * n;
    //descobrindo a quantidade de gramas de alimentos que poderia ser comida no lugar
    var peso = kcalTotal / taxaH;
    setGH(peso);
    setGU(n);


  }
  const alterar = (i) => {
    setChoiceU(i)
    calc();
  }
  const alterarH = (i) => {
    setChoice(i)
    calc();
  }

  useEffect(() => { calc() });
  return (
    <section style={{ backgroundColor: "#eee" }}>
      <Header />
      <MDBContainer className="py-5">
        <MDBRow className="justify-content-center">
          <MDBCol lg="4" className="title">
            Smart Choices
          </MDBCol>
        </MDBRow>

        <MDBRow className="justify-content-center">
          <MDBCol lg="6" className="">
            <MDBCard className="my-5 p-2 smart-card">
              <MDBCardBody className="card-body">
                <MDBCardText className="fonte">Escolha a comida</MDBCardText>
                <DropdownButton
                  id="dropdown-item-button"
                  className="my-2 dropdown"
                  title={alimentosNSaudaveis[choiceU].nome}
                >
                  {alimentosNSaudaveis.map((alimento, i) => (
                    <Dropdown.Item
                      as="button"
                      key={i}
                      onClick={() => { alterar(i); }}
                    >
                      {alimento.nome}
                    </Dropdown.Item>
                  ))}
                </DropdownButton>
                <MDBInput className="input" type="number" onChange={(e) => setN(e.target.value)} placeholder="Digite o peso em gramas do alimento" />
                <MDBCardImage
                  className="img my-3"
                  src={alimentosNSaudaveis[choiceU].img}
                ></MDBCardImage>

              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="6" className="">
            <MDBCard className="my-5 p-2 smart-card">
              <MDBCardBody className="card-body">
                <MDBCardText className="fonte">
                  {
                    gH > 700 ?
                      "Você poderia se alimentar com " + Number(gH / 1000).toFixed(2) + "kg de " + alimentosSaudaveis[choice].nome + " em vez de " + gU + "g de " + alimentosNSaudaveis[choiceU].nome
                      : "Você poderia se alimentar com " + Math.round(gH) + "g de " + alimentosSaudaveis[choice].nome + " em vez de " + gU + "g de " + alimentosNSaudaveis[choiceU].nome

                  }


                </MDBCardText>

                <DropdownButton
                  id="dropdown-item-button"
                  className="my-2 dropdown"
                  title={alimentosSaudaveis[choice].nome}
                >
                  {alimentosSaudaveis.map((alimento, i) => (
                    <Dropdown.Item
                      as="button"
                      key={i}
                      onClick={() => { alterarH(i); }}
                    >
                      {alimento.nome}
                    </Dropdown.Item>
                  ))}
                </DropdownButton>
                <MDBCardImage
                  className="img my-3 rounded"
                  src={alimentosSaudaveis[choice].img}
                ></MDBCardImage>


              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
        <MDBRow className="justify-content-center">
          <MDBCol lg="4"></MDBCol>
        </MDBRow>
      </MDBContainer>
      <Footer />
    </section>
  );
}
