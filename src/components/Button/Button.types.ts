import { ReactNode } from 'react';

export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variant?:
    | 'primary'
    | 'secondary'
    | 'warning'
    | 'success'
    | 'danger'
    | 'disabled';
  size?: 'sm' | 'md' | 'lg';
  rounded?: 'md' | 'sm' | 'none';
  title: string | ReactNode;
};
