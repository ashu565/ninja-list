import Head from "next/head";
import Image from "next/image";
import Navbar from "../Components/navbar";
import Footer from "../Components/Footer";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name="keywords" content="ninjas" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>lorem</p>
        <p className={styles.text}>lorem from Home</p>
        <Link href="/ninjas">
          <a className={styles.btn}>See Ninjas Listing</a>
        </Link>
      </div>
    </>
  );
}
