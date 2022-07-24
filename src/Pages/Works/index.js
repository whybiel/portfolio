import React, { useState } from "react";
import * as S from "./style"


export default function Work() {

  const [project, setProject] = useState([{
    title: "ODS Santa Cruz",
    url: "https://whybiel.github.io/santacruz/",
    description: "Site feito com a finalidade de proporcionar soluções baseadas em problemas apontados pela ONU, conhecidos com ODS, destinadas ao bairro onde eu moro. Sendo um componente do desafio final do Vai na Web.",
  }])

  return (
    <S.Container>
      {project.map((item) => (

        <a href={item.url}>
          <S.BoxMap>
            <S.Shadow>
              <S.TitleMap>{item.title}</S.TitleMap>
            </S.Shadow>
          </S.BoxMap>
          <S.Details>
            <summary>Detalhes</summary>
            <p>{item.description}</p>
          </S.Details>
        </a>
      ))}
    </S.Container>
  )
}