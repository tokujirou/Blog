import { VFC } from "react";

export const Title: VFC = () => {
  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <div className="text-6xl font-extralight lg:text-8xl text-secondary">
      {"Toku's Blog"}
    </div>
  );
};
