import React from "react";
import { createGlobalStyle } from "styled-components";

import Home from "./Home/index"

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    color: white;
  } 
`

export default function App() {
  return (
    <>
      <GlobalStyle/>
      <Home/>
    </>
  )
}

