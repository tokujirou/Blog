import Image from "next/image";
import { VFC } from "react";
import { SectionTitle } from "../../Common/SectionTitle";
import GithubIcon from "../../../public/github-icon.svg";
import InstagramIcon from "../../../public/instagram-icon.svg";
import TwitterIcon from "../../../public/twitter.svg";

export const AboutSection: VFC = () => {
  const instagramUrl = "https://www.instagram.com/kei_toku0923";
  const twitterUrl = "https://twitter.com/keisuke2000_";
  const githubUrl = "https://github.com/Keisuke-Toku-2000";
  return (
    <div className="m-4 sm:m-8 md:m-8 lg:m-14 xl:m-14">
      <SectionTitle title="About" />
      <div className="flex flex-wrap justify-center pt-14">
        <Image
          src="/../public/toku.jpg"
          width={350}
          height={350}
          alt="toku picture"
          className="rounded-2xl"
        />
        <table className="m-8 text-lg font-thin text-textc">
          <tbody>
            <tr>
              <td>Name:</td>
              <td> Keisuke Tokunaga</td>
            </tr>
            <tr>
              <td>Gender:</td>
              <td>Male</td>
            </tr>
            <tr>
              <td>Date of birth:</td>
              <td>2000/09/23</td>
            </tr>
            <tr>
              <td>University:</td>
              <td>University of Aizu</td>
            </tr>
            <tr>
              <td>Technologies:</td>
              <td>React, Vue, TypeScript, Node.js</td>
            </tr>
            <tr>
              <td>Hobby:</td>
              <td>Snowbording, watching survival video in youtube.</td>
            </tr>
          </tbody>
          <tfoot className="text-right">
            <tr>
              <td />
              <td>
                <GithubIcon
                  className="inline m-2"
                  onClick={() => window.open(githubUrl, "_blank")}
                />
                <InstagramIcon
                  className="inline m-2"
                  onClick={() => window.open(instagramUrl, "_blank")}
                />
                <TwitterIcon
                  className="inline m-2"
                  onClick={() => window.open(twitterUrl, "_blank")}
                />
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};
