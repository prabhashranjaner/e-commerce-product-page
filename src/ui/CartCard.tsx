import styled from "styled-components";
import Button from "./Button";
import CartItem from "./CartItem";
import { useCart } from "../contexts/CartContextProvider";

const StyledCartCard = styled.div`
  background-color: white;
  border-radius: 8px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  position: absolute;
  width: 90vw;
  top: 110%;
  max-width: 350px;
  right: -100%;
  transition: all 0.5s;
  display: none;

  &.active {
    right: 20px;
    display: block;
  }

  @media screen and (min-width: 1024px) {
    max-width: 450px;
  }
`;

const CartItemList = styled.ul``;

const CartHead = styled.div`
  padding: 1rem 1.5rem;
  border-bottom: 1px solid var(--col-gray-1);
`;

const CartBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem 1.5rem 2rem 1.5rem;
`;

const ButtonWrapper = styled.div``;

const CartEmptyBody = styled.div`
  height: 180px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  color: var(--col-gray-3);
`;

const CartCard = ({ isCartOpen }: { isCartOpen: boolean }) => {
  const { state, dispatch } = useCart();

  const handleCheckOut = () => {
    //! here we can go further
    dispatch({ type: "cart/clear" });
  };

  return (
    <StyledCartCard className={`${isCartOpen ? "active" : ""}`}>
      <CartHead>
        <h4>Cart</h4>
      </CartHead>
      {state.length > 0 ? (
        <CartBody>
          <CartItemList>
            {state.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </CartItemList>
          <ButtonWrapper>
            <Button handleClick={handleCheckOut}>
              <span>Checkout</span>
            </Button>
          </ButtonWrapper>
        </CartBody>
      ) : (
        <CartEmptyBody>
          <span>Your cart is empty</span>
        </CartEmptyBody>
      )}
    </StyledCartCard>
  );
};

export default CartCard;
