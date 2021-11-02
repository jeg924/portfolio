// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import Image from "next/image";
import profilePic from "../public/images/profile.jpg";
import Contact from "./Contact";

export default function About() {
  return (
    <div id="About" css={{ marginTop: 150 }}>
      <div css={{ display: "flex", justifyContent: "center" }}>
        <h1>About</h1>
      </div>
      <div
        css={{
          marginTop: 50,
          display: "flex",
          flexDirection: "row",
          "@media (max-width: 600px)": {
            flexDirection: "column-reverse",
          },
        }}
      >
        <div
          css={{
            flex: 1,
            marginRight: "20%",
            "@media (max-width: 600px)": { marginTop: 20, marginRight: 0 },
          }}
        >
          <AboutSection
            heading="Full Stack Developer"
            paragraph="I love making websites, apps, and games and learning how to use the tools involved. I like to think through the entire process from start to finish, even when I have a smaller, more specific role."
          />
          <AboutSection
            heading="Team Player"
            paragraph="I love working with people. I like sharing and discussing ideas and strategies. I’m familiar with tools like Jira that help teams collaborate. If you are interested in hiring me, you should know I prefer to work in-person for at least part of the week."
          />
          <AboutSection
            heading="Mentor"
            paragraph="Although I’m not very experienced yet, I love to help teach whenever I can. Whether it’s in the class-room, lab-room, or just chatting, I enjoy answering questions and helping others grow."
          />
        </div>
        <div
          css={{
            flex: 1,
            position: "relative",
            width: "100%",
            "@media (max-width: 600px) and (min-width: 300px)": {
              width: "50%",
              marginLeft: "auto",
              marginRight: "auto",
            },
          }}
        >
          <Image src={profilePic} layout="responsive" objectFit="contain" />
        </div>
      </div>
      <div css={{ marginTop: 20, marginBottom: 20 }}>
        <Contact />
      </div>
    </div>
  );
}

const AboutSection = ({ heading, paragraph }) => {
  return (
    <div>
      <h3>{heading}</h3>
      <p>{paragraph}</p>
    </div>
  );
};
