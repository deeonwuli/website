import styled from "styled-components";
import linkedInIcon from "../../assets/icons/linkedin-icon.svg";
import githubIcon from "../../assets/icons/github-icon.svg";
// import codepenIcon from "../../assets/icons/codepen-icon.svg";

const socialLinks = [
  {
    name: "GitHub",
    icon: githubIcon,
    url: "https://github.com/deeonwuli",
  },
  {
    name: "LinkedIn",
    icon: linkedInIcon,
    url: "https://www.linkedin.com/in/deeonwuli/",
  },
  {
    name: "CodePen",
    icon: githubIcon,
    url: "https://codepen.io/deeonwuli",
  },
];

export default function Socials() {
  return (
    <Container>
      {socialLinks.map((socialLink) => (
        <a href={socialLink.url} target="_blank" rel="noreferrer">
          <img src={socialLink.icon} alt={`${socialLink.name} icon`} />
        </a>
      ))}
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8rem;
  padding: 10rem 0;

  @media (max-width: 768px) {
    gap: 4rem;
    padding: 4rem 0;
  }
`;
