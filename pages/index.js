import { jsx, css } from "@emotion/react";
import Head from "next/head";
import Link from "next/link";
import Editor from "@monaco-editor/react";
import React from "react";

export default function Home() {
  const [language, setLanguage] = React.useState("javascript");
  const languageOptions = [
    "abap",
    "apex",
    "azcli",
    "bat",
    "bicep",
    "cameligo",
    "clojure",
    "coffee",
    "cpp",
    "csharp",
    "csp",
    "css",
    "dart",
    "dockerfile",
    "ecl",
    "elixir",
    "fillers",
    "fsharp",
    "go",
    "graphql",
    "handlebars",
    "hcl",
    "html",
    "ini",
    "java",
    "javascript",
    "julia",
    "kotlin",
    "less",
    "lexon",
    "liquid",
    "lua",
    "m3",
    "markdown",
    "mips",
    "msdax",
    "mysql",
    "objective-c",
    "pascal",
    "pascaligo",
    "perl",
    "pgsql",
    "php",
    "postiats",
    "powerquery",
    "powershell",
    "pug",
    "python",
    "qsharp",
    "r",
    "razor",
    "redis",
    "redshift",
    "restucturedtext",
    "ruby",
    "rust",
    "sb",
    "scala",
    "scheme",
    "scss",
    "shell",
    "solidity",
    "sophia",
    "sparql",
    "sql",
    "st",
    "swift",
    "systemverilog",
    "tcl",
    "test",
    "twig",
    "typescript",
    "vb",
    "xml",
    "yaml",
  ];
  const style = css`
    color: hotpink;
  `;

  return (
    <div>
      <div css={{ color: "red" }}>
        <p>feeffiefiififii</p>
      </div>
      <div className="container">
        <Head>
          <title>Create Next App</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main>
          <h1 css={style}>
            Read{" "}
            <Link href="/posts/first-post">
              <a>this page!</a>
            </Link>
          </h1>

          <Editor
            height="90vh"
            language={language}
            defaultValue="// some comment"
          />
          <div className="grid">
            <a href="https://nextjs.org/docs" className="card">
              <h3>Documentation &rarr;</h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className="card">
              <h3>Learn &rarr;</h3>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/master/examples"
              className="card"
            >
              <h3>Examples &rarr;</h3>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className="card"
            >
              <h3>Deploy &rarr;</h3>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main>

        <footer>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by <img src="/vercel.svg" alt="Vercel" className="logo" />
          </a>
        </footer>
      </div>
    </div>
  );
}
