import styled from "styled-components";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import Button from "../../components/Button";
import Modal from "../../components/Modal";
import React, { Fragment, useState } from "react";
import {
  StripeCardCvcElementChangeEvent,
  StripeCardExpiryElementChangeEvent,
  StripeCardNumberElementChangeEvent,
} from "@stripe/stripe-js";
import { createOrderApi, createPaymentIntentApi } from "../../utils/customApi";
//mport {createWooCommerceOrder} from "../../utils/wooCommerceApi";
import { LineItem } from "../../utils/types/wooCommerceTypes";
import {
  checkStripeElementsValid,
  confirmCardPayment,
} from "../../utils/stripeApi";
import { useAppDispatch } from "../../store/hooks";
import { resetCartState } from "../../store/slices/cartSlice";
import { useRouter } from "next/router";

interface Props {
  lineItems: LineItem[];
}

const CardPayment: React.FC<Props> = ({
  lineItems
}) => {
  console.log({lineItems});
  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();

    // guard clause to exit if nothing in cart
    if (!lineItems.length) return;

    // guard clause to exit if no stripe or elements
    if (!stripe || !elements) return;

    // set loading indicator
    setIsLoading(true);

    // check if Stripe elements are valid
    if (!checkStripeElementsValid()) {
      setError("Uh oh. Please check your card details again");
      return;
    }

    setError("");

    // create Stripe payment intent and get client secret in return
    let paymentIntent = await createPaymentIntentApi(lineItems).catch(
      (error) => {
        setError(error.message);
        setIsLoading(false);
        return;
      }
    );
    console.log("--CREATED STRIPE PAYMENT INTENT: ", paymentIntent);

    // create WooCommerce order and link it with Stripe payment intent
    // NOTE: must create server-side because of env vars
    let wooCommerceOrder = await createOrderApi(
      lineItems,
      paymentIntent!.paymentIntentId
    ).catch((error) => {
      setError(error.message);
      setIsLoading(false);
      return;
    });
    console.log("--CREATED WOOCOMMERCE ORDER: ", wooCommerceOrder);

    // confirm card payment using client secret
    let stripeResult = await confirmCardPayment(
      elements,
      stripe,
      paymentIntent!.clientSecret
    ).catch((error) => {
      setError(error.message);
      setIsLoading(false);
      return;
    });
    console.log("--STRIPE CONFIRM CARD: ", stripeResult);

    // TODO use wooCommerceOrder.id to update order status to 'processing' after card payment succeeded - this step would be achieved by webhook when website served over https

    setIsLoading(false);

    // TODO display success modal and clear Redux and re-direct when closing modal

    // clear Redux cart
    dispatch(resetCartState());

    // re-direct to menu
    router.push("/thank-you");
  };

  // Enables realtime error message as user inputs card details
  function handleValidation(
    e:
      | StripeCardNumberElementChangeEvent
      | StripeCardExpiryElementChangeEvent
      | StripeCardCvcElementChangeEvent
  ) {
    if (e.error) {
      setError(e.error.message);
    } else {
      setError("");
    }
  }

  return (
    <Fragment>
      <Form id="card-payment-form" onSubmit={handleFormSubmit}>
        <CardNumberElement
          id="card-number-element"
          className="card-element"
          options={CARD_NUMBER_OPTIONS}
          onChange={handleValidation}
        />
        <Row>
          <CardExpiryElement
            id="card-expiry-element"
            className="card-element"
            options={CARD_ELEMENT_OPTIONS}
            onChange={handleValidation}
          />
          <CardCvcElement
            id="card-cvc-element"
            className="card-element"
            options={CARD_ELEMENT_OPTIONS}
            onChange={handleValidation}
          />
        </Row>
        <Button type="submit" disabled={!lineItems.length} label="PAY NOW" backgroundColor="blue" fontColor="white"/>
        <ErrorMessage>{error}</ErrorMessage>
      </Form>
      {isLoading && <Modal message="Processing card..." />}
    </Fragment>
  );
};

export default CardPayment;

const Form = styled.form`
  width: 100%;
  /* Stripe Element containers can also be styled by class */
  .card-element {
    width: 100%;
    margin-bottom: 1rem;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 10px;
  }
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
`;

const ErrorMessage = styled.div`
  color: #fa004f;
  padding-top: 8px;
`;

// Stripe has a defined style object that you can use to style Elements
const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      iconColor: "black",
      color: "black",
      fontSize: "18px",
      fontFamily: "Raleway, sans-serif",
      fontSmoothing: "antialiased",
      "::placeholder": {
        color: "black",
      },
    },
    invalid: {
      iconColor: "#fa004f",
      color: "#fa004f",
    },
  },
};

// This is almost the same as above except it takes the additional showIcon field
const CARD_NUMBER_OPTIONS = {
  showIcon: true,
  style: {
    base: {
      iconColor: "black",
      color: "black",
      fontSize: "18px",
      fontFamily: "Raleway, sans-serif",
      fontSmoothing: "antialiased",
      "::placeholder": {
        color: "black",
      },
    },
    invalid: {
      iconColor: "#fa004f",
      color: "#fa004f",
    },
  },
};