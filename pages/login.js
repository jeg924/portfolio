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
  const [signUpHovering, setSignUpHovering] = React.useState(false);
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
        <View style={{ flex: 5, flexDirection: "row" }}>
          <View style={{ flex: 1 }}></View>
          <View
            style={[
              {
                flex: 0.8,
                borderWidth: 1,
                borderColor: "black",
                borderRadius: 15,
                backgroundColor: "black",
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
              <Text
                style={{ fontSize: 30, fontWeight: "bold", color: "white" }}
              >
                {signUp ? "Register" : "Login"}
              </Text>
            </View>
            <View style={{ flex: 4 }}>
              <View
                style={{
                  flex: 1,
                }}
              >
                <View style={{ flex: 0.5, flexDirection: "row" }}>
                  <View style={{ flex: 1 }}></View>
                  <View style={{ flex: 1 }}></View>
                  <View style={{ flex: 1 }}></View>
                </View>
                <View style={{ flex: 5, flexDirection: "row" }}>
                  <View style={{ flex: 1 }}></View>
                  <View style={{ flex: 2.5 }}>
                    {signUp ? (
                      <View style={{ flex: 1 }}>
                        <Text style={{ color: "white", fontSize: 10 }}>
                          Email
                        </Text>
                        <TextInput
                          placeholder=" Email"
                          style={{
                            backgroundColor: "white",
                            borderWidth: 1,
                            padding: 6,
                            borderColor: "#0096FF",
                            borderWidth: 2,
                            borderRadius: 20,
                          }}
                        />
                      </View>
                    ) : (
                      <View style={{ flex: 1 }}></View>
                    )}
                    <View style={{ flex: 1 }}>
                      <Text style={{ color: "white", fontSize: 10 }}>
                        Username
                      </Text>
                      <TextInput
                        placeholder=" Username"
                        style={{
                          backgroundColor: "white",
                          borderWidth: 1,
                          padding: 6,
                          borderColor: "#0096FF",
                          borderWidth: 2,
                          borderRadius: 20,
                        }}
                      />
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text style={{ color: "white", fontSize: 10 }}>
                        Password
                      </Text>
                      <TextInput
                        placeholder=" Password"
                        style={{
                          backgroundColor: "white",
                          borderWidth: 1,
                          padding: 6,
                          borderColor: "#0096FF",
                          borderWidth: 2,
                          borderRadius: 20,
                        }}
                      />
                    </View>
                    <View style={{ flex: 1 }}>
                      <MyButton
                        title={signUp ? "Register" : "Login"}
                        onPress={() => {}}
                      />
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "space-around",
                        }}
                      >
                        <Text style={{ color: "white", fontSize: 10 }}>
                          {signUp
                            ? "Already have an account?"
                            : "Don't have an account yet?"}
                        </Text>
                        <TouchableOpacity
                          onMouseEnter={() => {
                            setSignUpHovering(true);
                          }}
                          onMouseLeave={() => {
                            setSignUpHovering(false);
                          }}
                          onPress={() => {
                            setSignUp(!signUp);
                          }}
                        >
                          <Text
                            style={{
                              color: "#0096FF",
                              fontSize: 10,
                              borderBottomWidth: signUpHovering ? 2 : 0,
                              borderBottomColor: "white",
                            }}
                          >
                            {signUp ? "Sign In" : "Sign up"}
                          </Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                  <View style={{ flex: 1 }}></View>
                </View>
                <View style={{ flex: 0.5, flexDirection: "row" }}>
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
