import { PaymentIntent } from "./types/stripeTypes";
import { LineItem, Order } from "./types/wooCommerceTypes";

import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

// initialise the WooCommerceRestApi 
const api = new WooCommerceRestApi({
  url: process.env.NEXT_PUBLIC_WOOCOMMERCE_URL!,
  consumerKey: process.env.NEXT_PUBLIC_WOOCOMMERCE_KEY!,
  consumerSecret: process.env.NEXT_PUBLIC_WOOCOMMERCE_SECRET!,
  version: "wc/v3",
});

//const axios = require("axios").default;
const axios = require("axios").default;

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

//----------- GENERAL NOTE --------------//
// These custom endpoints are acting as middlemen to the WooCommerce API.  There are two reasons why I'm doing it like this.
// 1. We need to pass consumerKey and consumerSecret to the WooCommerceRestApi client. I am serving these up as environment variables which are only available server-side.
// 2. It is more secure to run these functions server-side
//---------------------------------------//

// hits the create-order API endpoint to create a new WooCommerce order //
export async function createOrderApi(
  lineItems: LineItem[],
  paymentIntentId: string
) {
  // create order data
  const data: Order = {
    payment_method: "stripe",
    payment_method_title: "Card",
    set_paid: false,
    line_items: lineItems,
    meta_data: [
      {
        key: "_stripe_intent_id",
        value: paymentIntentId,
      },
    ],
  };

  // try {
  //  // const response = await api.post("orders", data);
  //  const response = await fetch('/api/make-order', {
  //   method: 'POST',
  // });
  // const data = await response.json();
  //   return response.data as Order;
  // } catch (err) {
  //   throw new Error(err);
  // }
  try {
    const response = await instance.post("/api/make-order", data);
    console.log({response});
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

// hits the create-payment-intent API endpoint to create a new Stripe payment intent and return client secret //
export async function createPaymentIntentApi(data: LineItem[]) {
  console.log("createPaymentIntentApi data: ", data);
  try {
    const response = await instance.post("/api/create-payment-intent", data);
    //console.log({response});
    // const response = await fetch('/api/create-order', {
    //   method: 'POST',
    // });
    // const data = await response.json();
    return response.data as PaymentIntent;
    //return data as PaymentIntent;
  } catch (err) {
    throw new Error(err);
  }

}