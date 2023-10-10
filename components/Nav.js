import Link from "next/link";
import css from "./Nav.module.css"

export default function Nav() {
  return (
    <nav className={css.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
