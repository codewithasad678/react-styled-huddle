import styled from "styled-components";

const HeaderStyled = styled.header`
    background-color: ${(props) => props.theme.color.header};
    padding: 40px 0px;
`
export default HeaderStyled;


// navbar 
export const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 40px;
    @media(max-width:${props => props.theme.mobile}) {
        flex-direction: column;
    }

`

// logo image
export const Logo = styled.img`
@media(max-width:${props => props.theme.mobile}) {
        margin-bottom: 40px;
    }
`
// right main image
export const Image = styled.img`
    width:375px;
    margin-left:40px;

    @media(max-width:${props => props.theme.mobile}) {
        margin: 40px 0 30px;
    }

`


