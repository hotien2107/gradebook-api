import Head from "next/head";
import Link from "next/link";
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
        <p className={styles.description}>
          Get All Enrolled Classes:{" "}
          <Link href="/api/EnrolledClasses">Enrolled Classes API</Link>
        </p>
        <p className={styles.description}>
          Get some Teaching Classes:{" "}
          <Link href="/api/TeachingClassesHomePage">
            Some Teaching Classes API
          </Link>
        </p>
        <p className={styles.description}>
          Get some Enrolled Classes:{" "}
          <Link href="/api/EnrolledClassesHomePage">
            Some Enrolled Classes API
          </Link>
        </p>
        <p className={styles.description}>
          Create a class:{" "}
          <Link href="/api/CreateClass">Create a Class API</Link>
        </p>
        <p className={styles.description}>
          Join a class: <Link href="/api/JoinClass">Join a Class API</Link>
        </p>
      </main>
    </div>
  );
}
