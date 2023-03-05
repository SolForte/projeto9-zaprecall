import styled from "styled-components";
import seta_play from "../assets/seta_play.png"
import seta_virar from "../assets/seta_virar.png"
import { useState } from "react";

export default function Flashcard(props){
    const {question, answer, numero} = props;

    const altPlayDescription = `Abrir pergunta número ${numero}`
    const altFlipDescription = `Virar pergunta número ${numero}`

    const [inativa, setInativa] = useState(true)

    function ativar(){
        setInativa(false);
    }

    if (inativa === true){
        return(
            <Inativa>
                <p>Pergunta número {numero}</p>
                <img src={seta_play} alt={altPlayDescription} onClick={ativar}/>
            </Inativa>)
        }
    if (inativa === false){
        return(
            <Ativa>
                <p>{question}</p>
                <img src={seta_virar} alt={altFlipDescription}/>
            </Ativa>
        )
    }
    
}

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
`

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
    p{
        font-family: 'Recursive', cursive;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        color: #333333;
    }
    img{
        width: 20px;
        height: 23px;
    }
`