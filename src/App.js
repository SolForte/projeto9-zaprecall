import React from "react";
import styled from "styled-components";
import logo from "./assets/logo.png"
import { useState } from "react";
import Footer from "./components/Footer";
import Logo from "./components/Logo";

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


  //Dúvida: O logo é estático. É necessário componentizar mesmo assim?

  return (
    <Body>
      <Logo logo={logo}/>
      <Footer counter={counter} activeCounter={activeCounter}/>
    </Body>
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