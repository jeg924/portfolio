// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import React, { useEffect, useState } from "react";

export default function NavBar() {
  const [borderVisible, setBorderVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const shouldBorderBeVisible = window.scrollY > 50;
      if (shouldBorderBeVisible !== borderVisible) {
        setBorderVisible(shouldBorderBeVisible);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [borderVisible]);

  return (
    <div
      css={{
        zIndex: 1000,
        position: "sticky",
        top: 0,
        left: 0,
        backgroundColor: "white",
        borderBottomWidth: 1,
        borderBottomColor: borderVisible ? "gainsboro" : "transparent",
        borderBottomStyle: "solid",
      }}
    >
      <div
        css={{
          position: "relative",
          width: "100%",
          maxWidth: 1080,
          paddingLeft: 20,
          paddingRight: 20,
          marginLeft: "auto",
          marginRight: "auto",
          display: "flex",
          height: 50,
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
          James Gonzales
        </a>
        <NavLink text="Projects" href="#Projects" />
        <NavLink text="Skills" href="#Skills" />
        <NavLink text="About" href="#About" />
      </div>
    </div>
  );
}

const NavLink = ({ href, text }) => {
  return (
    <a
      href={href}
      css={{
        textDecoration: "none",
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
