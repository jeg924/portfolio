import { TouchableOpacity, Text, Button, View } from "react-native-web";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { AiFillHome } from "react-icons/ai";
import { GiUpgrade } from "react-icons/gi";
import { IoMdBuild, IoMdLogIn } from "react-icons/io";
import { RiLoginCircleFill } from "react-icons/ri";
import { GiRobotGolem } from "react-icons/gi";

// #0096FF: Bright blue

export default function NavBar() {
  const router = useRouter();
  const [homeHovering, setHomeHovering] = React.useState(false);
  const [rankingsHovering, setRankingsHovering] = React.useState(false);
  const [codeGamesHovering, setCodeGamesHovering] = React.useState(false);
  const [loginHovering, setLoginHovering] = React.useState(false);

  return (
    <View
      style={{
        flexDirection: "row",
        height: 50,
        marginTop: 0,
        borderBottomWidth: 1,
        backgroundColor: "black",
      }}
    >
      <View style={{ flex: 0.5 }}></View>
      <View
        style={{
          flex: 4,
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <GiRobotGolem style={{ width: 30, height: 30, color: "white" }} />
        <Text
          style={{
            fontSize: 30,
            fontFamily: "helvetica",
            fontWeight: "bold",
            fontStyle: "italic",
            color: "white",
          }}
        >
          {" "}
          Game CMS
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onMouseEnter={() => {
            setHomeHovering(true);
          }}
          onMouseLeave={() => {
            setHomeHovering(false);
          }}
          onPress={() => {
            router.push("/");
          }}
          style={{
            flex: 0.8,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: router.pathname === "/" ? "#0096FF" : "black",
            borderRadius: 20,
            width: "80%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              borderBottomWidth: router.pathname === "/" ? 0 : 2,
              borderBottomColor: homeHovering ? "white" : "black",
            }}
          >
            <Text style={{ color: "white" }}>Home</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          onMouseEnter={() => {
            setRankingsHovering(true);
          }}
          onMouseLeave={() => {
            setRankingsHovering(false);
          }}
          onPress={() => {
            router.push("/rankings");
          }}
          style={{
            flex: 0.8,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor:
              router.pathname === "/rankings" ? "#0096FF" : "black",
            borderRadius: 20,
            width: "80%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              borderBottomWidth: router.pathname === "/rankings" ? 0 : 2,
              borderBottomColor: rankingsHovering ? "white" : "black",
            }}
          >
            <Text style={{ color: "white" }}>Rankings</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          onMouseEnter={() => {
            setCodeGamesHovering(true);
          }}
          onMouseLeave={() => {
            setCodeGamesHovering(false);
          }}
          onPress={() => {
            router.push("/codegames");
          }}
          style={{
            flex: 0.8,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor:
              router.pathname === "/codegames" ? "#0096FF" : "black",
            borderRadius: 20,
            width: "80%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              borderBottomWidth: router.pathname === "/codegames" ? 0 : 2,
              borderBottomColor: codeGamesHovering ? "white" : "black",
            }}
          >
            <Text style={{ color: "white" }}>Code Games</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          onMouseEnter={() => {
            setLoginHovering(true);
          }}
          onMouseLeave={() => {
            setLoginHovering(false);
          }}
          onPress={() => {
            router.push("/login");
          }}
          style={{
            flex: 0.8,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: router.pathname === "/login" ? "#0096FF" : "black",
            borderRadius: 20,
            width: "80%",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              borderBottomWidth: router.pathname === "/login" ? 0 : 2,
              borderBottomColor: loginHovering ? "white" : "black",
            }}
          >
            <Text style={{ color: "white" }}>Login</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
