import React from "react";
import Icon1 from "../assets/images/Portfolio_website.svg";
import Icon2 from "../assets/images/Covify.svg";
import Icon3 from "../assets/images/SACHS_App.svg";
import Icon4 from "../assets/images/Books.svg";
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
            href="https://github.com/eho1202/Covify"
            target="_blank"
            rel="noreferrer"
          >
            <PortfolioCard>
              <PortfolioIcon src={Icon2} />
              <PortfolioH2>Covify</PortfolioH2>
              <PortfolioP>
                Discord bot created in Python that provides information about Covid-19 in
                Ontario.
              </PortfolioP>
            </PortfolioCard>
          </PortfolioLink>
          <PortfolioLink
            href="https://github.com/eho1202/StAugustineCHSAndroidApp"
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
          <PortfolioLink
            href="https://github.com/eho1202/BookStore-Application"
            target="_blank"
            rel="noreferrer"
          >
            <PortfolioCard>
              <PortfolioIcon src={Icon4} />
              <PortfolioH2>BookStore Application</PortfolioH2>
              <PortfolioP>
                Single-window GUI based bookstore app created in Java.
              </PortfolioP>
            </PortfolioCard>
          </PortfolioLink>
        </PortfolioWrapper>
      </PortfolioContainer>
    </>
  );
};

export default Portfolio;
