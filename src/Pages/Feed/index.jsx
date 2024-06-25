import React from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Post from "../../Components/Feed Components/Post";
import CreatePost from "../../Components/Feed Components/CreatePost";
import { MDBContainer } from "mdb-react-ui-kit";

export default function Feed() {
  return (
    <>
      <Header />
      <MDBContainer className="py-2">
        <CreatePost />
        <Post name="Renato Alves" avatar="./avatarRenato.jpg" text="Teste1" date="2 min atrás" likes="15" comments="2" />
        <Post name="Gabriel Silva" avatar="./avatarGabriel.jpg" text="Teste2" date="4 horas atrás" likes="40" comments="7" />
        <Post name="Mara Eliza" avatar="./avatarMara.jpg" text="Teste3" date="2 dias atrás" likes="100" comments="21"/>
      </MDBContainer>
      <Footer />
    </>
  );
}
