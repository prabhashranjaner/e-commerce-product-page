import { createPortal } from "react-dom";
import styled from "styled-components";
import LightBox from "./LightBox";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 1000;
  background-color: var(--col-overlay);
  opacity: 80%;
`;

const CloseBtn = styled.button`
  position: absolute;
  top: -60px;
  width: 30px;
  right: 0;

  img {
    object-fit: cover;
    width: 100%;
  }
`;

const LightBoxWrapper = styled.div`
  position: absolute;
  z-index: 1000;
  width: 800px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Modal = ({ closeModal }: PropsType) => {
  return createPortal(
    <>
      <Overlay />

      <LightBoxWrapper>
        <CloseBtn onClick={closeModal}>
          <img alt="close" src="/images/icon-close.svg" />
        </CloseBtn>
        <LightBox />
      </LightBoxWrapper>
    </>,
    document.body
  );
};

export default Modal;

type PropsType = {
  closeModal: () => void;
};
