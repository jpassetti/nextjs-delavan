import React, { Fragment, useState } from "react";

import {
  StripeCardCvcElementChangeEvent,
  StripeCardExpiryElementChangeEvent,
  StripeCardNumberElementChangeEvent,
} from "@stripe/stripe-js";

import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";

import Button from "../../components/ui/Button";
import Col from "../../components/layout/Col";
import Heading from "../../components/typography/Heading";
import Label from "../../components/form/Label";
import Modal from "../../components/ui/modal/Modal";
import Paragraph from "../../components/typography/Paragraph";
import Row from "../../components/layout/Row";
import Well from "../../components/custom/Well";

import { createOrderApi, createPaymentIntentApi } from "../../utils/customApi";
import { LineItem, Shipping, Billing,  } from "../../utils/types/wooCommerceTypes";
import {
  checkStripeElementsValid,
  confirmCardPayment,
} from "../../utils/stripeApi";
import { useAppDispatch } from "../../store/hooks";
import { resetCartState } from "../../store/slices/cartSlice";
import { useRouter } from "next/router";

import styles from '../../components/form/form.module.scss'

interface Props {
  lineItems: LineItem[];
  shippingInfo: Shipping;
  billingInfo: Billing;
  shippingMethod: {
    id: number;
    title: string;
    enabled: boolean;
    method_id: string;
    method_title: string;
  };
}
interface PaymentIntent {
  paymentIntentId: string;
  clientSecret: string;
  // Add other properties as needed
}

const CardPayment: React.FC<Props> = ({
  lineItems,
  shippingInfo,
  billingInfo,
  shippingMethod,
}) => {
  //console.log({lineItems, shippingInfo, billingInfo});
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
    let paymentIntent: PaymentIntent | undefined;
   
    try {
      paymentIntent = await createPaymentIntentApi(lineItems);
      //console.log("--CREATED STRIPE PAYMENT INTENT: ", paymentIntent);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
      return;
    }
    //console.log("--CREATED STRIPE PAYMENT INTENT: ", paymentIntent);

    // create WooCommerce order and link it with Stripe payment intent
    // NOTE: must create server-side because of env vars
    let wooCommerceOrder = await createOrderApi(
      lineItems,
      paymentIntent.paymentIntentId,
      shippingInfo,
      billingInfo,
      shippingMethod
    ).catch((error) => {
      setError(error.message);
      setIsLoading(false);
      return;
    });
    //console.log("--CREATED WOOCOMMERCE ORDER: ", wooCommerceOrder);

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
    //console.log("--STRIPE CONFIRM CARD: ", stripeResult);

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
        <Heading level={2} marginBottom={2} marginTop={4}>3. Credit Card Information</Heading>
      <form id="card-payment-form" onSubmit={handleFormSubmit}>
        <Label htmlFor="card-number-element">Card Number</Label>
                <CardNumberElement
          id="card-number-element"
          className={styles.card_element}
          options={CARD_NUMBER_OPTIONS}
          onChange={handleValidation}
        />
        <Row>
          <Col xs={6} sm={6}>
          <Label htmlFor="card-expiry-element">Expiration Date</Label>
          <CardExpiryElement
            id="card-expiry-element"
            className={styles.card_element}
            options={CARD_ELEMENT_OPTIONS}
            onChange={handleValidation}
          />
          </Col>
          <Col xs={6} sm={6}>
          <Label htmlFor="card-cvc-element">CVC</Label>
          <CardCvcElement
            id="card-cvc-element"
            className={styles.card_element}
            options={CARD_ELEMENT_OPTIONS}
            onChange={handleValidation}
          />
          </Col>
        </Row>
        <Button type="submit" disabled={!lineItems.length} label="PAY NOW" backgroundColor="blue" fontColor="white"/>
        {error &&  <Well>
          <Paragraph>{error}</Paragraph></Well>}
       
      </form>
      {isLoading && <Modal message="Processing card..." />}
    </Fragment>
  );
};

export default CardPayment;

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