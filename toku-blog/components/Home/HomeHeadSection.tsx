import Head from "next/head";
import { FC } from "react";

export const HomeHeadSection: FC = () => {
  return (
    <Head>
      <title>{"Toku's Blog"}</title>
      <meta
        name="Toku's Blog"
        content="This's blog written by Keisuke Tokunaga."
      />
      <link rel="Toku Icon" href="favicon.ico" type="image/x-icon" />
    </Head>
  );
};
