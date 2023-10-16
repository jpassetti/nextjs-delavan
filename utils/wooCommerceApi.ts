import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";
import { Order } from "./types/wooCommerceTypes";

// initialise the WooCommerceRestApi 
const api = new WooCommerceRestApi({
  url: process.env.WOOCOMMERCE_URL!,
  consumerKey: process.env.WOOCOMMERCE_KEY!,
  consumerSecret: process.env.WOOCOMMERCE_SECRET!,
  version: "wc/v3",
});

// fetch all products from WooCommerce //
export async function fetchWooCommerceProducts() {
  try {
    const response = await api.get("products");
    console.log({response});
    return response;
  } catch (error) {
    console.log({error});
    throw new Error(error);
  }
}
// create new WooCommerce order by passing in required data object //
export async function createWooCommerceOrder(data: Order) {
  console.log("createWooCommerceOrder");
  console.log({data});
  try {
    const response = await api.post("orders", data);
    console.log({response});
    return response;
  } catch (error) {
    throw new Error(error);
  }
}
export async function retrieveProductById(productId: string) {
  try {
    const response = await api.get(`products/${productId}`);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}
export async function getShippingZones() {
  try {
    const response = await api.get("shipping/zones");
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}