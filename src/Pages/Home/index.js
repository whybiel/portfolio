import React, { useEffect, useState } from "react";

import * as S from "./style"
import my from "./img/eu.png"
import wts from "./img/whatsapp.png"
import insta from "./img/instagram.png"
import linkedin from "./img/linkedin.png"

export default function Home() {
  const [Text, setText] = useState("Hi!")

  useEffect(() => {
    setTimeout(() => {
      setText("I'm Gabriel Moraes!!")
    }, 10000)
  }, [Text])

  return (
    <S.Container>
      <S.SubContainer>
        <S.BoxImg>
          <S.Image src={my} />
        </S.BoxImg>
        < S.BoxText>
          <S.Message>{Text}</S.Message>
        </ S.BoxText>
      </S.SubContainer>

      <S.Office>Web Developer</S.Office>
      <S.Footer>
        <p>Site criado por Gabriel Henrique Ferreira de Moraes</p>
        <S.BoxSocial>
          <a href="https://wa.me/+5521987434106">
            <S.SocialMedia src={wts} alt="Logo Whatsapp" />
          </a>

          <a href="https://www.linkedin.com/in/gabriel-henrique-ferreira-de-moraes-3328831ab/">
            <S.SocialMedia src={linkedin} alt="Logo Linkedin" />
          </a>

          <a href="https://www.instagram.com/whybiel_/">
            <S.SocialMedia src={insta} alt="Logo Instagram" />
          </a>
        </S.BoxSocial>
      </S.Footer>
    </S.Container>
  )
}