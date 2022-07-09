import React from "react";
import { createGlobalStyle } from "styled-components";

import Header from "./components/Header/index"


const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  } 
  body{
    background-color: 	#1C1C1C;
  }
  ::-webkit-scrollbar{
    width:5px;
  }
  ::-webkit-scrollbar-track{
    background:#1C1C1C;
  }
  ::-webkit-scrollbar-thumb{
    width:2px;
    background:#FFA500;
    border-radius: 30px;
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

