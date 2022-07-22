import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 35em;

  position: relative;

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
export const SubContainer = styled.section`
  width: 100%;

  display: flex;
  align-items: center;
`

export const BoxImg = styled.div`
  width: 30em;
  z-index:5;

  @media (max-width: 768px) {
    height: 23em;
  }
`

export const Image = styled.img`
  width: 100%;

  @media (max-width: 768px) {
    width: 16em;
  }

`
export const BoxText = styled.div`
  width: 40em;
  height:20em;

  @media (max-width: 768px) {
    height:15em;
  }
`

export const Message = styled.h2`
  font-size: 4em;
  font-family: 'Koulen', cursive;
  color:#FFA500;

  @media (max-width: 768px) {
    font-size:2.2em;
  }
`

export const Office = styled.h2`
  font-size: 9em;
  font-family: 'Koulen', cursive;
  letter-spacing: 5px;

  position: absolute;
  left:2.6em;
  top:1em;

  opacity: 20%;

  @media (max-width: 768px) {
    font-size:3.2em;
    letter-spacing: 3px;

    left:1em;
    top:5em;
  }
`

export const Footer = styled.footer`
  height: 9em;

  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 768px) {
    margin: 0 0.5em 0 0.5em;
    font-size:0.9em;
  }
`

export const SocialMedia = styled.img`
    width: 30px;
    border-radius: 10px;
    cursor: pointer;
    &:hover{
        box-shadow: 0 0 5px 5px white;
    }
`

export const BoxSocial = styled.div`
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
