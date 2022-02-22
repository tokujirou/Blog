import { VFC } from "react";

export const Title: VFC = () => {
  return (
    // eslint-disable-next-line tailwindcss/no-custom-classname
    <div className="font-[100] text-6xl lg:text-8xl text-secondary">
      {"Toku's Blog"}
    </div>
  );
};
