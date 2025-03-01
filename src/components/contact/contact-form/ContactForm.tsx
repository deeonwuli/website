import styled from "styled-components";

export default function ContactForm() {
  return (
    <StyledForm>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <textarea rows={5} placeholder="Message" />
      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
  width: 75%;
  margin-top: 2rem;
`;

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.palette.common.salmon300};
  color: ${(props) => props.theme.palette.common.white};
`;
