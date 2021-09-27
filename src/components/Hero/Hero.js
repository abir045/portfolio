import React from "react";
import Slide from "react-reveal/Slide";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <>
    <Slide top>
      <Section row>
        <LeftSection>
          <SectionTitle main center>
            Hi, I am <br />
            Salekin Imran
          </SectionTitle>
          <SectionText>
            I am a frontend developer with a passion to build dynamic websites
            with the most updated technologies.
            {/* <img src="/images/Animated-Shape.svg" /> */}
          </SectionText>
          <Button
            onClick={() => window.open("https://github.com/abir045", "_blank")}
          >
            Learn More
          </Button>
        </LeftSection>
      </Section>
    </Slide>
  </>
);

export default Hero;
