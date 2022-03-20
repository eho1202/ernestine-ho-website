import * as React from "react";
import { Button } from "./Resuable/ButtonElements";
import {
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroH1,
  HeroP,
} from "./HeroSectionElements";

const HeroSection = (primary, dark, dark2) => {
  return (
    <HeroContainer id="Homepage">
      <HeroBg></HeroBg>
      <HeroContent>
        <HeroH1>Welcome! I'm Ernestine Ho</HeroH1>
        <HeroP>
          I am a Computer Engineering student at Ryerson University in Toronto,
          Canada.
        </HeroP>
        <Button
          to="about"
          smooth={true}
          duraction={500}
          spy={true}
          exact="true"
          offset={-80}
          primary={primary ? 1 : 0}
          dark={dark ? 0 : 1}
          dark2={dark2 ? 1 : 0}
        >
          Let's go!
        </Button>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
