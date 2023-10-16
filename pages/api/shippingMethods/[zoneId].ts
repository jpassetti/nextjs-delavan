import { NextApiRequest, NextApiResponse } from 'next';
import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

const api = new WooCommerceRestApi({
  url: process.env.WOOCOMMERCE_URL!,
  consumerKey: process.env.WOOCOMMERCE_KEY!,
  consumerSecret: process.env.WOOCOMMERCE_SECRET!,
  version: "wc/v3",
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const zoneId = req.query.zoneId as string;

  try {
    const response = await api.get(`shipping/zones/${zoneId}/methods`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch shipping methods' });
  }
}