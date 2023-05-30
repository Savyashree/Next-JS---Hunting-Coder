import '../styles/globals.css';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className={styles.container}>
        <nav className={styles.mainNav}>
          <ul>
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/about">
              <li>About</li>
            </Link>
            <Link href="/blog">
              <li>Blog</li>
            </Link>
            <Link href="/contact">
              <li>Contact</li>
            </Link>
          </ul>
        </nav>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
