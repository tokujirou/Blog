import { NextPage } from "next";
import { AboutHeadSection } from "../components/PagesComponents/About/AboutHeadSection";
import { AboutSection } from "../components/PagesComponents/About/AboutSection";

const About: NextPage = () => {
  return (
    <main>
      <AboutHeadSection />
      <AboutSection />
    </main>
  );
};

export default About;
