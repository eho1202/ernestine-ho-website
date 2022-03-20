import React from "react";
import { ButtonA } from "./Resuable/ButtonElements";
import { EmailIcon, GitHubIcon, LinkedInIcon } from '@mui/icons-material/Email';
import Pdf from "../assets/Ernestine_Ho_Resume.pdf";
import {
  ContactContainer,
  ContactWrapper,
  ContactRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  BtnWrap,
  ImgWrap,
  Img,
  ContactLinkA,
  ContactLinkB,
  ContactLinkC,
  ContactIcons,
} from "./ContactElements";

const Contact = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headLine,
  darkText,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  dark,
  dark2,
}) => {
  return (
    <>
      <ContactContainer lightBg={!lightBg} id={id}>
        <ContactWrapper>
          <ContactRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headLine}</Heading>
                <ContactIcons darkText={darkText}>
                  <ContactLinkA
                    href="https://github.com/eho1202"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GitHubIcon />
                  </ContactLinkA>
                  <ContactLinkB
                    href="https://www.linkedin.com/in/ernestineho/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <LinkedInIcon />
                  </ContactLinkB>
                  <ContactLinkC
                    href="mailto:ernestineho1202@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <EmailIcon />
                  </ContactLinkC>
                </ContactIcons>
                <BtnWrap>
                  <ButtonA
                    href={Pdf}
                    target="_blank"
                    rel="noopener noreferrer"
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </ButtonA>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt}></Img>
              </ImgWrap>
            </Column2>
          </ContactRow>
        </ContactWrapper>
      </ContactContainer>
    </>
  );
};

export default Contact;
