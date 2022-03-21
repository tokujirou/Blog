import { VFC } from "react";
import { SectionTitle } from "../../Common/SectionTitle";
import VercelIcon from "../../../public/vercel.svg";
import TypescriptIcon from "../../../public/typescript.svg";
import NextIcon from "../../../public/nextjs.svg";
import TailwindIcon from "../../../public/tailwindcss.svg";

export const AboutThisBlogSection: VFC = () => {
  return (
    <div className="m-4 sm:m-8 md:m-8 lg:m-14 xl:m-14">
      <SectionTitle title="About This Blog" />
      <div className="mt-10 text-center">
        <p className="font-thin text-textc">
          This blog uses the following technologies
        </p>
        <VercelIcon className="inline m-3" />
        <TypescriptIcon className="inline m-3" />
        <NextIcon className="inline m-3" />
        <TailwindIcon className="inline m-3" />
      </div>
    </div>
  );
};
