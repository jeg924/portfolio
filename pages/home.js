// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, css } from "@emotion/react";
import Link from "next/link";
import Head from "next/head";

export default function FirstPost() {
  return (
    <div
      css={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
      }}
    >
      <Head>
        <title>First Post</title>
      </Head>
      <h1 css={{ color: "red" }}>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </div>
  );
}
