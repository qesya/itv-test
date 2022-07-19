export enum TextVariant {
  xl = 'xl',
  l = 'l',
  m = 'm',
  s = 's',
  xs = 'xs',
}

export type TextProps<P> = P & {
  as?: any;
  variant?: keyof typeof TextVariant | TextVariant;
  className?: string;
  children: React.ReactNode;
};
