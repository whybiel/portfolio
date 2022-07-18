import styled from "styled-components";
import {Link } from "react-router-dom"

export const Container = styled.div`
    width: 100%;
    height: 10em;

    background-color: transparent;

    font-family: 'Quicksand', sans-serif;
    color: #fff;
`

export const NavBar = styled.nav`
    width: 100%;
    height: 10em;
    
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
    width: 75%;
  }
`

export const BoxNav = styled.div`
    display: flex;
    align-items: center;
`

export const LogoImg = styled.img`
    height: 10em;

    @media (max-width: 768px) {
    height:8em;
  }
`

export const List = styled.ul`
    width: 40%;
    height: 10em;

    list-style: none;

    display: flex;
    justify-content: space-around;
    align-items: center;
`

export const Anchor = styled(Link)`
    color:#fff;
    text-decoration: none;
    font-size: 1.3em;

    padding:10px 15px;

    border-radius: 10px;

    overflow: hidden;

    &:hover{
    transition: box-shadow 0.9s;
    box-shadow: inset  150px 0px #FFA500;
  }
    `