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
  Modal,
} from "react-native-web";
import MyButton from "components/MyButton";
import NavBar from "components/NavBar";

export default function CodeGames() {
  const [modalIsVisible, setModalIsVisible] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [language, setLanguage] = React.useState("javascript");
  const [theme, setTheme] = React.useState("light");
  const [difficulty, setDifficulty] = React.useState("Medium");
  const [won, setWon] = React.useState(false);
  const [failed, setFailed] = React.useState(false);

  const difficultyLevels = [
    { value: "Easy", label: "Easy" },
    { value: "Medium", label: "Medium" },
    { value: "Hard", label: "Hard" },
  ];

  const themes = [
    { value: "light", label: "Light" },
    { value: "vs-dark", label: "Dark" },
  ];

  const languageOptions = [
    { value: "abap", label: "abab" },
    { value: "aes", label: "aes" },
    { value: "apex", label: "apex" },
    { value: "azcli", label: "azcli" },
    { value: "bat", label: "bat" },
    { value: "bicep", label: "bicep" },
    { value: "c", label: "c" },
    { value: "cameligo", label: "cameligo" },
    { value: "clojure", label: "clojure" },
    { value: "coffeescript", label: "coffeescript" },
    { value: "cpp", label: "cpp" },
    { value: "csharp", label: "csharp" },
    { value: "csp", label: "csp" },
    { value: "css", label: "css" },
    { value: "dart", label: "dart" },
    { value: "dockerfile", label: "dockerfile" },
    { value: "ecl", label: "ecl" },
    { value: "elixir", label: "elixer" },
    { value: "fsharp", label: "fsharp" },
    { value: "go", label: "go" },
    { value: "graphql", label: "graphql" },
    { value: "handlebars", label: "handlebars" },
    { value: "hcl", label: "hcl" },
    { value: "html", label: "html" },
    { value: "ini", label: "ini" },
    { value: "java", label: "java" },
    { value: "javascript", label: "javascript" },
    { value: "json", label: "json" },
    { value: "julia", label: "julia" },
    { value: "kotlin", label: "kotlin" },
    { value: "less", label: "less" },
    { value: "lexon", label: "lexon" },
    { value: "liquid", label: "liquid" },
    { value: "lua", label: "lua" },
    { value: "m3", label: "m3" },
    { value: "markdown", label: "markdown" },
    { value: "mips", label: "mips" },
    { value: "msdax", label: "msdax" },
    { value: "mysql", label: "mysql" },
    { value: "objective-c", label: "objective-c" },
    { value: "pascal", label: "pascal" },
    { value: "pascaligo", label: "pascaligo" },
    { value: "perl", label: "perl" },
    { value: "pgsql", label: "pgsql" },
    { value: "php", label: "php" },
    { value: "plaintext", label: "plaintext" },
    { value: "postiats", label: "postiats" },
    { value: "powerquery", label: "powerquery" },
    { value: "powershell", label: "powershell" },
    { value: "pug", label: "pug" },
    { value: "python", label: "python" },
    { value: "qsharp", label: "qsharp" },
    { value: "r", label: "r" },
    { value: "razor", label: "razor" },
    { value: "redis", label: "redis" },
    { value: "redshift", label: "redshift" },
    { value: "restucturedtext", label: "restucturedtext" },
    { value: "ruby", label: "ruby" },
    { value: "rust", label: "rust" },
    { value: "sb", label: "sb" },
    { value: "scala", label: "scala" },
    { value: "scheme", label: "scheme" },
    { value: "scss", label: "scss" },
    { value: "shell", label: "shell" },
    { value: "sol", label: "sol" },
    { value: "solidity", label: "solidity" },
    { value: "sophia", label: "sophia" },
    { value: "sparql", label: "sparql" },
    { value: "sql", label: "sql" },
    { value: "st", label: "st" },
    { value: "swift", label: "swift" },
    { value: "systemverilog", label: "systemverilog" },
    { value: "tcl", label: "tcl" },
    { value: "twig", label: "twig" },
    { value: "typescript", label: "typescript" },
    { value: "vb", label: "vb" },
    { value: "verilog", label: "verilog" },
    { value: "xml", label: "xml" },
    { value: "yaml", label: "yaml" },
  ];

  console.log(language);

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
      }}
    >
      <NavBar />
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View
          style={{
            flex: 1,
          }}
        >
          <ScrollView
            style={{
              flex: 1,
              margin: "5%",
            }}
          >
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 30, fontWeight: "bold" }}>Problem</Text>
              <ScrollView style={{ borderWidth: 1, borderColor: "black" }}>
                <Text>
                  over 2000 years old. Richard McClintock, a Latin professor at
                  Hampden-Sydney College in Virginia, looked up one of the more
                  obscure Latin words, consectetur, from a Lorem Ipsum passage,
                  and going through the cites of the word in classical
                  literature, discovered the undoubtable source. Lorem Ipsum
                  comes from sections 1.10.32 and 1.10.3
                </Text>
              </ScrollView>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 30, fontWeight: "bold" }}>Input</Text>
              <ScrollView style={{ borderWidth: 1, borderColor: "black" }}>
                <Text>
                  over 2000 years old. Richard McClintock, a Latin professor at
                  Hampden-Sydney College in Virginia, looked up one of the more
                  obscure Latin words, consectetur, from a Lorem Ipsum passage,
                  and going through the cites of the word in classical
                  literature, discovered the undoubtable source. Lorem Ipsum
                  comes from sections 1.10.32 and 1.10.3
                </Text>
              </ScrollView>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 30, fontWeight: "bold" }}>
                Restrictions
              </Text>
              <ScrollView style={{ borderWidth: 1, borderColor: "black" }}>
                <Text>
                  ng it over 2000 years old. Richard McClintock, a Latin
                  professor at Hampden-Sydney College in Virginia, looked up one
                  of the more obscure Latin words, consectetur, from a Lorem
                  Ipsum passage, and going through the cites of the word in
                  classical literature, discovered the undoubtable source. Lorem
                  Ipsum comes from sections 1.10.32 and 1.10.3
                </Text>
              </ScrollView>
            </View>
            <View style={{ flex: 1 }}>
              <View>
                <label for="difficulty">difficulty</label>
                <select
                  id="difficulty"
                  onChange={(event) => {
                    setDifficulty(event.target.value);
                  }}
                  value={difficulty}
                >
                  {difficultyLevels.map((difficulty) => {
                    return (
                      <option value={difficulty.value}>
                        {difficulty.label}
                      </option>
                    );
                  })}
                </select>
              </View>
              <View>
                <label for="language">Language</label>
                <select
                  id="language"
                  onChange={(event) => {
                    setLanguage(event.target.value);
                  }}
                  value={language}
                >
                  {languageOptions.map((language) => {
                    return (
                      <option value={language.value}>{language.label}</option>
                    );
                  })}
                </select>
              </View>
              <View>
                <label for="theme">Theme</label>
                <select
                  id="theme"
                  onChange={(event) => {
                    setTheme(event.target.value);
                  }}
                  value={theme}
                >
                  {themes.map((theme) => {
                    return <option value={theme.value}>{theme.label}</option>;
                  })}
                </select>
              </View>
              <View>
                <MyButton
                  title="Play"
                  onPress={() => {
                    setWon(false);
                    setFailed(false);
                    let random = Math.floor(Math.random() * 2);
                    if (random === 0) {
                      setFailed(true);
                    } else {
                      setWon(true);
                    }
                    setModalIsVisible(true);
                  }}
                />
              </View>
            </View>
          </ScrollView>
        </View>
        <View style={{ flex: 4 }}>
          <Editor
            defaultValue="// Place your code here"
            language={language}
            theme={theme}
          />
        </View>
      </View>
      <Modal
        animationType="slide"
        onRequestClose={() => setModalIsVisible(false)}
        visible={modalIsVisible}
        transparent
      >
        <View
          style={{
            flex: 1,
            margin: "10%",
            flexDirection: "column",
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>
            {!won && !failed
              ? "Problem"
              : !won && failed
              ? "Try again"
              : "You win!"}
          </Text>
          <ScrollView style={{ borderWidth: 1, borderColor: "black" }}>
            <Text>
              over 2000 years old. Richard McClintock, a Latin professor at
              Hampden-Sydney College in Virginia, looked up one of the more
              obscure Latin words, consectetur, from a Lorem Ipsum passage, and
              going through the cites of the word in classical literature,
              discovered the undoubtable source. Lorem Ipsum comes from sections
              1.10.32 and 1.10.3
            </Text>
          </ScrollView>
          <View>
            <label for="language">Language</label>
            <select
              id="language"
              onChange={(event) => {
                setLanguage(event.target.value);
              }}
              value={language}
            >
              {languageOptions.map((language) => {
                return <option value={language.value}>{language.label}</option>;
              })}
            </select>
          </View>
          <Button
            onPress={() => {
              setModalIsVisible(false);
            }}
            title={
              !won && !failed ? "Start" : !won && failed ? "Back" : "Continue"
            }
          />
        </View>
      </Modal>
    </View>
  );
}
