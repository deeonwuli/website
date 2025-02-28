import styled, { ThemeProvider } from "styled-components";
import "./App.css";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import { theme } from "./theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StyledDiv>
        <Hero />
        <Footer />
      </StyledDiv>
    </ThemeProvider>
  );
}

const StyledDiv = styled.div`
  background-color: ${(props) => props.theme.palette.common.yellow200};
`;
