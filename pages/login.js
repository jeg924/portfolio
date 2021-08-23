// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css, Global } from "@emotion/react";
import Head from "next/head";
import Link from "next/link";
import Editor from "@monaco-editor/react";
import React from "react";
import Select from "react-select";
import Toggle from "react-toggle";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native-web";
import MyButton from "components/MyButton";

export default function Login() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "green",
        flexDirection: "column",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "yellow",
          height: 50,
          marginTop: 0,
        }}
      >
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Link href="/">
            <a>Home</a>
          </Link>
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Link href="/rankings">
            <a>Rankings</a>
          </Link>
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Link href="/codegames">
            <a>Code Games</a>
          </Link>
        </View>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Link href="/login">
            <a>Login</a>
          </Link>
        </View>
      </View>
      <View></View>
    </View>
  );
}
