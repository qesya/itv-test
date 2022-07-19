import {
  getCoreRowModel,
  useReactTable,
  flexRender,
} from '@tanstack/react-table';

import styles from './Table.module.css';
import { TableProps } from './Table.types';

export function Table<P>({ data, columns }: TableProps<P>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <table className={styles.wrapper}>
      <thead className={styles.header}>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id} className={styles.th}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody className={styles.body}>
        {table.getRowModel().rows.map((row, index) => (
          <tr
            key={row.id}
            className={index % 2 !== 0 ? styles.trEven : styles.trOdd}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id} className={styles.td}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
      <tfoot>
        {table.getFooterGroups().map((footerGroup) => (
          <tr key={footerGroup.id}>
            {footerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.footer,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </tfoot>
    </table>
  );
}
