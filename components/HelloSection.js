// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import Image from "next/image";

import profilePic from "../public/images/profile.jpg";
import Contact from "./Contact";

export default function HelloSection() {
  return (
    <div
      css={{
        marginTop: 150,
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: 600,
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div
        css={{
          display: "flex",
          flexDirection: "row",
          "@media (max-width: 500px)": {
            flexDirection: "column",
            alignItems: "center",
          },
        }}
      >
        <div
          css={{
            width: 150,
            position: "relative",
            "@media (min-width: 500px)": { marginRight: 20 },
          }}
        >
          <Image
            css={{ borderRadius: "100%" }}
            src={profilePic}
            objectFit="contain"
            width={150}
            height={150}
          />
        </div>
        <div>
          <h1 css={{ "@media (max-width: 500px)": { textAlign: "center" } }}>
            Hi, I'm James&nbsp;Gonzales&nbsp;👋{" "}
          </h1>
          <p>
            I’m a developer and recent graduate looking to use technology to
            make awesome things.
          </p>
        </div>
      </div>
      <Contact />
    </div>
  );
}
