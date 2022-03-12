import Head from "next/head";
import { FC } from "react";

export const AboutHeadSection: FC = () => {
  return (
    <Head>
      <title>{"Toku's Blog About Page"}</title>
      <meta
        name="Toku's Blog About Page"
        content="This's blog written by Keisuke Tokunaga."
      />
      <link rel="Toku Icon" href="favicon.ico" type="image/x-icon" />
    </Head>
  );
};
