import React from "react";

import * as S from "./style"
import Rjimg from "./img/imgRJ.jpeg"
import Faetecimg from "./img/imgFAETEC.jpeg"
import Finalimg from "./img/imgFINAL.jpeg"

export default function About() {
  return (
    <S.Container>
      <S.Message>Olá, me chamo <S.SpanMsg>Gabriel Henrique Ferreira de Moraes</S.SpanMsg>...</S.Message>
      <S.BoxAbout>
        <S.ImgMy src={Rjimg} alt="foto minha no cristo redentor"/>
        <S.P>...tenho 18 anos e nasci e cresci na cidade do <S.SpanGlobal>Rio de Janeiro/RJ</S.SpanGlobal>. Sou uma pessoa que se caracteriza pela calma, empatia, comunicação e criatividade. E com essa criatividade, sonhos não ficam nem um momento fora da cabeça, sempre pensando em como alcançá-los.</S.P>
      </S.BoxAbout>
      <S.BoxAbout>
        <S.P>Comecei minha carreira como <S.SpanGlobal>Auxiliar Administrativo</S.SpanGlobal>, fazendo ensino médio técnico na Faetec, onde conheci pessoas maravilhosas. E um pouco antes de acabar meu Ensino Médio, me deparei com a tecnologia!!</S.P>
        <S.ImgMy src={Faetecimg} alt="foto minha na faetec"/>
      </S.BoxAbout>
      <S.BoxAbout>
        <S.ImgMy src={Finalimg} alt="foto minha"/>
        <S.P>A partir daí fiquei apaixonado pelo desenvolvimento <S.SpanGlobal>Front-end</S.SpanGlobal> e na infinidade de coisas que podem ser feitas com ele. Então busco me empenhar para entrar no mercado de trabalho como <S.SpanGlobal>programador</S.SpanGlobal> e alcançar meus desejos.</S.P>
      </S.BoxAbout>



    </S.Container>
  )
}