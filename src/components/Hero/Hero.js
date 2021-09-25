import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = () => (
  <>
    <Section row>
      <LeftSection>
        <SectionTitle main center>
          Hi, I am <br />
          Salekin Imran
        </SectionTitle>
        <SectionText>
          I am a frontend developer with a passion to build dynamic websites
          with the most updated technologies.
        </SectionText>
        <Button
          onClick={() => window.open("https://github.com/abir045", "_blank")}
        >
          Learn More
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
