import styled from "styled-components";

const projects = [
  {
    title: "Penguinja",
    description:
      "A classic endless runner game built for the web where the user must dodge obstacles, collect rewards and compete for the top score on the worldwide leaderboard.",
    image: "lightGray",
  },
  {
    title: "Color Picker",
    description:
      "A colour picking tool that matches the colour in the user's image to the hex code, RGB code, colour family and the closest English name.",
    image: "lightGray",
  },
  {
    title: "Scruff kitty",
    description:
      "Kitty Hangman is a fun and adorable take on the classic Hangman game! Instead of a traditional hangman, a cute kitty faces peril with each incorrect guess. Players must guess the hidden word correctly to save the kitty and keep it safe.",
    image: "lightGray",
  },
];

export default function Projects() {
  return (
    <Container id="projects">
      <h2>Explore my projects</h2>

      <ProjectsContainer>
        {projects.map((project, index) => (
          <StyledProject key={index} reverse={index % 2 !== 0}>
            <StyledProjectText>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </StyledProjectText>
            <StyledDiv>
              <div
                style={{
                  background: project.image,
                  height: "20rem",
                  width: "100%",
                  borderRadius: "1rem",
                }}
              />
              <StyledButton>View</StyledButton>
            </StyledDiv>
          </StyledProject>
        ))}
      </ProjectsContainer>
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

const ProjectsContainer = styled.div`
  margin: 6rem 0;
  display: flex;
  flex-direction: column;
  gap: 12rem;
`;

const StyledProject = styled.div<{ reverse?: boolean }>`
  display: flex;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  height: 24rem;
`;

const StyledProjectText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 50%;
`;

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 50%;
  gap: 1rem;
`;

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.palette.common.salmon300};
  color: ${(props) => props.theme.palette.common.white};
`;
