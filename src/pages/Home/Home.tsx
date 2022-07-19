import { useEffect, useState } from 'react';
import { buyProducts } from '@/api/order';
import { OrderProduct } from '@/types/OrderProduct';
import { displayCurrency } from '@/utils/number';
import { sumPrice } from '@/utils/sum';
import { Box, Button, Divider, Text } from '@/components';

import styles from './Home.module.css';
import OrderTable from './OrderTable';

const defaultData: OrderProduct[] = [
  {
    id: '1',
    product: 'Apple',
    price: 0.52,
    qty: 10,
    cost: 5.2,
  },
  {
    id: '2',
    product: 'Banana',
    price: 0.34,
    qty: 10,
    cost: 3.4,
  },
  {
    id: '3',
    product: 'Guava',
    price: 0.67,
    qty: 10,
    cost: 6.7,
  },
];

export function Home() {
  const [data, setData] = useState(defaultData);
  const [subTotal, setSubTotal] = useState(
    data.length > 0 ? sumPrice(data) : 0
  );

  const getVAT = (() => subTotal / 5)();
  const getTotal = (() => subTotal + getVAT)();
  const onBuyNow = async () => {
    try {
      await buyProducts({
        products: data,
        total: getTotal,
      });
    } catch (error) {
      console.log(error);
    }
    alert('your order has been placed');
  };

  useEffect(() => {
    if (data.length > 0) setSubTotal(sumPrice(data));
  }, [data]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <div>
          <Text variant="xl">Review Your Order & Complete Checkout</Text>
        </div>
        <Divider />
        <Box title="Review Your Order">
          <OrderTable data={data} setData={setData} />
        </Box>
        <Divider />
        <div>
          <div className={styles.totalWrapper}>
            <Text>Subtotal</Text>
            <Text>{displayCurrency(subTotal)}</Text>
          </div>
          <div className={styles.totalWrapper}>
            <Text>VAT @ 20%</Text>
            <Text>{displayCurrency(getVAT)}</Text>
          </div>
        </div>
        <Divider />
        <div className={styles.totalWrapper}>
          <Text>Total</Text>
          <Text>{displayCurrency(getTotal)}</Text>
        </div>
        <Divider />
        <div className={styles.buyWrapper}>
          <Button
            name="button-buy"
            variant={data.length > 0 ? 'primary' : 'disabled'}
            title="Buy Now"
            size="lg"
            onClick={onBuyNow}
          />
        </div>
      </div>
    </div>
  );
}
