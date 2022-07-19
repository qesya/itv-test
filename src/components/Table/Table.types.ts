import { ColumnDef } from '@tanstack/react-table';

export type TableProps<P> = {
  data: P[];
  columns: ColumnDef<P>[];
};
