import styled from "styled-components";

const SubTitle = styled.p`
  text-transform: uppercase;
  font-weight: 700;
  color: var(--col-gray-3);
  font-size: 14px;
  @media screen and (min-width: 1024px) {
    font-size: 16px;
  }
`;

const Title = styled.h3`
  font-size: 26px;
  width: 70%;

  @media screen and (min-width: 1024px) {
    font-size: 36px;
  }
`;

const Content = styled.p`
  color: var(--col-gray-3);
  font-size: 16px;
  line-height: 23px;
  @media screen and (min-width: 1024px) {
    font-size: 18px;
    line-height: 25px;
  }
`;

const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1rem;
  font-weight: 700;

  @media screen and (min-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 12px;
  }
`;

const PriceLeft = styled.p`
  display: flex;
  align-items: center;
  gap: 12px;
`;
const Amount = styled.span`
  font-size: 26px;
`;

const Offer = styled.span`
  display: inline-block;
  background-color: var(--col-gray-4);
  padding: 5px 12px;
  color: white;

  border-radius: 8px;
`;

const OldAmount = styled.span`
  color: var(--col-gray-3);
  text-decoration: line-through;
`;

const ProductDetail = () => {
  return (
    <>
      <SubTitle>Sneaker company</SubTitle>
      <Title>Fall Limited Edition Sneakers</Title>
      <Content>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they'll withstand everything the
        weather an offer.
      </Content>

      <PriceWrapper>
        <PriceLeft>
          <Amount>$125.00</Amount>
          <Offer>50%</Offer>
        </PriceLeft>

        <OldAmount>$250.00</OldAmount>
      </PriceWrapper>
    </>
  );
};

export default ProductDetail;
