import { NextPage } from "next";
import { BlogHeadSection } from "../../components/PagesComponents/Blog/BlogHeadSection";
import { useRouter } from "next/router";

const Blog: NextPage = () => {
  const router = useRouter();
  const { blog_id } = router.query;
  console.log(blog_id);
  return (
    <main>
      <BlogHeadSection />
    </main>
  );
};

export default Blog;
