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
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlatList,
} from "react-native-web";
import MyButton from "components/MyButton";
import NavBar from "components/NavBar";
import Image from "next/image";
import profilePic from "../public/images/profile.jpg";
import country from "../public/images/americanFlag.jpg";

export default function Rankings() {
  const [rankingsData, setRankingsData] = React.useState(null);

  React.useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    let data = [
      {
        rank: 1,
        profilePicture: profilePic,
        name: "Bob",
        school: "Bob Jones University",
        country: country,
        points: 20345,
      },
      {
        rank: 2,
        profilePicture: profilePic,
        name: "Jim",
        school: "Bob Jones University",
        country: country,
        points: 20340,
      },
      {
        rank: 3,
        profilePicture: profilePic,
        name: "Kid",
        school: "Bob Jones University",
        country: country,
        points: 20320,
      },
    ];
    setRankingsData(data);
  }

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
      }}
    >
      <NavBar />
      <ScrollView style={{}}>
        {rankingsData?.map((item) => {
          return (
            <View
              style={{
                flexDirection: "row",
                height: 60,
                alignItems: "center",
                margin: 5,
              }}
            >
              <View style={{ flex: 0.5, alignItems: "center" }}>
                <Text>{item.rank}</Text>
              </View>
              <View style={{ flex: 0.5, alignItems: "center" }}>
                <Image src={item.profilePicture} width={50} height={50} />
              </View>
              <View style={{ flex: 3 }}>
                <Text>{item.name}</Text>
              </View>
              <View style={{ flex: 2, alignItems: "center" }}>
                <Text>{item.school}</Text>
              </View>
              <View style={{ flex: 1, alignItems: "center" }}>
                <Image src={item.country} width={50} height={50} />
              </View>
              <View style={{ flex: 1, alignItems: "center" }}>
                <Text>{item.points}</Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
