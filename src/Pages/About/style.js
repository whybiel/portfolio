import styled from "styled-components"

import textbg from "./img/textbg.jpg"

export const Container = styled.section`
    width: 100%;

    margin-top:4em;

    display:flex;
    flex-direction: column;
    align-items: center;
`
export const Message = styled.h2`
    width: 70%;
    font-size:3em;
    text-align: center;
`
export const SpanMsg =styled.span`
    margin:0;
    color: rgba(225,225,225,0.01);
    background-image:url(${textbg});
    background-repeat:repeat ;
    animation: animate 15s ease-in-out infinite;
    text-align: center;
    text-transform: uppercase;
    font-weight: 900;
    -webkit-background-clip: text;

    @keyframes animate {
        0%,
        100%{
            background-position: left top;
        }
        25%{
            background-position: right bottom;
        }
        50%{
            background-position: left bottom;
        }
        75%{
            background-position: right top;
        }
    }
`
export const BoxAbout = styled.div`
    width: 90%;

    margin-top:4em;

    display:flex;
    align-items: center;
    justify-content: space-around;
`

export const ImgMy = styled.img`
    width: 30%;

    border: 2px solid #FFA500;
    border-radius:0px 20px 0px 20px;
`

export const SpanGlobal = styled.span`
    color:#FFA500;
    font-weight: 600;
`

export const P = styled.p`
    width: 30%;

    text-align: justify;
    font-size: 1.2em;
`
