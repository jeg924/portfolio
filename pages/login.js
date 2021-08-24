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
  TextInput,
} from "react-native-web";
import { MdAccountCircle } from "react-icons/md";
import { GiRobotGolem } from "react-icons/gi";
import MyButton from "components/MyButton";

export default function Login() {
  const [signIn, setSignIn] = React.useState(true);
  const [signUp, setSignUp] = React.useState(false);

  async function loginWithEmailAndPassword() {}

  async function createAnAccountWithEmailAndPassword() {}

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
      }}
    >
      <View
        style={{
          flexDirection: "row",
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
      <View
        style={{
          flex: 1,
        }}
      >
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1, backgroundColor: "brown" }}></View>
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <GiRobotGolem style={{ width: 30, height: 30 }} />
            <Text
              style={{
                fontSize: 30,
                fontFamily: "helvetica",
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              {" "}
              Game CMS
            </Text>
          </View>
          <View style={{ flex: 1, backgroundColor: "brown" }}></View>
        </View>
        <View style={{ flex: 3, flexDirection: "row" }}>
          <View style={{ flex: 1, backgroundColor: "orange" }}></View>
          <View
            style={{
              flex: 1.5,
              backgroundColor: "blue",
              borderWidth: 1,
              borderColor: "black",
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                backgroundColor: "cyan",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 30 }}>Sign In</Text>
              <Text style={{ fontSize: 30 }}>Sign Up</Text>
            </View>
            <View style={{ flex: 4, backgroundColor: "white" }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MdAccountCircle style={{ width: 50, height: 50 }} />
              </View>
              <View
                style={{
                  flex: 3,
                  backgroundColor: "tan",
                }}
              >
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <View style={{ flex: 1, backgroundColor: "brown" }}></View>
                  <View style={{ flex: 1 }}></View>
                  <View style={{ flex: 1, backgroundColor: "brown" }}></View>
                </View>
                <View style={{ flex: 4, flexDirection: "row" }}>
                  <View style={{ flex: 1, backgroundColor: "brown" }}></View>
                  <View style={{ justifyContent: "space-around" }}>
                    <TextInput
                      placeholder="email"
                      style={{
                        backgroundColor: "white",
                        borderWidth: 1,
                        padding: 6,
                      }}
                    />
                    <TextInput
                      placeholder="password"
                      style={{
                        backgroundColor: "white",
                        borderWidth: 1,
                        padding: 6,
                      }}
                    />
                    <MyButton title="Go" onPress={() => {}} />
                  </View>
                  <View style={{ flex: 1, backgroundColor: "brown" }}></View>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <View style={{ flex: 1, backgroundColor: "brown" }}></View>
                  <View style={{ flex: 1 }}></View>
                  <View style={{ flex: 1, backgroundColor: "brown" }}></View>
                </View>
              </View>
            </View>
          </View>
          <View style={{ flex: 1, backgroundColor: "red" }}></View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1, backgroundColor: "brown" }}></View>
          <View style={{ flex: 1 }}></View>
          <View style={{ flex: 1, backgroundColor: "brown" }}></View>
        </View>
      </View>
    </View>
  );
}
