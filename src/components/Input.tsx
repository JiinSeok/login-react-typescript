import styles from './Input.module.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export default function Input({ className = '', ...rest }: InputProps) {
  const classNames = `${styles.input} ${className}`;
  return <input className={classNames} {...rest} />;
}
