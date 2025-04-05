import styled from "styled-components";
import Header from "./header/Header";
import heroImage from "../../assets/hero-image.png";
import arrowIcon from "../../assets/icons/arrow-icon.svg";

export default function Hero() {
  return (
    <Container>
      <Header />
      <HeroSection>
        <StyledArrowIcon src={arrowIcon} alt="arrow icon" />
        <HeroText>
          <StyledHeaderText>Hi, I'm Chukwudumebi Onwuli</StyledHeaderText>
          <p>
            Welcome to my portfolio. I’m a dedicated software engineer
            specializing in TypeScript and JavaScript. Explore my work to see
            how I blend creativity with functionaility to solve real-world
            problems.
          </p>
        </HeroText>
        <StyledHeroImage src={heroImage} alt="hero image" />
      </HeroSection>
    </Container>
  );
}

const Container = styled.section`
  height: calc(100vh - 1rem);
`;

const HeroSection = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
  }
`;

const StyledArrowIcon = styled.img`
  position: absolute;
  left: 45%;
  top: 120px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const HeroText = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    text-align: left;
  }
`;

const StyledHeroImage = styled.img`
  width: 40%;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

const StyledHeaderText = styled.h1`
  width: 60ch;

  @media (max-width: 768px) {
    width: 100%;
    text-align: left;
  }
`;
