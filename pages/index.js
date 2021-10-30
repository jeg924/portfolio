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

import Carousel from "nuka-carousel";
import {
  SiAlgolia,
  SiFirebase,
  SiReact,
  SiVisualstudio,
  SiGithub,
} from "react-icons/si";
import HelloSection from "components/HelloSection";

// images

export default function Portfolio() {
  return (
    <div
      css={{
        position: "relative",
        width: "100%",
        maxWidth: 1080,
        paddingLeft: 30,
        paddingRight: 30,
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <NavBar />
      <div css={{ marginTop: 50 }}>
        <HelloSection />
      </div>
    </div>
  );
}
