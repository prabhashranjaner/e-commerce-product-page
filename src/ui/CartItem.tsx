import styled from "styled-components";
import type { ItemType } from "../types";
import { useCart } from "../contexts/CartContextProvider";

const StyledCartItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  width: 100%;
`;

const Image = styled.img`
  width: 40px;
  object-fit: cover;
  border-radius: 3px;
`;

const Detail = styled.div`
  align-self: flex-start;
  font-size: 15px;
  flex-grow: 1;
  color: var(--col-gray-3);

  p {
    margin-bottom: 5px;
  }

  & span {
    font-weight: 700;
    color: var(--col-gray-4);
    margin-left: 6px;
  }
`;

const DeleteImage = styled.img``;
const CartItem = ({ item }: PropsType) => {
  const { dispatch } = useCart();
  return (
    <StyledCartItem>
      <Image alt="product" src="/images/image-product-1-thumbnail.jpg" />

      <Detail>
        <p>{item.name}</p>
        <p>
          ${item.price}.00 x {item.quantity}{" "}
          <span> ${item.price * item.quantity}.00</span>
        </p>
      </Detail>
      <DeleteImage
        alt="delete"
        src="/images/icon-delete.svg"
        onClick={() => dispatch({ type: "item/remove", payload: item.id })}
      />
    </StyledCartItem>
  );
};

export default CartItem;

type PropsType = {
  item: ItemType;
};
