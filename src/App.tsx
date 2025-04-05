import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import { theme } from "./theme";
import Projects from "./components/projects/Projects";
import ContactMe from "./components/contact/ContactMe";
import Socials from "./components/socials/Socials";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Hero />
        <Projects />
        <ContactMe />
        <Socials />
        <Footer />
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  background-color: ${(props) => props.theme.palette.common.yellow200};
  padding: 1rem 8rem 0;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1rem 2rem 0;
  }
`;
