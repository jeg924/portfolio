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
  TouchableOpacity,
} from "react-native-web";
import { MdAccountCircle } from "react-icons/md";
import { GiRobotGolem } from "react-icons/gi";
import MyButton from "components/MyButton";
import NavBar from "components/NavBar";

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
      <NavBar />
      <View
        style={{
          flex: 1,
        }}
      >
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1 }}></View>
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
          <View style={{ flex: 1 }}></View>
        </View>
        <View style={{ flex: 3, flexDirection: "row" }}>
          <View style={{ flex: 1 }}></View>
          <View
            style={[
              {
                flex: 0.8,
                borderWidth: 1,
                borderColor: "black",
              },
              {
                shadowOffset: {
                  width: 10,
                  height: 10,
                },
                shadowOpacity: 0.1,
                shadowRadius: 10,
              },
            ]}
          >
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setSignIn(true);
                  setSignUp(false);
                }}
              >
                <Text
                  style={{ fontSize: 30, color: signIn ? "blue" : "black" }}
                >
                  Sign in
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setSignUp(true);
                  setSignIn(false);
                }}
              >
                <Text
                  style={{ fontSize: 30, color: signUp ? "blue" : "black" }}
                >
                  Sign up
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 4 }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <MdAccountCircle style={{ width: 60, height: 60 }} />
              </View>
              <View
                style={{
                  flex: 3,
                }}
              >
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <View style={{ flex: 1 }}></View>
                  <View style={{ flex: 1 }}></View>
                  <View style={{ flex: 1 }}></View>
                </View>
                <View style={{ flex: 4, flexDirection: "row" }}>
                  <View style={{ flex: 1 }}></View>
                  <View style={{ justifyContent: "space-around" }}>
                    <TextInput
                      placeholder="email"
                      style={{
                        borderWidth: 1,
                        padding: 6,
                      }}
                    />
                    <TextInput
                      placeholder="password"
                      style={{
                        borderWidth: 1,
                        padding: 6,
                      }}
                    />
                    <MyButton title="Go" onPress={() => {}} />
                  </View>
                  <View style={{ flex: 1 }}></View>
                </View>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <View style={{ flex: 1 }}></View>
                  <View style={{ flex: 1 }}></View>
                  <View style={{ flex: 1 }}></View>
                </View>
              </View>
            </View>
          </View>
          <View style={{ flex: 1 }}></View>
        </View>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ flex: 1 }}></View>
          <View style={{ flex: 1 }}></View>
          <View style={{ flex: 1 }}></View>
        </View>
      </View>
    </View>
  );
}
