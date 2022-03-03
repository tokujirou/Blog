import type { NextPage } from "next";
import { HomeHeadSection } from "../components/Home/HomeHeadSection";
import { BlogsSection } from "../components/Home/BlogsSection";
import { getBlock, getDataBase } from "../lib/notion";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";

export type Props = {
  database: QueryDatabaseResponse | null;
};

const Home: NextPage<Props> = ({ database }) => {
  return (
    <main>
      <HomeHeadSection />
      <BlogsSection database={database} />
    </main>
  );
};

export default Home;

type GetStaticProps = () => Promise<{
  props: {
    database: QueryDatabaseResponse | null;
  };
  revalidate: number;
} | null>;

export const getStaticProps: GetStaticProps = async () => {
  if (!process.env.NOTION_DATABASE_ID) {
    console.error("database_idが存在しません");
  }
  const database = await getDataBase(process.env.NOTION_DATABASE_ID ?? "");
  return {
    props: {
      database,
    },
    revalidate: 1,
  };
};
