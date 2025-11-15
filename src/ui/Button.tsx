import type { ReactNode } from "react";
import styled from "styled-components";

const StyledBtton = styled.button`
  background-color: var(--col-orange);
  font-weight: 700;
  padding: 1.3rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 5px 20px var(--col-gray-2);
  gap: 16px;
  width: 100%;
  font-size: 16px;

  @media screen and (min-width: 1024px) {
    font-size: 18px;
    color: var(--col-gray-4);
  }

  &:hover {
    filter: brightness(130%);
  }
`;
const Button = ({ children, handleClick }: PropsType) => {
  return <StyledBtton onClick={handleClick}>{children}</StyledBtton>;
};

export default Button;

type PropsType = { children: ReactNode; handleClick: () => void };
