// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css, Global } from "@emotion/react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import codePuzzlePic from "../public/images/codepuzzle.png";
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
      <ScrollView
        style={{
          flex: 1,
          marginLeft: "2%",
          marginRight: "2%",
          marginBottom: "2%",
        }}
      >
        <View style={{ height: 20 }}></View>
        <View style={{ width: 100, height: 100 }}>
          <Image
            width="100%"
            height="100%"
            src={codePuzzlePic}
            alt="Picture of the author"
          />
        </View>
        <Link href="/codegames">
          <a>Puzzle of the day</a>
        </Link>
        <View>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            dictum hendrerit ipsum quis hendrerit. Proin at tortor risus. Donec
            iaculis leo quis lorem sollicitudin elementum. Suspendisse non
            luctus elit, ac egestas nunc. Fusce molestie tellus at magna
            sodales, id scelerisque dui sagittis. Nullam consequat tempor dui
            vel semper. Suspendisse potenti. Nunc facilisis a nisl non
          </p>
          <p>
            convallis. Etiam iaculis sem nulla, sit amet laoreet erat cursus
            vel. Nulla sagittis erat eu velit pellentesque congue. Nulla arcu
            risus, sagittis et tempus ut, tincidunt sit amet purus. Aenean
            ornare augue aliquam purus consequat, id ultricies orci auctor.
            Vivamus consectetur diam et sem hendrerit hendrerit. Fusce et
            aliquam ligula. Cras ex nulla, tempor id mattis quis, aliquet sit
            amet magna. In hac habitasse platea dictumst. Pellentesque quis
            sapien velit. Nunc eu nulla eget urna bibendum dapibus ut a arcu.
            Nullam feugiat, eros ut commodo hendrerit, tellus tortor malesuada
            mi, in suscipit nisi magna sed metus. Ut tincidunt augue imperdiet
            tortor pellentesque, nec vehicula erat ultricies. Nulla facilisi.
            Morbi pulvinar elit vel sollicitudin finibus. Aliquam molestie
            varius ipsum, at vehicula justo ullamcorper eget. Ut suscipit nunc
            ut nisl accumsan feugiat. Curabitur in diam urna. Fusce sit amet
            placerat purus. Donec malesuada mauris vel aliquam pulvinar. Fusce
            porta ipsum ut sapien imperdiet, non maximus odio pulvinar. Integer
            in faucibus diam. Nullam vestibulum elit nisi, a lobortis nisi
            tempus nec. Praesent imperdiet est dui, in semper nulla bibendum eu.
            Donec eget orci eu mi porta dapibus. Donec molestie maximus rhoncus.
            Ut tortor leo, ultrices et rutrum eget, vulputate a nibh. Vestibulum
            laoreet at risus eget sagittis. Nullam blandit felis et tellus
            finibus, sit amet varius felis ullamcorper. Aenean auctor
          </p>
          <p>
            ullamcorper pellentesque. Aliquam id tellus vel lorem consequat
            molestie. Sed eu metus sem. Phasellus eget molestie sem. Etiam quis
            sollicitudin nibh. Sed hendrerit auctor euismod. Aliquam scelerisque
            rutrum lacus id maximus. Nunc cursus non nisi eget pellentesque.
            Donec quis mollis enim. Pellentesque lacinia, diam sit amet commodo
            posuere, velit odio sollicitudin massa, non feugiat augue sapien ut
            odio. Vivamus nibh sapien, viverra quis ultricies scelerisque,
            egestas ac ante. Proin eleifend enim at nibh cursus, eget viverra
            diam pharetra. Etiam dignissim egestas felis vitae mollis. Praesent
            vel ligula tristique, scelerisque ligula et, ultrices eros. Donec
            ultricies risus vel ligula vestibulum eleifend. Nullam in interdum
            enim. Sed nec sapien velit. Vivamus at arcu volutpat, elementum
            ipsum euismod, laoreet mi. Vivamus et mauris ac dui ultrices
            aliquam. Nulla non sapien sed urna imperdiet tempus non at lorem.
            Mauris id aliquam dui, nec gravida nulla. Nunc eget turpis mauris.
            Etiam congue ut leo vitae consectetur. In nibh quam, aliquet vel
            bibendum eu, ullamcorper a lectus. Vivamus ac facilisis nunc.
            Curabitur pretium tellus at enim dignissim, id rhoncus ante
            tincidunt. Quisque tempus sem ac viverra euismod. Praesent laoreet,
            nunc eget pharetra eleifend, libero quam aliquet magna, eu facilisis
            augue sapien sed enim. Donec congue odio tempus ipsum pharetra
            congue. Vivamus nulla nisi, congue quis fringilla in, ullamcorper a
            nibh.
          </p>
        </View>
      </ScrollView>
    </View>
  );
}
