// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import Image from "next/image";

import csharp from "../public/images/languages/csharpIcon.png";
import javascript from "../public/images/languages/javascriptIcon.png";
import python from "../public/images/languages/pythonIcon.png";
import html from "../public/images/languages/htmlIcon.png";
import cpp from "../public/images/languages/CppIcon.png";
import cssicon from "../public/images/languages/cssIcon.png";

import algolia from "../public/images/tools/algoliaIcon.png";
import docker from "../public/images/tools/dockerIcon.png";
import figma from "../public/images/tools/figmaIcon.png";
import firebase from "../public/images/tools/firebaseIcon.png";
import github from "../public/images/tools/githubIcon.png";
import react from "../public/images/tools/reactIcon.png";

export default function Skills() {
  return (
    <div id="Skills" css={{ marginTop: 150 }}>
      <div css={{ display: "flex", justifyContent: "center" }}>
        <h1>Skills</h1>
      </div>
      <div css={{ maxWidth: 500, marginLeft: "auto", marginRight: "auto" }}>
        <SkillSummary
          type="Languages"
          image1={csharp}
          description1="C#"
          image2={javascript}
          description2="JS"
          image3={python}
          description3="Python"
          image4={html}
          description4="HTML"
          image5={cpp}
          description5="C++"
          image6={cssicon}
          description6="CSS"
        />
        <SkillSummary
          type="Tools"
          image1={algolia}
          description1="Algolia"
          image2={docker}
          description2="Docker"
          image3={figma}
          description3="Figma"
          image4={firebase}
          description4="Firebase"
          image5={github}
          description5="Github"
          image6={react}
          description6="React"
        />
      </div>
    </div>
  );
}

const Item = ({ image, description }) => {
  return (
    <div
      css={{
        width: "33%",
      }}
    >
      <div
        css={{
          padding: 10,
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          "@media (max-width: 500px)": {
            marginLeft: 0,
          },
        }}
      >
        <div
          css={{
            width: 40,
            height: 40,
            position: "relative",
            "@media (max-width: 500px) and (min-width: 500px)": {
              width: 30,
              height: 30,
            },
            "@media (max-width: 500px)": { width: 20, height: 20 },
          }}
        >
          <Image src={image} width={40} height={40} objectFit="contain" />
        </div>
        <p
          css={{
            margin: 0,
            paddingLeft: 10,
            "@media (max-width: 500px)": { paddingLeft: 5 },
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

const SkillSummary = ({
  type,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  description1,
  description2,
  description3,
  description4,
  description5,
  description6,
}) => {
  return (
    <div css={{ marginTop: 50 }}>
      <div
        css={{
          display: "flex",
          justifyContent: "center",
          border: "solid gainsboro 1px",
          borderTopWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
        }}
      >
        <h2>{type}</h2>
      </div>
      <div
        css={{
          marginTop: 10,
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
        }}
      >
        <Item image={image1} description={description1} />
        <Item image={image2} description={description2} />
        <Item image={image3} description={description3} />
        <Item image={image4} description={description4} />
        <Item image={image5} description={description5} />
        <Item image={image6} description={description6} />
      </div>
    </div>
  );
};
