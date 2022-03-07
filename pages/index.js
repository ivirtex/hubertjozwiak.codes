// @ts-check
import Head from "next/head";
import Link from "next/link";

import Card from "../components/card";
import Emoji from "../components/emoji";
import Layout from "../components/layout";

export default function Home() {
  return (
    <Layout>
      <div className="m-auto max-w-2xl">
        <Head>
          <title>Hubert Jóźwiak</title>
          <meta name="description" content="portfolio of software engineer" />
        </Head>
        <div className="text-3xl font-bold">
          Hi, I&apos;m Hubert! <Emoji symbol="👋" label="waving hand" />
        </div>
        <div className="my-4 text-lg">
          <p>Welcome to my website!</p>
          <p>
            I am interested in software engineering, especially in mobile
            applications development.
          </p>
        </div>

        <Link href="/about" passHref>
          <button className="w-full">
            <Card>About</Card>
          </button>
        </Link>
        <Link href="/blog" passHref>
          <button className="w-full">
            <Card>Blog</Card>
          </button>
        </Link>
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
      </div>
    </Layout>
  );
}
