import { createPortal } from "react-dom";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  background-color: var(--col-overlay);
  opacity: 90%;
`;

const CloseBtn = styled.button`
  position: absolute;
  right: 50px;
  top: 50px;
`;

const LightBoxWrapper = styled.div`
  position: absolute;
`;

const Modal = ({ closeModal }: PropsType) => {
  return createPortal(
    <Overlay>
      <LightBoxWrapper>
        <CloseBtn onClick={closeModal}>
          <img alt="close" src="/images/icon-close.svg" />
        </CloseBtn>
      </LightBoxWrapper>
    </Overlay>,
    document.body
  );
};

export default Modal;

type PropsType = {
  closeModal: () => void;
};
