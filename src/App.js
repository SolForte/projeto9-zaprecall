import React from "react";
import styled from "styled-components";
import logo from "./assets/logo.png"
import { useState } from "react";
import Footer from "./components/Footer";
import Logo from "./components/Logo";
import Flashcard from "./components/Flashcard";

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

  const flashcards = cards.map(
    (element, index) => (
      <Flashcard
        key={index}
        question={element.question}
        answer={element.answer}
        numero={index+1}/>
    )
  )

  return (
    <>
    <Body>
      <Logo logo={logo}/>
      <Perguntas>
        {flashcards}
      </Perguntas>
    </Body>
    <Footer counter={counter} activeCounter={activeCounter}/>
    </>
  );
}

export default App;

const Body = styled.div`
  background-color: #FB6B6B;
  background: #FB6B6B;
  display: flex;
  flex-direction: column;
  margin-bottom: 70px;
`

const Perguntas = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
  margin-bottom: 46px;
  `