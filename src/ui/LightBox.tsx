import { useState } from "react";
import styled from "styled-components";

const StyledLightBox = styled.div`
  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }
`;

const ImageWrapper = styled.div<imageNoType>`
  position: relative;
  height: 250px;
  background-image: ${(props) =>
    `url(/images/image-product-${props.$number}.jpg)`};
  background-size: cover;
  background-position: center top;
  pointer-events: none;

  @media screen and (min-width: 1024px) {
    height: 500px;
    border-radius: 16px;
    pointer-events: all;
  }
`;

const Button = styled.button`
  position: absolute;
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: none;
  top: 50%;
  transform: translateY(-50%);
  background-color: white;

  img {
    width: 10px;
    object-fit: cover;
  }

  z-index: 50;

  @media screen and (min-width: 1024px) {
    width: 50px;
    height: 50px;
  }
`;

const PrevButton = styled(Button)`
  left: 15px;
`;

const NextButton = styled(Button)`
  right: 15px;
`;

const ThumbnailWrapper = styled.div`
  display: none;

  @media screen and (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }
`;

const Thumbnail = styled.img`
  width: 70px;
  object-fit: cover;
  border-radius: 8px;
  border: 4px solid transparent;
  cursor: pointer;

  &:hover {
    border-color: var(--col-orange);
  }

  &.active {
    border-color: var(--col-orange);
    filter: blur(50%);
  }
`;

// !component
const LightBox = ({ openModal }: { openModal?: () => void }) => {
  const [imageNo, setImageNo] = useState(1);

  const handleNextClick = () => {
    if (imageNo === 4) setImageNo(1);
    else setImageNo((s) => s + 1);
  };

  const handlePrevClick = () => {
    if (imageNo === 1) setImageNo(4);
    else setImageNo((s) => s - 1);
  };

  return (
    <StyledLightBox>
      <ImageWrapper $number={imageNo} onClick={openModal}>
        <PrevButton onClick={handlePrevClick}>
          <img alt="prev" src="/images/icon-previous.svg" />
        </PrevButton>
        <NextButton onClick={handleNextClick}>
          <img alt="prev" src="/images/icon-next.svg" />
        </NextButton>
      </ImageWrapper>

      <ThumbnailWrapper>
        <Thumbnail
          alt="img 1"
          src="/images/image-product-1-thumbnail.jpg"
          className={`${imageNo === 1 ? "active" : ""}`}
          onClick={() => setImageNo(1)}
        />
        <Thumbnail
          alt="img 2"
          src="/images/image-product-2-thumbnail.jpg"
          onClick={() => setImageNo(2)}
          className={`${imageNo === 2 ? "active" : ""}`}
        />
        <Thumbnail
          alt="img 3"
          src="/images/image-product-3-thumbnail.jpg"
          onClick={() => setImageNo(3)}
          className={`${imageNo === 3 ? "active" : ""}`}
        />
        <Thumbnail
          alt="img 4"
          src="/images/image-product-4-thumbnail.jpg"
          onClick={() => setImageNo(4)}
          className={`${imageNo === 4 ? "active" : ""}`}
        />
      </ThumbnailWrapper>
    </StyledLightBox>
  );
};

export default LightBox;

type imageNoType = {
  $number: number;
};
