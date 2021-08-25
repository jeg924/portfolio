import { TouchableOpacity, Text, Button, View } from "react-native-web";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/router";
import { AiFillHome } from "react-icons/ai";
import { GiUpgrade } from "react-icons/gi";
import { IoMdBuild, IoMdLogIn } from "react-icons/io";
import { ioMdLogIn } from "react-icons/io";
import { RiLoginCircleFill } from "react-icons/ri";

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
      }}
    >
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
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
        >
          <View
            style={{
              flexDirection: "row",
              borderBottomWidth: 2,
              borderBottomColor: homeHovering ? "blue" : "white",
            }}
          >
            <Text>Home </Text>
            <AiFillHome />
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
        >
          <View
            style={{
              flexDirection: "row",
              borderBottomWidth: 2,
              borderBottomColor: rankingsHovering ? "blue" : "white",
            }}
          >
            <Text>Rankings </Text>
            <GiUpgrade />
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
        >
          <View
            style={{
              flexDirection: "row",
              borderBottomWidth: 2,
              borderBottomColor: codeGamesHovering ? "blue" : "white",
            }}
          >
            <Text>Code Games </Text>
            <IoMdBuild />
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
        >
          <View
            style={{
              flexDirection: "row",
              borderBottomWidth: 2,
              borderBottomColor: loginHovering ? "blue" : "white",
            }}
          >
            <Text>Login </Text>
            <RiLoginCircleFill />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
