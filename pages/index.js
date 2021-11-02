// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css, Global } from "@emotion/react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Editor from "@monaco-editor/react";
import React from "react";
import Select from "react-select";
import Toggle from "react-toggle";
import { Button, StyleSheet, Text, View, ScrollView } from "react-native-web";
import MyButton from "components/MyButton";
import NavBar from "components/NavBar";

import HelloSection from "components/HelloSection";
import Projects from "components/Projects";
import Skills from "components/Skills";

export default function Portfolio() {
  return (
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
      <NavBar />
      <div css={{ marginTop: 50 }}>
        <HelloSection />
      </div>
      <div css={{ marginTop: 150 }}>
        <div id="Projects">
          <Projects />
        </div>
      </div>
      <div css={{ marginTop: 150 }}>
        <div id="Skills">
          <Skills />
        </div>
      </div>
    </div>
  );
}
