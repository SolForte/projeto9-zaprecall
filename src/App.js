import React from "react";
import styled from "styled-components";
import logo from "./assets/logo.png"
import { useState } from "react";
import Footer from "./components/Footer";

function App() {

  const cards = [
    { question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
    { question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
    { question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
    { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
    { question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
    { question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
    { question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
    { question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
  ]
  const counter = cards.length;
  const [activeCounter, setActiveCounter] = useState(0);

  return (
    <>
    <Body>
      <Logo>
        <img src={logo} alt="logo"></img>
        <p>ZapRecall</p>
      </Logo>

    </Body>

    <Footer counter={counter} activeCounter={activeCounter}/>
    </>
  );
}

export default App;

const Body = styled.div`
  width: 100%;
  height: 100%;
  background-color: #FB6B6B;
  display: flex;
  justify-content: center;
`

const Logo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    img{
        width: 52px;
        height: 60px;
        margin: 44px 10px 46px 0;
    };
    p{
        font-family: 'Righteous', cursive;
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        display: flex;
        text-align: center;
        letter-spacing: -0.012em;
        color: #FFFFFF;
        transform: rotate(0.58deg);
    };
`