import React from "react";
import Slide from "react-reveal/Slide";
import {
  DiFirebase,
  DiNodejs,
  DiReact,
  DiBootstrap,
  DiHeroku,
  DiMongodb,
} from "react-icons/di";
import { FiFigma } from "react-icons/fi";
import { SiStyledComponents, SiLinode, SiNetlify } from "react-icons/si";

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Slide left>
    <Section id="tech">
      <SectionDivider />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I've worked with a range of technologies in the web developement world.
        From Front-End to Back-End and design
      </SectionText>
      <List>
        <ListItem>
          <DiReact size="3rem" />
          <DiBootstrap size="3rem" />
          <SiStyledComponents size="3rem" />
          <ListContainer>
            <ListTitle>Front End</ListTitle>
            <ListParagraph>React.Js, Bootstrap, StyledComponents</ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiNodejs size="3rem" />
          <ListContainer>
            <ListTitle>Back End</ListTitle>
            <ListParagraph>Node.Js, Express.Js</ListParagraph>
          </ListContainer>
        </ListItem>

        <ListItem>
          <FiFigma size="3rem" />
          <ListContainer>
            <ListTitle>UI/UX</ListTitle>
            <ListParagraph>Figma</ListParagraph>
          </ListContainer>
        </ListItem>

        <ListItem>
          <DiHeroku size="3rem" />
          <SiLinode size="3rem" />
          <SiNetlify size="3rem" />

          <ListContainer>
            <ListTitle>Hosting</ListTitle>
            <ListParagraph>
              Experience with <br />
              Heroku, Linode, Netlify, Square Space
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiFirebase size="3rem" />
          <DiMongodb size="3rem" />
          <ListContainer>
            <ListTitle>Databases</ListTitle>
            <ListParagraph>mongoDB, Firebase</ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
    </Section>
  </Slide>
);

export default Technologies;
