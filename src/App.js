import { ThemeProvider } from "styled-components";
import React from "react";
import { GlobalStyle } from "./components/styles/Global";
import Header from "./components/Header";
import content from "./content";
import { ContainerStyled } from "./components/styles/Container.styled";
import Card from "./components/Card";
import Footer from "./components/Footer";

const theme = {
    color:{
        header:"#ebfbff",
        body:"#fff",
        footer:"#003333"
    },
    mobile:"786px",
}
const App = () => {
    
    return (
        <>
        <ThemeProvider theme={theme}  >
                <GlobalStyle/>
                <Header/>
                <ContainerStyled>
                    {content.map((item,index) => {
                        return(
                            <Card key={index} item={item} />
                        )
                    })}
                </ContainerStyled>
                <Footer />
        </ThemeProvider>
        </>

        );
}
export default App;