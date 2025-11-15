import styled from "styled-components";

const StyledSideBar = styled.div`
  background-color: white;
  padding: 1.5rem;
  position: absolute;
  top: 0;
  left: -100%;
  width: 50vw;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  z-index: 1000;
  align-items: flex-start;
  transition: all 0.5s;

  &.active {
    left: 0;
  }
`;

const StyledList = styled.ul`
  font-weight: 700;
  color: var(--col-gray-4);
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SideBar = ({ closeSideBar, isActive }: PropsType) => {
  return (
    <StyledSideBar className={`${isActive ? "active" : ""}`}>
      <img alt="close" src="/images/icon-close.svg" onClick={closeSideBar} />

      <StyledList>
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </StyledList>
    </StyledSideBar>
  );
};

export default SideBar;

type PropsType = {
  closeSideBar: () => void;
  isActive: boolean;
};
