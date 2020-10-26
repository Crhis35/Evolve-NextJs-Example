import React from "react";
import Logo from "../../assets/logo-w.svg";

import {
  Section,
  Logan,
  InnerTitle,
  SectionContainer,
  BtnWrapper,
  Btn,
  LogoContainer,
  LogoWrapper,
  Paragraph,
} from "../base/base";

import {
  InfoWrapper,
  CopyRight,
  Text,
  FooterContainer,
  Container,
} from "./footer.styles";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <Section>
        <SectionContainer>
          <Container>
            <InnerTitle>Stay with Us</InnerTitle>
            <Logan>
              We will be happy to
              <br />
              drink a cup of <br />
              coffee with you
            </Logan>
            <BtnWrapper>
              <Btn href="/">View Details</Btn>
            </BtnWrapper>
          </Container>
          <Container>
            <InfoWrapper>
              <LogoWrapper>
                <LogoContainer href="/">
                  <Logo />
                </LogoContainer>
              </LogoWrapper>
              <Text>
                <Paragraph>
                  Integer justo nisi, fermentum vitae erat nec, consectetur
                  convallis risus. Maecenas suscipit blandit leo, ut accumsan
                  justo aliquam vel. Ut dictum maximus enim, a mollis est
                  lacinia sed.
                </Paragraph>
              </Text>
              <CopyRight>2020 Evolve, All Rights Reserved</CopyRight>
            </InfoWrapper>
          </Container>
        </SectionContainer>
      </Section>
    </FooterContainer>
  );
};

export default Footer;
