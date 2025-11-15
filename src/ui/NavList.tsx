import styled from "styled-components";

const StyledNavList = styled.ul`
  display: none;
  align-items: center;
  gap: 2rem;

  @media screen and (min-width: 1024px) {
    display: flex;
  }
`;

const StyledNavItem = styled.li`
  color: var(--col-gray-3);
  transition: all 0.3s;
  cursor: pointer;
  padding: 2rem 0;
  border-bottom: 5px solid transparent;

  &:hover {
    color: var(--col-gray-4);
    border-color: var(--col-orange);
  }
`;
const NavList = () => {
  return (
    <StyledNavList>
      <StyledNavItem>Collections</StyledNavItem>
      <StyledNavItem>Men</StyledNavItem>
      <StyledNavItem>Women</StyledNavItem>
      <StyledNavItem>About</StyledNavItem>
      <StyledNavItem>Contact</StyledNavItem>
    </StyledNavList>
  );
};

export default NavList;
