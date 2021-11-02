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
        flexDirection: "row",
        height: 50,
        justifyContent: "space-around",
        width: "100%",
      }}
    >
      <p css={{ "@media (max-width: 300px)": { display: "none" } }}>
        Contact me on
      </p>
      <ContactMedia link="mailto:jeg924@gmail.com" image={mailIcon} />
      <ContactMedia link="https://github.com/jeg924" image={githubIcon} />
      <ContactMedia
        link="https://www.linkedin.com/in/james-gonzales-809401189/"
        image={linkedinIcon}
      />
      <ContactMedia
        link="https://docs.google.com/document/d/1CyZ9LgSe5KPKBIcxmmfk1rzk-NOeL-g85Kbiom6RrIc/edit"
        image={googledocsIcon}
      />
    </div>
  );
}

const ContactMedia = ({ link, image }) => {
  return (
    <div
      css={{
        width: 40,
        position: "relative",
      }}
    >
      <a href={link}>
        <Image src={image} layout="responsive" objectFit="contain" />
      </a>
    </div>
  );
};
