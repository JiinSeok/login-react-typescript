import {ReactNode, MouseEvent} from "react";
import styles from './Button.module.css';

interface ButtonProps {
  className?: string;
  id?: string;
  children?: ReactNode;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void; // 다른 함수 타입과 일관된 형태로 사용
  // onClick: MouseEventHandler<HTMLButtonElement>;
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