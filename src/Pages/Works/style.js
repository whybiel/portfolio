import styled from "styled-components";

import Ods from "./img/ODS.png"


export const Container = styled.section`
    width:90%;

    margin: 0 auto;

    display: flex;
    flex-wrap: wrap;
`

export const BoxMap = styled.div`
    width: 25vw;
    height: 30vh;

    background-image: url(${Ods});
    background-size: cover;

    display: flex;
    align-items: flex-end;
`

export const Shadow = styled.div`
    width: 100%;
    height: 8vh;
    
    background-image: linear-gradient(180deg, transparent 0%, #000 100%);

    display: flex;
    justify-content: center;
    align-items: center;
`

export const TitleMap = styled.h2`
    color:#fff;
`
export const Details = styled.details`
    width: 25vw;

    color:#fff;

    border-radius: 0 0 10px 10px;

    background-color: #363636;

    padding: 2vh 0 2vh 0.5vw;
`
