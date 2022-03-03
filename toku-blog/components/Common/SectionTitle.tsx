import { VFC } from "react";

export const SectionTitle: VFC<{ title: string }> = ({ title }) => {
  return (
    <div>
      <h3 className="font-bold text-textc">{title}</h3>
      <hr className="h-0.5 border-0 opacity-50 bg-textc" />
    </div>
  );
};
