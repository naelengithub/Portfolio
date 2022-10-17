import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Navbar from "../components/navbar/navbar";
import HomepageOverview from "../components/homepage-overview/homepageOverview";
import Fader from "../components/fader";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio</title>
      </Head>
      <Navbar />
      <main className={styles.main}>
        <HomepageOverview />
      </main>
      <footer className={styles.footer}>
        <h2>I am the footer.</h2>
      </footer>
    </div>
  );
}
