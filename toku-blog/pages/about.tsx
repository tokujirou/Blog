import { NextPage } from "next";
import { AboutHeadSection } from "../components/PagesComponents/About/AboutHeadSection";
import { AboutSection } from "../components/PagesComponents/About/AboutSection";
import { AboutThisBlogSection } from "../components/PagesComponents/About/AboutThisBlogSection";

const About: NextPage = () => {
  return (
    <main>
      <AboutHeadSection />
      <AboutSection />
      <AboutThisBlogSection />
    </main>
  );
};

export default About;
