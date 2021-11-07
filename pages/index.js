// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from "@emotion/react";
import NavBar from "components/NavBar";
import HelloSection from "components/HelloSection";
import Projects from "components/Projects";
import Skills from "components/Skills";
import About from "components/About";

export default function Portfolio() {
  return (
    <div>
      <NavBar />
      <div
        css={{
          position: "relative",
          width: "100%",
          maxWidth: 1080,
          paddingLeft: 40,
          paddingRight: 40,
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <HelloSection />
        <Projects />
        <Skills />
        <About />
      </div>
    </div>
  );
}
