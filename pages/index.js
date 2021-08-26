// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css, Global } from "@emotion/react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import profilePic from "../public/images/profile.jpg";
import Editor from "@monaco-editor/react";
import React from "react";
import Select from "react-select";
import Toggle from "react-toggle";
import { Button, StyleSheet, Text, View, ScrollView } from "react-native-web";
import MyButton from "components/MyButton";
import NavBar from "components/NavBar";

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
      }}
    >
      <NavBar />
      <View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            width={100}
            height={100}
            src={profilePic}
            alt="Picture of the author"
          />
          <Link href="/codegames">
            <a>Code Games</a>
          </Link>
        </View>
      </View>
    </View>
  );
}
