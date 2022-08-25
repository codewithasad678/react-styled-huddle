import React from 'react'
import {FaFacebook,FaTwitter,FaInstagram,FaYoutube} from "react-icons/fa";
import { Flex } from './styles/Flex.styled';
import { SocialIconsStyle } from './styles/Social.styled';


export const SocialIcons = () => {
  return (
    <SocialIconsStyle>
        <li>
            <a href='https://facebook.com' ><FaFacebook/></a>
        </li>
        <li>
            <a href='https://instagram.com' ><FaInstagram/></a>
        </li>
        <li>
            <a href='https://twitter.com' ><FaTwitter/></a>
        </li>
        <li>
            <a href='https://youtube.com' ><FaYoutube/></a>
        </li>
    </SocialIconsStyle>
  )
}

export default SocialIcons