import React from "react";
import { 
    FaFacebook, 
    FaInstagram, 
    FaYoutube, 
    FaLinkedin, 
    FaTwitter
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">Pizza</SocialLogo>
            <SocialIcons>
              <SocialIconLink
                href="/"
                target="_blank"
                // aria-label="Facebook"
                // rel="noopener norefererr"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href="/"
                target="_blank"
                // aria-label="Instagram"
                // rel="noopener norefererr"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="/"
                target="_blank"
                // aria-label="Youtube"
                // rel="noopener norefererr"
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="/"
                target="_blank"
                // aria-label="Twitter"
                // rel="noopener norefererr"
              >
                <FaTwitter />
              </SocialIconLink>

              <SocialIconLink
                href="/"
                target="_blank"
                // aria-label="Linkedin"
                // rel="noopener norefererr"
              >
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
