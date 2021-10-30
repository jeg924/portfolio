// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css, Global } from "@emotion/react";
import React from "react";

const themeFont = ["lato", "sans-serif"];

export default function NavBar() {
  return (
    <div
      css={{
        width: "100%",
        display: "flex",
        height: 80,
        position: "sticky",
        top: 0,
        left: 0,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between", // this wants to display all 4 items evenly
      }}
    >
      <a
        href="/"
        css={{
          marginRight: "auto", // this pushes 3 nav links as much to the right as possible
          textDecoration: "none",
          color: "#565656",

          fontWeight: "600",
          "&:hover": {
            color: "black",
            fontWeight: "bold",
          },
          "@media (max-width: 600px)": {
            display: "none",
          },
        }}
      >
        Portfolio
      </a>
      <NavLink text="Projects" href="#Porfolio" />
      <NavLink text="Skills" href="#Skills" />
      <NavLink text="About" href="#About" />
    </div>
  );
}

const NavLink = ({ href, text }) => {
  return (
    <a
      href={href}
      css={{
        textDecoration: "none",
        fontFamily: themeFont,
        color: "#565656",
        marginLeft: 100, // this pushes other nav links to the left
        "&:hover": {
          color: "black",
          fontWeight: "500",
        },
        "@media (max-width: 600px)": {
          marginLeft: 0, // this gets right of the pushing, allowing justify-content to space everything evenly again
        },
      }}
    >
      {text}
    </a>
  );
};
