import React from "react";
import { EmailIcon, GitHubIcon, LinkedInIcon } from '@mui/icons-material/Email';
import { animateScroll as scroll } from "react-scroll";
import logo from "../assets/images/logo.png";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
  LogoImg,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <FooterLinksContainer>
              <FooterLink
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                About Me
              </FooterLink>
              <FooterLink
                to="portfolio"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                My Projects
              </FooterLink>
              <FooterLink
                to="contact"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                Contact Me
              </FooterLink>
            </FooterLinksContainer>

            <SocialLogo to="/" onClick={toggleHome}>
              <LogoImg src={logo} alt="" />
            </SocialLogo>

            <SocialIcons>
              <SocialIconLink
                href="https://www.linkedin.com/in/ernestineho/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <LinkedInIcon />
              </SocialIconLink>
              <SocialIconLink
                href="https://github.com/eho1202"
                target="_blank"
                aria-label="GitHub"
              >
                <GitHubIcon />
              </SocialIconLink>
              <SocialIconLink
                href="mailto:ernestineho1202@gmail.com"
                target="_blank"
                aria-label="Email"
              >
                <EmailIcon />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
