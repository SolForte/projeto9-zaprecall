import styled from "styled-components";
import seta_play from "../assets/seta_play.png"

export default function Flashcard(props){
    const {question, answer, numero} = props;
    const altPlayDescription = `Abrir pergunta número ${numero}`

    return(
        <Inativa>
            <p>Pergunta número {numero}</p>
            <img src={seta_play} alt={altPlayDescription}/>
        </Inativa>
    )
}

const Inativa = styled.div`
    display: flex;
    flex-direction: row;
    width: 300px;
    height: 65px;
    margin-bottom: 25px;
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