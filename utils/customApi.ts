import { PaymentIntent } from "./types/stripeTypes";
import { LineItem, Order, Shipping, Billing } from "./types/wooCommerceTypes";

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
  paymentIntentId: string,
  shippingInfo: Shipping,
  billingInfo: Billing,
  shippingMethod: {
    id: number,
    title: string,
    enabled: boolean,
    method_id: string,
    method_title: string
  }
) {
  //console.log("createOrderApi");
  //console.log({shippingInfo, billingInfo});
  // create order data
  const data: Order = {
    payment_method: "stripe",
    payment_method_title: "Card",
    set_paid: false,
    line_items: lineItems,
    shipping: shippingInfo,
    billing: billingInfo,
    meta_data: [
      {
        key: "_stripe_intent_id",
        value: paymentIntentId,
      },
    ],
    shipping_lines: [
      {
        method_id: shippingMethod.method_id,
        method_title: shippingMethod.method_title
      }
    ],
  };
  //console.log({data});
  try {
    const response = await instance.post("/api/make-order", data);
    //console.log({response});
    return response;
  } catch (error) {
    throw new Error(error);
  }
}

// hits the create-payment-intent API endpoint to create a new Stripe payment intent and return client secret //
export async function createPaymentIntentApi(data: LineItem[]) {
  //console.log("createPaymentIntentApi data: ", data);
  try {
    const response = await instance.post("/api/create-payment-intent", data);

    return response.data as PaymentIntent;
  } catch (err) {
    throw new Error(err);
  }

}