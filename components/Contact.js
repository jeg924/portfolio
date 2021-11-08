// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import Image from "next/image";

import mailIcon from "../public/images/contact/mailIcon.png";
import githubIcon from "../public/images/contact/githubIcon.png";
import linkedinIcon from "../public/images/contact/linkedinIcon.png";
import googledocsIcon from "../public/images/contact/googleDocsIcon.png";

export default function Contact() {
  return (
    <div
      css={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <div
        css={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginRight: "auto",
          marginLeft: "auto",
        }}
      >
        <p>Contact&nbsp;me&nbsp;on</p>
        <ContactMedia link="mailto:jeg924@gmail.com" image={mailIcon} />
        <ContactMedia link="https://github.com/jeg924" image={githubIcon} />
      </div>

      <a
        href="https://docs.google.com/document/d/1CyZ9LgSe5KPKBIcxmmfk1rzk-NOeL-g85Kbiom6RrIc/edit"
        css={{
          textDecorationColor: "blue",
          color: "blue",
          justifyContent: "center",
          display: "flex",
        }}
        target="_blank"
      >
        See my resume
      </a>
    </div>
  );
}

const ContactMedia = ({ link, image }) => {
  return (
    <a css={{ paddingLeft: 10 }} href={link} target="_blank">
      <Image src={image} objectFit="contain" width={40} height={40} />
    </a>
  );
};
