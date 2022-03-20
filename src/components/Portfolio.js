import React from "react";
import Icon1 from "../assets/images/Portfolio_website.svg";
import Icon2 from "../assets/images/Covify.svg";
import Icon3 from "../assets/images/SACHS_App.svg";
import {
  PortfolioContainer,
  PortfolioH1,
  PortfolioWrapper,
  PortfolioCard,
  PortfolioIcon,
  PortfolioH2,
  PortfolioP,
  PortfolioLink,
} from "./PortfolioElements";

const Portfolio = () => {
  return (
    <>
      <PortfolioContainer id="portfolio">
        <PortfolioH1>My Projects</PortfolioH1>
        <PortfolioWrapper>
          <PortfolioLink
            href="https://github.com/eho1202/ernestine-ho-website"
            target="_blank"
            rel="noreferrer"
          >
            <PortfolioCard>
              <PortfolioIcon src={Icon1} />
              <PortfolioH2>Personal Website</PortfolioH2>
              <PortfolioP>
                Portfolio website created using React JS and Styled Components.
              </PortfolioP>
            </PortfolioCard>
          </PortfolioLink>
          <PortfolioLink
            href="https://github.com/Linja82/Covify"
            target="_blank"
            rel="noreferrer"
          >
            <PortfolioCard>
              <PortfolioIcon src={Icon2} />
              <PortfolioH2>Covify</PortfolioH2>
              <PortfolioP>
                Python Discord bot that provides information about Covid-19 in
                Ontario.
              </PortfolioP>
            </PortfolioCard>
          </PortfolioLink>
          <PortfolioLink
            href="https://github.com/pabloj2001/StAugustineCHSAndroidApp"
            target="_blank"
            rel="noreferrer"
          >
            <PortfolioCard>
              <PortfolioIcon src={Icon3} />
              <PortfolioH2>St. Augustine CHS Android App</PortfolioH2>
              <PortfolioP>
                High school Android app used by over 250+ students.
              </PortfolioP>
            </PortfolioCard>
          </PortfolioLink>
        </PortfolioWrapper>
      </PortfolioContainer>
    </>
  );
};

export default Portfolio;
