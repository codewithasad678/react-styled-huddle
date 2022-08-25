import styled from "styled-components";
export const StyleCard = styled.div`
    display: flex;
    align-items: center;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0,0,0,0.15);
    border-radius: 15px;
    margin: 40px 0;
    padding: 60px;
    flex-direction:${({layout}) => layout || "row"};

    img{
        width: 80%;
    }
    & > div {
        flex: 1;
    }
    @media(max-width: ${(props) => props.theme.mobile}){
        flex-direction: column;
    }
`