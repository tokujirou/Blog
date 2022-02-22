import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>{"Toku's Blog"}</title>
        <meta
          name="Toku's Blog"
          content="This's blog written by Keisuke Tokunaga."
        />
        <link rel="Toku Icon" href="favicon.ico" type="image/x-icon" />
      </Head>
    </div>
  );
};

export default Home;
