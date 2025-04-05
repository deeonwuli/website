import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooter>
      <p>made with ᡣ𐭩</p>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  position: absolute;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem 0;
  background-color: ${(props) => props.theme.palette.common.pink200};
  color: ${(props) => props.theme.palette.common.black};

  p {
    font-size: 0.75rem;
  }
`;
