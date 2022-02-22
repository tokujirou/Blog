import { VFC } from "react";
import { Button } from "../Common/Button";
import { Title } from "./LayoutParts/Title";
import { TitleDescription } from "./LayoutParts/TitleDescription";

export const Header: VFC = () => {
  return (
    <div className="p-10 px-12">
      <Title />
      <div className="flex-wrap w-full">
        <div className="inline-block p-3 xl:w-3/5">
          <TitleDescription />
        </div>
        <div className="inline-block xl:w-2/5 xl:text-center">
          <Button to="/">Home</Button>
          <Button to="/about">About</Button>
        </div>
      </div>
    </div>
  );
};
