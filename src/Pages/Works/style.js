import styled from "styled-components";




export const Container = styled.section`
    width:95%;

    margin: 0 auto;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    @media (max-width:768px) {
        flex-direction: column;
        align-items: center;
    }
`



export const BoxMap = styled.div`
    width: 25vw;
    height: 30vh;

    margin:8vh 0 0vh 0;

    overflow: hidden;

    display: flex;
    align-items: flex-end;

    position: relative;

    @media (max-width:768px) {
        width: 100%;
    }
`

export const ImgMap = styled.img`
    width:100%;
    height: 100%;

    transition: 1s;

    &:hover{
        transform: scale(1.1);
    }
`

export const Shadow = styled.div`
    width: 100%;
    height: 8vh;
    
    background-image: linear-gradient(180deg, transparent 0%, #000 100%);

    z-index:5;

    display: flex;
    justify-content: center;
    align-items: center;

    position: absolute;
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

    @media (max-width:768px) {
        width: 100%;
    }
`

export const Summary = styled.summary`
    
    font-size: 1.2rem;
`

export const PMap = styled.p`
    width: 90%;
    margin-top: 1vh;


    text-align: justify;
    font-size: 1.1rem;
`
