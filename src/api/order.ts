import { OrderProduct } from '@/types/OrderProduct';
import { checkHandler, errorHandler } from './handler';

const API_BASE_URL = '';

type BuyProductsRequest = {
  products: OrderProduct[];
  total: number;
};

export const buyProducts = (data: BuyProductsRequest) => {
  return fetch(API_BASE_URL + '/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', accept: 'application/json' },
    body: JSON.stringify({
      data,
    }),
  })
    .then(checkHandler)
    .catch(errorHandler);
};
