import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Header from "./ui/Header";
import ImageSection from "./ui/ImageSection";
import DetailSection from "./ui/DetailSection";
import { useState } from "react";
import Modal from "./ui/Modal";

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
    align-items: start;
    justify-content: center;
    padding: 2rem;
    gap: 1rem;
    margin-top: 2rem;
  }
`;
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <AppWrapper>
      <GlobalStyles />
      <Header />
      <StyledMain>
        <ImageSection openModal={openModal} />
        <DetailSection />
      </StyledMain>
      {isOpen && <Modal closeModal={closeModal} />}
    </AppWrapper>
  );
}

export default App;
