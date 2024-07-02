import styles from './Alert.module.css';

interface AlertProps {
    level?: 'info' | 'warn';
    children: React.ReactNode;
}

export default function Alert({ level = 'info', children }: AlertProps) {
    return (
        <div className={`${styles.alert} ${styles[level]}`}>
            {children}
        </div>
    );
}