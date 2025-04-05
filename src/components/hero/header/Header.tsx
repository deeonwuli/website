import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <StyledNav>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href="">Blog</a>
      </StyledNav>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
`;

const StyledNav = styled.nav`
  display: flex;
  width: 33%;
  justify-content: space-between;

  a {
    font-size: 1rem;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-around;
  }
`;
