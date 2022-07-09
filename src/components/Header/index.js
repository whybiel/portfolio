import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"

import * as S from "./style"
import logo from "./img/logo.png"
import Home from "../../Pages/Home"
import About from "../../Pages/About"
import Works from "../../Pages/Works"



export default function App() {
    return (
        <S.Container>

            <Router>
                <S.NavBar>
                    <S.BoxNav>
                        <S.LogoImg src={logo} alt="Logo GM" />
                    </S.BoxNav>
                    <S.List>
                        <li><S.Anchor to='/'>Home</S.Anchor></li>
                        <li><S.Anchor to='/about'>About</S.Anchor></li>
                        <li><S.Anchor to='/works'>Works</S.Anchor></li>
                    </S.List>
                </S.NavBar>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/works' element={<Works />} />
                </Routes>
            </Router>
        </S.Container>
    )
}
