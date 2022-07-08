import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"

import logo from "../img/logo.png"
import Home from "../Pages/home"
import About from "../Pages/about"
import Contact from "../Pages/contact"

const Container = styled.div`
    width: 100%;
    height: 10em;

    background-color: transparent;

    font-family: 'Quicksand', sans-serif;
    color: #fff;
`

const NavBar = styled.nav`
    width: 100%;
    height: 10em;
    
    display: flex;
    justify-content: space-between;
`

const BoxNav = styled.div`
    display: flex;
    align-items: center;
`

const LogoImg = styled.img`
    height: 10em;
`

const List = styled.ul`
    width: 40%;
    height: 10em;

    list-style: none;

    display: flex;
    justify-content: space-around;
    align-items: center;
`

const Anchor = styled(Link)`
    color:#fff;
    text-decoration: none;
    font-size: 1.3em;

    padding:10px 15px;

    border-radius: 10px;

    overflow: hidden;

    &:hover{
    transition: box-shadow 0.9s;
    box-shadow: inset  150px 0px white;
    color:#000;
  }
    `

export default function App() {
    return (
        <Container>

            <Router>
                <NavBar>
                    <BoxNav>
                        <LogoImg src={logo} alt="Logo GM" />
                    </BoxNav>
                    <List>
                        <li><Anchor to='/'>Home</Anchor></li>
                        <li><Anchor to='/about'>About</Anchor></li>
                        <li><Anchor to='/contact'>Contact</Anchor></li>
                    </List>

                </NavBar>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />} />
                </Routes>
            </Router>
        </Container>
    )
}
