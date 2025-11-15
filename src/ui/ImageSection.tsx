import styled from "styled-components";
import LightBox from "./LightBox";

const StyledImageSection = styled.div`
  @media screen and (min-width: 1024px) {
    width: 40%;
  }
`;
const ImageSection = ({ openModal }: { openModal: () => void }) => {
  return (
    <StyledImageSection>
      <LightBox openModal={openModal} />
    </StyledImageSection>
  );
};

export default ImageSection;
