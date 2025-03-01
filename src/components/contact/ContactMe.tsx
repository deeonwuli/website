import styled from "styled-components";
import ContactForm from "./contact-form/ContactForm";

export default function ContactMe() {
  return (
    <Container id="contact">
      <h2>Contact me</h2>
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
