import { OrderProduct } from '@/types/OrderProduct';

export const sumPrice = (obj: OrderProduct[]) => {
  if (obj.length === 0) {
    return 0;
  }

  const newObj = obj.map((e) => e.price * e.qty);
  return Object.values(newObj).reduce((a, b) => a + b);
};
