import Cors from 'cors';

const corsMiddleware = (req, res) =>
  new Promise((resolve, reject) => {
    const cors = Cors({
      methods: ['GET', 'POST', 'OPTIONS'], // Add the HTTP methods you need
    });

    cors(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });

export default function initMiddleware(middleware) {
  return (req, res) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result);
        }

        return resolve(result);
      });
    });
}