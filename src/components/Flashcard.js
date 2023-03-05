import styled from "styled-components";
import seta_play from "../assets/seta_play.png";
import seta_virar from "../assets/seta_virar.png";
import { useState } from "react";
import icone_certo from "../assets/icone_certo.png";
import icone_erro from "../assets/icone_erro.png";
import icone_quase from "../assets/icone_quase.png";

export default function Flashcard(props) {
  const { question, answer, numero, setActiveCounter, activeCounter } = props;
  const icone = [icone_erro, icone_quase, icone_certo];

  const altIconDesc = [
    "Ícone de erro",
    "Ícone de acerto parcial",
    "Ícone de acerto",
  ];
  const cores = ["#FF3030", "#FF922E", "#2FBE34"];
  const corInicial = "#333333";

  const numbers = [0, 1, 2];

  const iconDataTest = ["no-icon", "partial-icon", "zap-icon"];

  const altPlayDescription = `Ativar pergunta número ${numero}`;
  const altFlipDescription = `Virar pergunta número ${numero}`;
  const pergunta = `Pergunta ${numero}`;

  const [inativa, setInativa] = useState(true);
  const [virada, setVirada] = useState(false);
  const [check, setCheck] = useState(undefined);
  const [textColor, setTextColor] = useState(corInicial);

  function ativar() {
    setInativa(false);
  }
  function virar() {
    setVirada(true);
  }

  function desativar(check) {
    setInativa(true);
    setActiveCounter(activeCounter + 1);
    setCheck(check);
    setTextColor(cores[check]);
  }

  if (inativa === true && virada === false) {
    return (
      <Inativa data-test="flashcard">
        <Paragraph
          cor={textColor}
          corInicial={corInicial}
          data-test="flashcard-text"
        >
          {pergunta}
        </Paragraph>
        <img
          src={seta_play}
          alt={altPlayDescription}
          onClick={ativar}
          data-test="play-btn"
        />
      </Inativa>
    );
  } else if (inativa === false && virada === false) {
    return (
      <Ativa data-test="flashcard">
        <p data-test="flashcard-text">{question}</p>
        <img
          src={seta_virar}
          alt={altFlipDescription}
          onClick={virar}
          data-test="turn-btn"
        />
      </Ativa>
    );
  } else if (inativa === false && virada === true) {
    return (
      <Virada data-test="flashcard">
        <p data-test="flashcard-text">{answer}</p>
        <Botoes>
          <BotaoResposta
            cor="#FF3030"
            onClick={() => {
              desativar(numbers[0]);
            }}
            data-test="no-btn"
          >
            Não lembrei
          </BotaoResposta>
          <BotaoResposta
            cor="#FF922E"
            onClick={() => {
              desativar(numbers[1]);
            }}
            data-test="partial-btn"
          >
            Quase não lembrei
          </BotaoResposta>
          <BotaoResposta
            cor="#2FBE34"
            onClick={() => {
              desativar(numbers[2]);
            }}
            data-test="zap-btn"
          >
            Zap!
          </BotaoResposta>
        </Botoes>
      </Virada>
    );
  } else if (inativa === true && virada === true) {
    return (
      <Inativa data-test="flashcard">
        <Paragraph
          cor={textColor}
          corInicial={corInicial}
          data-test="flashcard-text"
        >
          {pergunta}
        </Paragraph>
        <img
          src={icone[check]}
          alt={altIconDesc[check]}
          data-test={iconDataTest[check]}
        />
      </Inativa>
    );
  }
}

const Paragraph = styled.p`
        font-family: 'Recursive', cursive;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: ${(props) => props.cor};
        text-decoration-line: ${(props) =>
          props.cor === props.corInicial ? "none" : "line-through"};
`;

const Botoes = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;

const BotaoResposta = styled.button`
    width: 85.17px;
    height: 37.17px;
    border-radius: 5px;
    text-decoration: none;
    border: none;
    background-color: ${(props) => props.cor};

    font-family: 'Recursive', cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    color: #FFFFFF;
`;

const Virada = styled.div`
    width: 300px;
    min-height: 131px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
    justify-content: space-between;
    p{
        font-family: 'Recursive', cursive;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
        margin: 18px 15px 18px 15px;
    }
`;

const Ativa = styled.div`
    width: 299px;
    height: 131px;
    background: #FFFFD5;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    position: relative;
    p{
        font-family: 'Recursive', cursive;
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 22px;
        color: #333333;
        margin: 18px 15px 18px 15px;
    }
    img{
        width: 30px;
        height: 20px;
        position: absolute;
        bottom: 6px;
        right: 15px;

    }
`;

const Inativa = styled.div`
    display: flex;
    flex-direction: row;
    width: 300px;
    height: 65px;
    background: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    align-items: center;
    justify-content: space-around;
    img{
        height: 23px;
    }
`;
