import React, { useEffect, useState } from "react";
import styled from "styled-components";

import my from "../img/eu.png"
import wts from "../img/whatsapp.png"
import insta from "../img/instagram.png"
import linkedin from "../img/linkedin.png"

const Container = styled.div`
  width: 100%;
  height: 35em;

  position: relative;
`
const SubContainer = styled.section`
  width: 100%;

  display: flex;
  align-items: center;
`

const BoxImg = styled.div`
  width: 30em;
  z-index:5;
`

const Image = styled.img`
  width: 100%;
`
const BoxText = styled.div`
  width: 40em;
  height:20em;
`

const Message = styled.h2`
  font-size: 4em;
  font-family: 'Koulen', cursive;
`

const Office = styled.h2`
  font-size: 9em;
  font-family: 'Koulen', cursive;
  letter-spacing: 5px;

  position: absolute;
  left:2.6em;
  top:1em;

  opacity: 20%;
`

const Footer = styled.footer`
  height: 9em;

  display: flex;
  align-items: center;
  justify-content: space-around;
`

const SocialMedia = styled.img`
    width: 30px;
    border-radius: 10px;
    cursor: pointer;
    &:hover{
        box-shadow: 0 0 5px 5px white;
    }
`

const BoxSocial = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`



export default function App() {
  const [Text, setText] = useState("Hi!")

  useEffect(() => {
    setTimeout(() => {
      setText("I'm Gabriel Moraes!!")
    }, 10000)
  }, [Text])

  return (
    <Container>
      <SubContainer>
        <BoxImg>
          <Image src={my} />
        </BoxImg>
        < BoxText>
          <Message>{Text}</Message>
        </ BoxText>
      </SubContainer>

      <Office>Web Developer</Office>
      <Footer>
        <p>Site criado por Gabriel Henrique Ferreira de Moraes</p>
        <BoxSocial>
          <a href="https://wa.me/+5521987434106">
            <SocialMedia src={wts} alt="Logo Whatsapp" />
          </a>

          <a href="https://www.linkedin.com/in/gabriel-henrique-ferreira-de-moraes-3328831ab/">
            <SocialMedia src={linkedin} alt="Logo Linkedin" />
          </a>

          <a href="https://www.instagram.com/whybiel_/">
            <SocialMedia src={insta} alt="Logo Instagram" />
          </a>
        </BoxSocial>
      </Footer>
    </Container>
  )
}

//alo