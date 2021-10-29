// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css, Global } from "@emotion/react";
import React from "react";

const themeFont = ["lato", "sans-serif"];

export default function NavBar() {
  const [projectsHovering, setProjectsHovering] = React.useState(false);
  const [skillsHovering, setSkillsHovering] = React.useState(false);
  const [aboutHovering, setAboutHovering] = React.useState(false);

  return (
    <div
      css={{
        display: "flex",
        height: 80,
        flexDirection: "row",
      }}
    >
      <div
        css={{
          flex: 1.5,
          display: "flex",
          alignItems: "center",
          paddingLeft: "10%",
          "@media only screen and (max-width: 600px)": {
            display: "none",
          },
        }}
      >
        <text css={{ fontFamily: themeFont, fontWeight: "bold" }}>
          Portfolio
        </text>
      </div>
      <div
        css={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          css={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a href="#Projects" css={{ textDecoration: "none" }}>
            <text
              css={{
                fontFamily: themeFont,
                color: "#565656",
                "&:hover": { color: "black", fontWeight: "500" },
              }}
            >
              Projects
            </text>
          </a>
        </div>
        <div
          css={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a href="#Skills" css={{ textDecoration: "none" }}>
            <text
              css={{
                fontFamily: themeFont,
                color: "#565656",
                "&:hover": { color: "black", fontWeight: "500" },
              }}
            >
              Skills
            </text>
          </a>
        </div>
        <div
          css={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <a href="#About" css={{ textDecoration: "none" }}>
            <text
              css={{
                fontFamily: themeFont,
                color: "#565656",
                "&:hover": { color: "black", fontWeight: "500" },
              }}
            >
              About
            </text>
          </a>
        </div>
      </div>
    </div>
  );
}
