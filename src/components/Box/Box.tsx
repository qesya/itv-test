import { ReactNode } from 'react';
import styles from './Box.module.css';

type Props = {
  title: string;
  children?: ReactNode;
};

export function Box({ title, children }: Props) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>{title}</div>
      <div className={styles.content}>{children}</div>
    </div>
  );
}

