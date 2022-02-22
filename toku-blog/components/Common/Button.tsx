import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";
import styles from "../../styles/Button.module.css";

export const Button: FC<{
  onClick?: () => void;
  url?: string;
  to?: string;
}> = ({ onClick, url, to, children }) => {
  const router = useRouter();
  if (onClick) {
    return (
      <button onClick={onClick} className={styles.btn}>
        {children}
      </button>
    );
  } else if (url) {
    return (
      <button onClick={() => router.push(url)} className={styles.btn}>
        {children}
      </button>
    );
  } else if (to) {
    return (
      <Link href={to}>
        <button className={styles.btn}>{children}</button>
      </Link>
    );
  }
  return <button className={styles.btn}>{children}</button>;
};
