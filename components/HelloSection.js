// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css, Global } from "@emotion/react";
import React from "react";
import Image from "next/image";

import profilePic from "../public/images/profile.jpg";
import mailIcon from "../public/images/contact/mailIcon.png";
import githubIcon from "../public/images/contact/githubIcon.png";
import linkedinIcon from "../public/images/contact/linkedinIcon.png";

export default function HelloSection() {
  return (
    <div
      css={{
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
        <div
          css={{
            display: "flex",
            flexDirection: "row",
            height: 50,
            justifyContent: "space-around",
            width: "100%",
          }}
        >
          <p css={{ "@media (max-width: 300px)": { display: "none" } }}>
            Contact me on
          </p>
          <div
            css={{
              width: 40,
              position: "relative",
            }}
          >
            <a href="mailto:jeg924@gmail.com">
              <Image src={mailIcon} layout="responsive" objectFit="contain" />
            </a>
          </div>
          <div
            css={{
              width: 40,
              position: "relative",
            }}
          >
            <a href="https://github.com/jeg924">
              <Image src={githubIcon} layout="responsive" objectFit="contain" />
            </a>
          </div>
          <div
            css={{
              width: 40,
              position: "relative",
            }}
          >
            <a href="https://www.linkedin.com/in/james-gonzales-809401189/">
              <Image
                src={linkedinIcon}
                layout="responsive"
                objectFit="contain"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
