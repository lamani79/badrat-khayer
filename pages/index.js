import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/nav-bar/nav-bar";

export default function Home() {
  return (
    <div>
      <Head>
        <title>BADRAT KHAYR</title>
        <meta name="description" content="bla bla bla " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <NavBar />
      </main>

      <footer></footer>
    </div>
  );
}
