import Image from "next/image";
import { VFC } from "react";
import { Props } from "../../pages";
import { SectionTitle } from "../Common/SectionTitle";

export const BlogsSection: VFC<Props> = ({ database }) => {
  if (!database?.results) {
    return (
      <div className="m-14">
        <SectionTitle title="Blogs" />
        <p className="my-4 text-textc">There is no blog at this time.</p>
      </div>
    );
  }
  return (
    <div className="m-14">
      <SectionTitle title="Blogs" />
      <div className="flex flex-wrap justify-center mt-8 ">
        {database.results.map((blog, index) => {
          return (
            <div key={index} className="flex-wrap m-5 w-72 text-left">
              <Image
                // TODO: anyをなんとかする。
                src={(blog as any).cover.external.url}
                alt=""
                width={288}
                height={180}
                loading="eager"
              />
              <p className="p-0 m-0 text-sm font-semibold text-textc">
                {(blog as any).properties.Tags.multi_select[0].name}
              </p>
              <p className="text-lg font-bold text-textc">
                {(blog as any).properties.Page.title[0].plain_text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
