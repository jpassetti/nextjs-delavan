import { Fragment } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import ButtonGroup from "../components/ButtonGroup";
import CartHeader from "../components/CartHeader";
import CTA from "../components/CTA";
import CartItem from "../containers/CartItem/CartItem";
import CartSummary from "../containers/CartSummary/CartSummary";
import Paragraph from "../components/Paragraph";
import { LineItem } from "../utils/types/wooCommerceTypes";
import { useRouter } from "next/router";
import Well from "../components/Well";

interface Props {
  lineItems: LineItem[];
}

const Cart = (props: Props) => {
  const { lineItems } = props;
  const router = useRouter();

  const createCart = (lineItems: LineItem[]) => {
    return (
      <Fragment>
        <CartHeader />
        {lineItems.map((lineItem) => {
          return <CartItem lineItem={lineItem} key={lineItem.product_id} />;
        })}
        <CartSummary lineItems={lineItems} />
        <ButtonGroup>
          <Button label="Checkout" backgroundColor="blue" fontColor="white" clickHandler={() => router.push("/checkout")} />
          <Button label="Continue shopping" backgroundColor="white" fontColor="blue" clickHandler={() => router.push("/shop")} />
        </ButtonGroup>
      </Fragment>
    );
  };

  return (
    <Wrapper>
      {!lineItems.length ? (
        <Well>
          <Paragraph>Sorry, your cart is empty!</Paragraph>
          <Button label="Go to shop" backgroundColor="blue" fontColor="white" clickHandler={() => router.push("/shop")} />
        </Well>
      ) : (
        createCart(lineItems)
      )}
    </Wrapper>
  );
};

export default Cart;

const Wrapper = styled.div`
  width: 100%;
  padding: 0 16px;
`;

const Message = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;