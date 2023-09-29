import { NextApiRequest, NextApiResponse } from 'next';
import { createWooCommerceOrder } from '../../utils/wooCommerceApi'; // Replace with the actual import

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
console.log("req.body: ", req.body);
  const data = req.body;
  if (req.method === 'POST') {
    try {
      const response = await createWooCommerceOrder(data);
      res.status(200).json(response.data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.status(405).end(); // Method not allowed
  }
}