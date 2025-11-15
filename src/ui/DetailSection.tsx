import styled from "styled-components";
import ProductDetail from "./ProductDetail";
import { useState } from "react";
import Button from "./Button";
import { useCart } from "../contexts/CartContextProvider";

const StyledSection = styled.section`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  margin: 0 auto;

  @media screen and (min-width: 1024px) {
    width: 50%;
    gap: 1rem;
  }
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (min-width: 1024px) {
    flex-direction: row;
    height: 50px;
    gap: 20px;
    align-items: center;
  }
`;

const StyledCounter = styled.div`
  background-color: var(--col-gray-1);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 700;
  margin-top: 1rem;
`;

const CounterBtn = styled.button`
  padding: 1.3rem;
  @media screen and (min-width: 1024px) {
    background-color: var(--col-gray-1);
  }
`;

const CounterPlusBtn = styled(CounterBtn)``;

const CounterMinusBtn = styled(CounterBtn)``;

const CounterNumber = styled.span`
  @media screen and (min-width: 1024px) {
    padding: 1.3rem;
    background-color: var(--col-gray-1);
  }
`;

const DetailSection = () => {
  const [counterValue, setCounterValue] = useState(0);
  const { state, dispatch } = useCart();

  const handleDecrease = () => {
    if (counterValue === 0) return;
    setCounterValue((s) => s - 1);
  };

  const handleAddToCart = () => {
    if (counterValue === 0) return;

    const index = state.findIndex((item) => item.id === "1");

    if (index === -1) {
      const item = {
        id: "1",
        name: "Fall Limited Edition Sneakers",
        price: 125,
        quantity: counterValue,
      };

      dispatch({ type: "item/add", payload: item });
    } else {
      dispatch({
        type: "item/update",
        payload: { id: "1", quantity: counterValue },
      });
    }
  };

  return (
    <StyledSection>
      <ProductDetail />

      <Bottom>
        <StyledCounter>
          <CounterMinusBtn onClick={handleDecrease}>
            <img alt="minus" src="/images/icon-minus.svg" />
          </CounterMinusBtn>
          <CounterNumber>{counterValue}</CounterNumber>
          <CounterPlusBtn onClick={() => setCounterValue((s) => s + 1)}>
            <img alt="plus" src="/images/icon-plus.svg" />
          </CounterPlusBtn>
        </StyledCounter>

        <Button handleClick={handleAddToCart}>
          <>
            <img alt="cart" src="/images/icon-cart.svg" />
            <span>Add to cart</span>
          </>
        </Button>
      </Bottom>
    </StyledSection>
  );
};

export default DetailSection;
