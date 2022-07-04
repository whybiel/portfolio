import React from "react";
import styled from "styled-components";

import logo from "../img/logo.png"
import wts from "../img/whatsapp.png"
import insta from "../img/instagram.png"
import linkedin from "../img/linkedin.png"

const Container = styled.div`
    width: 100%;
    height: 100vh;

    background-image: linear-gradient(to top, #434343 0%, black 100%);

    font-family: 'Quicksand', sans-serif;
`

const NavBar = styled.nav`
    width: 100%;
    height: 10em;

    border: 2px solid red;

    display: flex;
    justify-content: space-between;
`

const BoxNav = styled.div`
    display: flex;
    align-items: center;
`

const LogoImg = styled.img`
    height: 10em;
`

const Name = styled.h1`

    font-weight: 200;
    font-style: italic;
`

const SocialMedia = styled.img`
    width: 25px;

    border-radius: 10px;

    cursor: pointer;

    &:hover{
        box-shadow: 0 0 5px 5px white;
    }
`

const BoxSocial = styled.div`
    width: 10%;

    display: flex;
    align-items: center;
    justify-content: space-around;
`

export default function App() {
    return (
        <Container>
            <NavBar>
                <BoxNav>
                    <LogoImg src={logo} alt="Logo GM" />
                    <Name>Gabriel Moraes</Name>
                </BoxNav>
                <BoxSocial>
                    <a href="https://wa.me/+5521987434106" target="_blank">
                        <SocialMedia src={wts} alt="Logo Whatsapp" />
                    </a>

                    <a href="https://www.linkedin.com/in/gabriel-henrique-ferreira-de-moraes-3328831ab/" target="_blank">
                        <SocialMedia src={linkedin} alt="Logo Linkedin" />
                    </a>

                    <a href="https://www.instagram.com/whybiel_/" target="_blank">
                        <SocialMedia src={insta} alt="Logo Instagram" />
                    </a>


                </BoxSocial>
            </NavBar>
        </Container>
    )
}