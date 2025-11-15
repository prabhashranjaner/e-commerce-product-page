import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./ui/Header";
import ImageSection from "./ui/ImageSection";
import DetailSection from "./ui/DetailSection";

const AppWrapper = styled.div`
  max-width: 500px;
  margin: 0 auto;

  @media screen and (min-width: 1024px) {
    padding: 0 1rem;
    max-width: 1280px;
    height: 100dvh;
  }
`;

const StyledMain = styled.main`
  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    gap: 1rem;
    margin-top: 2rem;
  }
`;
function App() {
  return (
    <AppWrapper>
      <GlobalStyles />
      <Header />
      <StyledMain>
        <ImageSection />
        <DetailSection />
      </StyledMain>
    </AppWrapper>
  );
}

export default App;
