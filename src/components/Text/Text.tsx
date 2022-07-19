import { HTMLAttributes } from 'react';
import classnames from 'classnames';

import { TextProps } from './Text.types';
import styles from './Text.module.css';

export function Text<P = HTMLAttributes<HTMLElement>>({
  as: Component = 'span',
  variant = 'm',
  ...props
}: TextProps<P>) {
  return (
    <Component className={classnames(styles['text-' + variant])} {...props} />
  );
}
