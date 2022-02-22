import { VFC } from "react";
import BottomBtn from "../../public/bottombtn.svg";

export const Footer: VFC = () => {
  const scrollToTop = () => {
    window.scroll({ top: 0, behavior: "smooth" });
  };
  return (
    <div className="flex fixed bottom-0 justify-center mx-auto w-full">
      <button onClick={scrollToTop}>
        <BottomBtn />
      </button>
    </div>
  );
};
