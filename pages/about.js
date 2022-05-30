import Head from "next/head";
import Link from "next/link";

import Layout from "../components/layout";
import Title from "../components/title";

// @ts-check
export default function About() {
  const swiftUI = "https://developer.apple.com/xcode/swiftui/";
  const flutter = "https://flutter.dev/";
  const github = "https://github.com/ivirtex";

  return (
    <Layout>
      <Head>
        <title>About me</title>
      </Head>

      <Title>About me</Title>

      <div className="text-lg">
        <p>
          As you probably saw on the main page, my name is Hubert, but people on
          the Internet call me <b>ivirtex</b>. I am 18 years old software
          developer from Poland.
        </p>

        <p>
          <br /> I mostly work on mobile apps using{" "}
          <a href={swiftUI} target="_blank" rel="noreferrer" className="link">
            SwiftUI
          </a>{" "}
          and{" "}
          <a href={flutter} target="_blank" rel="noreferrer" className="link">
            Flutter
          </a>
          , but I am also interested in reverse engineering and graphic, UI, UX
          design.
          <br />
          <br />
        </p>

        <p>
          I love open-source software and I am always looking for new projects
          to contribute to. Helping others with their programming problems
          brings me also a lot of joy and fun!
        </p>

        <p>
          <br /> Feel free to reach out to me on{" "}
          <Link href="/contact" passHref>
            <a className="link">/contact</a>
          </Link>{" "}
          and check out my{" "}
          <a href={github} target="_blank" rel="noreferrer" className="link">
            GitHub
          </a>{" "}
          profile to see what I am working on!
        </p>
      </div>
    </Layout>
  );
}
