import Image from "next/image";
import Link from "next/link";
import { VFC } from "react";
import { Props } from "../../../pages";
import { SectionTitle } from "../../Common/SectionTitle";

export const BlogsSection: VFC<Props> = ({ database }) => {
  if (!database?.results && database?.object !== "list") {
    return (
      <div className="m-14">
        <SectionTitle title="Blogs" />
        <p className="my-4 text-textc">There is no blog at this time.</p>
      </div>
    );
  }
  return (
    <div className="m-4 sm:m-8 md:m-8 lg:m-14 xl:m-14">
      <SectionTitle title="Blogs" />
      <div className="flex flex-wrap justify-center mt-8">
        {database.results.map((blog, index) => {
          const id = blog.id;
          return (
            <Link key={index} href={`blog/${id}`}>
              <div className="flex-wrap p-6 m-2 w-72 text-left border hover:border-secondary">
                <p className="pt-2 text-lg font-bold text-textc">
                  {(blog as any).properties.Page.title[0]?.plain_text &&
                    (blog as any).properties.Page.title[0]?.plain_text}
                </p>
                {(blog as any).cover?.external.url && (
                  <Image
                    // TODO: anyをなんとかする。
                    src={(blog as any).cover?.external.url}
                    alt=""
                    width={288}
                    height={180}
                    loading="eager"
                  />
                )}
                <p className="p-0 m-0 text-sm font-semibold text-textc">
                  {(blog as any)?.properties.Tags.multi_select[0]?.name &&
                    (blog as any).properties.Tags.multi_select[0]?.name}
                </p>
                <p className="text-sm font-medium text-textc">
                  {(blog as any)?.properties.Subtitle.rich_text[0]
                    ?.plain_text &&
                    (blog as any)?.properties.Subtitle.rich_text[0]?.plain_text}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
