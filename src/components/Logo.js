import styled from "styled-components";

export default function Logo(props){
    const {logo}=props;
    return(
        <LogoComponentizado>
            <img src={logo} alt="logo"></img>
            <p>ZapRecall</p>
        </LogoComponentizado>
    )
};

const LogoComponentizado = styled.div`
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