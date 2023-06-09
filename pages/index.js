import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div className={styles.mainHeader}>
        <h2 className={styles.title}>Hunting Coder</h2>
        <p className={styles.description}>
          Blogs by hunting coder to a hunting coder
        </p>
      </div>
    </div>
  );
}
