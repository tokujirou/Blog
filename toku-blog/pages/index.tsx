import type { NextPage } from "next";
import { HomeHeadSection } from "../components/PagesComponents/Home/HomeHeadSection";
import { BlogsSection } from "../components/PagesComponents/Home/BlogsSection";
import { getDataBase } from "../lib/notion";
import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";

export type Props = {
  database: QueryDatabaseResponse | null;
};

export const getStaticProps = async () => {
  if (!process.env.NOTION_DATABASE_ID) {
    console.error("database_idが存在しません");
    return {
      props: {
        database: null,
      },
      revalidate: 1,
    };
  }
  const database = await getDataBase(process.env.NOTION_DATABASE_ID);
  return {
    props: {
      database,
    },
    revalidate: 1,
  };
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
