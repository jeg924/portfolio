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

export default function Home() {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
      }}
    >
      <div>
        <Text>Hello</Text>
      </div>
    </View>
  );
}
