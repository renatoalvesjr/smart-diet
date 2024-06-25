import React from "react";
import Header from "../../Components/HeaderMainPage";
import Footer from "../../Components/Footer";
import Post from "../../Components/Feed Components/Post";
import { MDBContainer } from "mdb-react-ui-kit";
import "../../images/avatarGabriel.jpg";

export default function Feed() {
    return (
        <>
            <Header />
            <MDBContainer className="py-5">
                <Post name="Renato Alves" avatar="../../images/avatarGabriel.jpg" text="Teste" date="2 min atrás" likes="5" comments="2" />
                <Post name="Gabriel Silva" avatar="../../images/avatarGabriel.jpg" text="Teste" date="2 min atrás" likes="5" comments="2" />
                <Post name="Mara Eliza" avatar="../../images/avatarGabriel.jpg" text="Teste" date="2 min atrás" likes="5" comments="2" />
            </MDBContainer>
            <Footer />
        </>
    );
}
