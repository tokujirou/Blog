import { GetStaticProps, NextPage } from "next";
import { BlogHeadSection } from "../../components/PagesComponents/Blog/BlogHeadSection";
import { BlogSection } from "../../components/PagesComponents/Blog/BlogSection";
import { getBlock, getDataBase, getPage } from "../../lib/notion";
const Blog: NextPage = ({ pageTitles, pageBodies }: any) => {
  return (
    <main>
      <BlogHeadSection />
      <hr />
      <BlogSection pageTitles={pageTitles} pageBodies={pageBodies} />
    </main>
  );
};

export default Blog;

export const getStaticPaths = async () => {
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
  const pathList = database?.results.map((blog) => {
    return {
      params: {
        id: blog.id,
      },
    };
  });

  return {
    paths: pathList,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  if (!context?.params?.id) {
    console.error("page_idが存在しません");
    return {
      props: {
        database: null,
      },
      revalidate: 1,
    };
  }

  const pageTitles = !Array.isArray(context?.params?.id)
    ? await getPage(context.params.id)
    : null;
  const pageBodies = !Array.isArray(context?.params?.id)
    ? await getBlock(context.params.id)
    : null;

  return {
    props: {
      pageTitles,
      pageBodies,
    },
    revalidate: 1,
  };
};
