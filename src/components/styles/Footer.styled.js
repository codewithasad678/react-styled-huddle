import styled from "styled-components";

export const FooterStyled = styled.footer`
    background-color: ${(props ) => props.theme.footer};
    color:#fff;
    padding: 100px 0 60px;
    ul{
        list-style-type: none;
        margin-left: 30px;
    }
    ul li{
        margin-top: 20px;

    }
    p{
        text-align: right;
    }
    @media(max-width: ${(props) => props.theme.mobile}){
        ul{
            padding: 0;
        }
        p{
            text-align: center;
        }
    }
`

