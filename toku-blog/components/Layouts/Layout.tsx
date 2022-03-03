import { FC } from "react";
import { Footer } from "./LayoutParts/Footer";
import { Header } from "./LayoutParts/Header";

export const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
