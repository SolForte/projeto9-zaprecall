import styled from "styled-components";

export default function Footer(props){
    const {counter, activeCounter} = props;
    return(
        <Counter>
            {activeCounter}/{counter} CONCLUÍDOS
        </Counter>
    );
}

const Counter = styled.div`
  width: 100%;
  height: 70px;
  background-color: #FFFFFF;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
`