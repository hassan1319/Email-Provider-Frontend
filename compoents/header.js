import Link from "next/link";
import styles from "../styles/Header.module.css";

export default function Header() {
  return <div className={styles.container}>
    <Link href="/">
      <a>Home</a>
    </Link>

    <Link href="/stats">
      <a>Stats</a>
    </Link>
  </div>
}