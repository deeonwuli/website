import styled from "styled-components";
import ContactForm from "./contact-form/ContactForm";

export default function ContactMe() {
  return (
    <Container id="contact">
      <StyledText>Contact me</StyledText>
      <ContactForm />
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 4rem;
  padding: 2rem 0;
`;

const StyledText = styled.h2`
  z-index: 1;
`;
