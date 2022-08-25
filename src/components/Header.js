import React from 'react'
import { ContainerStyled } from './styles/Container.styled'
import HeaderStyled,{Logo,Nav} from './styles/Header.styled';
import { Button } from './styles/Button.styled';
import {Flex} from './styles/Flex.styled';
import { Image } from './styles/Header.styled';
const Header = () => {
  return (
    <>
          <HeaderStyled >
            <ContainerStyled>
              <Nav>
                <Logo src="./images/logo.svg" alt="logo"/>
                <Button>Try It Free</Button>
              </Nav>
              <Flex>
                <div>
                  <h1>Build The Community Your Fans will Love</h1>

                  <p>Lorem Ipsum 2002222 kldfjsdkjfklasd d fklasdjfksdajfkdsfj asdklf
                    dlsafj sdkafjaskld fsdja
                    f sdalfksjfjsdalfjslf
                  </p>
                  <Button bg="#ff0099" color='#ff' >Get Started For Free</Button>
                </div>
                <Image src="./Images/illustration-mockups.svg" alt='' />
              </Flex>
            </ContainerStyled>
          </HeaderStyled>

    </>
  )
}

export default Header