// @ts-check
import Head from "next/head";
import Link from "next/link";

import Card from "../components/card";
import ColorCircles from "../components/colorCircles";
import Emoji from "../components/emoji";
import Layout from "../components/layout";
import Title from "../components/title";

export default function Home() {
  return (
    <Layout>
      <ColorCircles />
      <Head>
        <title>Hubert Jóźwiak</title>
        <meta name="description" content="portfolio of software engineer" />
      </Head>

      <Title>
        Hi, I&apos;m Hubert! <Emoji symbol="👋" label="waving hand" />
      </Title>

      <div className="mb-4 text-xl sm:text-2xl">
        <p>Welcome to my website!</p>
        <p>
          I&apos;m software developer interested in software engineering and
          mobile applications development.
        </p>
      </div>

      <Link href="/about" passHref>
        <button className="w-full">
          <Card>About</Card>
        </button>
      </Link>
      {/* <Link href="/blog" passHref>
        <button className="w-full">
          <Card>Blog</Card>
        </button>
      </Link> */}
      <Link href="/projects" passHref>
        <button className="w-full">
          <Card>Projects</Card>
        </button>
      </Link>
      <Link href="/contact" passHref>
        <button className="w-full">
          <Card>Contact</Card>
        </button>
      </Link>
    </Layout>
  );
}
