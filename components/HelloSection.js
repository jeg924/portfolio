// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import Image from "next/image";

import profilePic from "../public/images/profile.jpg";
import Contact from "../components/Contact";

export default function HelloSection() {
  return (
    <div
      css={{
        marginTop: 50,
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: 600,
        width: "100%",
        display: "flex",
        flexDirection: "row",
        "@media (max-width: 300px)": {
          flexDirection: "column",
          alignItems: "center",
        },
      }}
    >
      <div
        css={{
          width: 120,
          position: "relative",
          "@media (min-width: 300px)": { marginRight: 20 },
        }}
      >
        <Image
          css={{ borderRadius: "100%" }}
          src={profilePic}
          layout="responsive"
          objectFit="contain"
        />
      </div>
      <div>
        <h1>Hi, I'm James Gonzales 👋 </h1>
        <p>
          I’m a developer and recent graduate looking to use technology to make
          awesome things.
        </p>
        <Contact />
      </div>
    </div>
  );
}
