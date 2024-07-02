import { ReactNode } from "react";
import styles from './Button.module.css';

interface ButtonProps {
  className?: string;
  id?: string;
  children?: ReactNode;
  onClick: any;
}

// export default function Button({ className = '', id, children, onClick }: ButtonProps) {
//   const classNames = `${styles.button} ${className}`;
//   return <button className={classNames} id={id} onClick={onClick}>{children}</button>;
// }

const Button = ({ className = '', id, children, onClick }: ButtonProps) => {
  const classNames = `${styles.button} ${className}`;
  return <button className={classNames} id={id} onClick={onClick}>{children}</button>;
}

export default Button;