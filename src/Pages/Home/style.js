import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 35em;

  position: relative;
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
    width: 18em;
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
