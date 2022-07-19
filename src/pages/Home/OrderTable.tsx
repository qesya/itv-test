import { ColumnDef } from '@tanstack/react-table';

import { Button, Table } from '@/components';
import { OrderProduct } from '@/types/OrderProduct';
import { displayCurrency } from '@/utils/number';

import styles from './Home.module.css';

type Props = {
  data: OrderProduct[];
  setData: (data: OrderProduct[]) => void;
};

export default function OrderTable({ data, setData }: Props) {
  const columns: ColumnDef<OrderProduct>[] = [
    {
      accessorKey: 'product',
      cell: (info) => info.getValue(),
      footer: () => null,
    },
    {
      accessorFn: (row) => row.price,
      id: 'price',
      cell: (info) => displayCurrency(info.getValue()),
      header: () => <span>Price</span>,
      footer: () => null,
    },
    {
      accessorKey: 'qty',
      header: () => 'Quantity',
      cell: (props) => {
        return (
          <div className={styles.qtyWrapper}>
            <input
              className={styles.input}
              value={props.getValue()}
              onChange={(e) =>
                updateQty(
                  props.row.getValue('id'),
                  parseInt(e.currentTarget.value) | 0
                )
              }
            />
            <Button
              variant="warning"
              title="-"
              rounded="sm"
              onClick={() =>
                updateQty(
                  props.row.getValue('id'),
                  parseInt(props.getValue()) - 1
                )
              }
            />
            <Button
              variant="success"
              title="+"
              rounded="sm"
              onClick={() =>
                updateQty(
                  props.row.getValue('id'),
                  parseInt(props.getValue()) + 1
                )
              }
            />
          </div>
        );
      },
      footer: () => null,
    },
    {
      accessorKey: 'cost',
      header: () => 'Cost',
      cell: (info) => displayCurrency(info.getValue()),
      footer: () => null,
    },
    {
      accessorKey: 'id',
      header: () => null,
      cell: (info) => {
        return (
          <div>
            <Button
              title="Delete"
              variant="danger"
              rounded="sm"
              onClick={() => deleteProduct(info.getValue())}
            />
          </div>
        );
      },
      footer: () => null,
    },
  ];

  const updateQty = (id: string, quantity: number) => {
    const qty = quantity < 0 ? 0 : quantity;
    const newData = data.map((p) => {
      if (p.id === id) {
        return {
          ...p,
          qty,
          cost: p.price * qty,
        };
      }
      return p;
    });
    setData(newData);
  };

  const deleteProduct = (id: string) => {
    const newData = data.filter((p) => p.id !== id);
    setData(newData);
  };

  return <Table data={data} columns={columns} />;
}
