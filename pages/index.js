import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Gradebook API</title>
        <meta name="description" content="Create API by Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Gradebook API</h1>

        <p className={styles.description}>
          Get All Teaching Classes:{" "}
          <Link href="/api/TeachingClasses">Teaching Classes API</Link>
        </p>
      </main>
    </div>
  );
}
