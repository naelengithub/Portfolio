import styles from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div>
        <button to="/design">Design</button>
        <button to="/skincare">Skincare</button>
        <button to="/skincare">About</button>
        <button to="/contact">
          <Link href="/contact">Contact</Link>
        </button>
      </div>
    </nav>
  );
}
