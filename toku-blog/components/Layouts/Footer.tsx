import { VFC } from "react";
import BottomBtn from "../../public/bottombtn.svg";

export const Footer: VFC = () => {
  return (
    <div className="flex fixed bottom-0 justify-center mx-auto w-full">
      <BottomBtn className="inline-block" />
    </div>
  );
};
