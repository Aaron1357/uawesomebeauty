import Head from "next/head";
import Header from "@/components/Header";
export default function App({ Component, pageProps }) {
  return (
    <div>
      <Header />
      <Component {...pageProps} />
      <Head>
        <title>유어썸뷰티 | About Us</title>
      </Head>
    </div>
  );
}
