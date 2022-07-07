import React from "react";
import { createGlobalStyle } from "styled-components";

import Header from "./Header/index"


const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  } 
  body{
    background-color: 	#1C1C1C;
  }
`

export default function App() {
  return (
    <>
      <GlobalStyle/>
      <Header/>
    
    </>
  )
}

