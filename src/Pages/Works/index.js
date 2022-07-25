import React, { useState } from "react";
import * as S from "./style"

//IMG

import Ods from "./img/ODS.png"
import Todoflix from "./img/Todoflix.png"
import Starwars from "./img/starwars.png"
import Cronometro from "./img/cronometro.png"
import Recipes from "./img/recipes.png"
import Todo from "./img/todo.png"
import Calc from "./img/calculadora.png"
import Vnw from "./img/vnw.png"

export default function Work() {

  const [project] = useState([{
    title: "ODS Santa Cruz",
    img: Ods,
    url: "https://whybiel.github.io/santacruz/",
    description: "Site feito com a finalidade de proporcionar soluções baseadas em problemas apontados pela ONU, conhecidos com ODS, destinadas ao bairro onde eu moro. Sendo um componente do desafio final do Vai na Web.",
  },
  {
    title: "ToDo Flix",
    img: Todoflix,
    url: "https://whybiel.github.io/Todoflix/",
    description: "Site de Filme com funções de filtro, modais, rotas etc. Filmes escolhidos e implementados a mão, com a finalidade de entregar o desafio final do MOD 2.",

  },
  {
    title: "Star Wars",
    img: Starwars,
    url: "https://whybiel.github.io/Stars-Wars/",
    description: "Site produzido com base em um desing do star wars, feito com somente HTML e CSS, para desafio final do MOD 1.",
  },
  {
    title: "Cronometro",
    img: Cronometro,
    url: "https://whybiel.github.io/Cronometro/",
    description: "Cronometro feito sem modelo, usando animação e ReactJS.",
  },
  {
    title: "Recipes",
    img: Recipes,
    url: "https://whybiel.github.io/PairPrograming/",
    description: "Site produzido com base em um desing para relembrar modelos de caixa e elementos do CSS.",
  },
  {
    title: "ToDo",
    img: Todo,
    url: "https://whybiel.github.io/ToDo/",
    description: "Site de lista de tarefas usando ReactJs, criando o modelo e implementando excluir tarefa.",
  },
  {
    title: "Calculadora",
    img: Calc,
    url: "https://whybiel.github.io/calculadora/",
    description: "Calculadora feita com ReactJS, funcionando perfeitamente todas as funções.",
  },
  {
    title: "Vai na Web",
    img: Vnw,
    url: "https://vainaweb.herokuapp.com/",
    description: "Site produzido com base em um desing do vai na web, para processo seletivo de Dev Front-end Jnr.",
  }])

  return (
    <S.Container>
      {project.map((item) => (

        <a key={item.title} href={item.url}>
          <S.BoxMap>
            <S.ImgMap src={item.img} alt={`Projeto: ${item.title}`}/>
            <S.Shadow>
              <S.TitleMap>{item.title}</S.TitleMap>
            </S.Shadow>
          </S.BoxMap>
          <S.Details>
            <S.Summary>Detalhes</S.Summary>
            <S.PMap>{item.description}</S.PMap>
          </S.Details>
        </a>
      ))}
    </S.Container>
  )
}