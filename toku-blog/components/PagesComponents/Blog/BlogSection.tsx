import Image from "next/image";
import Link from "next/link";
import { VFC } from "react";

export const BlogSection: VFC<{ pageTitles: any; pageBodies: any }> = ({
  pageBodies,
}: any) => {
  return (
    <div className="mx-auto w-10/12 lg:w-6/12 xl:w-6/12">
      {pageBodies.map((block: any, index: number) => {
        return (
          <span className="" key={index}>
            {renderBlocks(block)}
          </span>
        );
      })}
    </div>
  );
};

const Block = ({ prop }: any): JSX.Element | null => {
  if (!prop) return null;
  return (
    <>
      {(prop as Array<any>).map((value, index) => {
        const {
          annotations: { bold, code, color, italic, strikethrough, underline },
          text,
        } = value;
        return (
          <span key={index}>
            {text.link ? (
              <Link href={text.link.url}>{text.content}</Link>
            ) : (
              text.content
            )}
          </span>
        );
      })}
    </>
  );
};

export const renderBlocks = (block: any) => {
  const { type, id } = block;
  const value = block[type];

  switch (type) {
    case "paragraph":
      return (
        <p className="flex-wrap m-2 text-textc">
          <Block prop={value.text} />
        </p>
      );
    case "heading_1":
      return (
        <h1 className="m-2 mt-8 text-4xl font-bold text-textc">
          <Block prop={value.text} />
        </h1>
      );
    case "heading_2":
      return (
        <h2 className="m-2 mt-8 text-3xl font-bold text-textc">
          <Block prop={value.text} />
        </h2>
      );
    case "heading_3":
      return (
        <h3 className="m-2 mt-8 text-2xl font-semibold text-textc">
          <Block prop={value.text} />
        </h3>
      );
    case "code":
      return (
        <pre className="my-3">
          <code
            className="p-3 my-12 mx-2 text-rose-400 bg-gray-100 rounded"
            key={id}
          >
            {value.text[0].plain_text}
          </code>
        </pre>
      );
    case "bulleted_list_item":
    case "numbered_list_item":
      return (
        <li className="text-textc">
          <Block prop={value.text} />
        </li>
      );
    case "divider":
      return <hr key={id} />;
    case "image":
      console.log(value);
      const src =
        value.type === "external" ? value.external.url : value.file.url;
      const caption = value.caption ? value.caption[0]?.plain_text : "";
      return (
        <div className="my-3">
          <img src={src} alt={caption} className="mx-auto max-h-full" />
        </div>
      );
    default:
      return <p>Notionから受け取った値が対応できていません</p>;
  }
};
