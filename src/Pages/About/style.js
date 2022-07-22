import styled from "styled-components"

import textbg from "./img/textbg.jpg"

export const Container = styled.section`
    width: 100%;

    margin-top:4em;

    display:flex;
    flex-direction: column;
    align-items: center;

    -webkit-animation: slide-in-blurred-top 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;
    animation: slide-in-blurred-top 0.6s cubic-bezier(0.230, 1.000, 0.320, 1.000) both;

  @-webkit-keyframes slide-in-blurred-top {
  0% {
    -webkit-transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
            transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
    -webkit-transform-origin: 50% 0%;
            transform-origin: 50% 0%;
    -webkit-filter: blur(40px);
            filter: blur(40px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) scaleY(1) scaleX(1);
            transform: translateY(0) scaleY(1) scaleX(1);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
}
@keyframes slide-in-blurred-top {
  0% {
    -webkit-transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
            transform: translateY(-1000px) scaleY(2.5) scaleX(0.2);
    -webkit-transform-origin: 50% 0%;
            transform-origin: 50% 0%;
    -webkit-filter: blur(40px);
            filter: blur(40px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0) scaleY(1) scaleX(1);
            transform: translateY(0) scaleY(1) scaleX(1);
    -webkit-transform-origin: 50% 50%;
            transform-origin: 50% 50%;
    -webkit-filter: blur(0);
            filter: blur(0);
    opacity: 1;
  }
}
`
export const Message = styled.h2`
    width: 70%;
    font-size:3em;
    text-align: center;

    @media (max-width:768px) {
        font-size: 2em;
    }
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


    @media (max-width:768px) {
        font-size: 1em;
    }

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

    @media (max-width:768px) {
        width: 50%;
    }
`

export const SpanGlobal = styled.span`
    color:#FFA500;
    font-weight: 600;
`

export const P = styled.p`
    width: 30%;

    text-align: justify;
    font-size: 1.5em;

    @media (max-width:768px) {
        width: 40%;

        font-size: 0.9em;
    }
`
