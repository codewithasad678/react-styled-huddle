import React from 'react';
import {SocialIcons} from './SocialIcons';
import { ContainerStyled } from './styles/Container.styled';
import { Flex } from './styles/Flex.styled';
import { FooterStyled } from './styles/Footer.styled';
const Footer = () => {
  return (
   <FooterStyled>
     <div>
      <ContainerStyled >
        <img src='./images/logo_white.svg' alt='' />
        <Flex>
          <ul>
            <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled </li>
            <li>+92 307 6791417</li>
            <li>example@gmail.com</li>
          </ul>

          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ's</li>
          </ul>

          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact Us</li>
          </ul>
          {/* {Social lInk} */}
          <SocialIcons/>
        </Flex>  
        <p>&copy; 2022 Huddle.All rights reserved</p>
      </ContainerStyled>
    </div>
   </FooterStyled>
  )
}

export default Footer