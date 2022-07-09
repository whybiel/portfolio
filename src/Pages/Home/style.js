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
`

export const Image = styled.img`
  width: 100%;
`
export const BoxText = styled.div`
  width: 40em;
  height:20em;
`

export const Message = styled.h2`
  font-size: 4em;
  font-family: 'Koulen', cursive;
  color:#FFA500;
`

export const Office = styled.h2`
  font-size: 9em;
  font-family: 'Koulen', cursive;
  letter-spacing: 5px;

  position: absolute;
  left:2.6em;
  top:1em;

  opacity: 20%;
`

export const Footer = styled.footer`
  height: 9em;

  display: flex;
  align-items: center;
  justify-content: space-around;
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
