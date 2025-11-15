import { useState } from "react";
import styled from "styled-components";
import SideBar from "./SideBar";
import CartCard from "./CartCard";
import NavList from "./NavList";
import { useCart } from "../contexts/CartContextProvider";

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  padding: 1.2rem;
  position: relative;

  @media screen and (min-width: 1024px) {
    border-bottom: 3px solid var(--col-gray-1);
    padding: 0;
  }
`;

const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media screen and (min-width: 1024px) {
    gap: 3rem;
  }
`;

const Hamburger = styled.img`
  @media screen and (min-width: 1024px) {
    display: none;
  }
`;

const Logo = styled.img`
  width: 110px;
  object-fit: cover;

  @media screen and (min-width: 1024px) {
    width: 150px;
  }
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const CartImageWrapper = styled.div`
  position: relative;
`;

const CartImage = styled.img`
  width: 20px;
  object-fit: cover;
  cursor: pointer;

  @media screen and (min-width: 1024px) {
    width: 30px;
  }
`;

const CartTotal = styled.span`
  background-color: var(--col-orange);
  color: white;
  padding: 1px 8px;
  font-size: 10px;
  border-radius: 10px;
  position: absolute;
  top: -30%;
  right: -50%;

  @media screen and (min-width: 1024px) {
    padding: 2px 12px;
    font-size: 14px;
  }
`;

const Avatar = styled.img`
  width: 25px;
  object-fit: cover;

  @media screen and (min-width: 1024px) {
    width: 40px;
    border-radius: 50%;
    transition: all 0.3s;
    cursor: pointer;

    &:hover {
      outline: 2px solid var(--col-orange);
    }
  }
`;

const Header = () => {
  const [isSidebarActive, setisSidebarActiveIsActive] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const closeSideBar = () => setisSidebarActiveIsActive(false);

  const { state } = useCart();

  const ToggleCart = () => setIsCartOpen((s) => !s);

  const totalItems = state.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <>
      {/* {isActive && <SideBar closeSideBar={closeSideBar} />} */}
      <SideBar closeSideBar={closeSideBar} isActive={isSidebarActive} />
      <StyledHeader>
        <HeaderLeft>
          <Hamburger
            alt="hamburger"
            src="/images/icon-menu.svg"
            onClick={() => setisSidebarActiveIsActive(true)}
          />
          <Logo alt="logo" src="/images/logo.svg" />
          <NavList />
        </HeaderLeft>

        <HeaderRight>
          <CartImageWrapper>
            <CartImage
              alt="cart"
              src="/images/icon-cart.svg"
              onClick={ToggleCart}
            />
            {state.length > 0 && <CartTotal>{totalItems}</CartTotal>}
          </CartImageWrapper>

          <Avatar alt="avatar" src="/images/image-avatar.png" />
        </HeaderRight>
        <CartCard isCartOpen={isCartOpen} />
      </StyledHeader>
    </>
  );
};

export default Header;
