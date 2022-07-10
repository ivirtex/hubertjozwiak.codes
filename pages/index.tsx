// @ts-check
import React from "react";

import Head from "next/head";
import Link from "next/link";

import Emoji from "../components/Emoji";
import InteractiveCard from "../components/InteractiveCard";
import Layout from "../components/Layout";
import Title from "../components/Title";

export default function Home() {
  return (
    <Layout showAnimatedBg>
      <Head>
        <title>Hubert Jóźwiak</title>
        <meta name="description" content="portfolio of software developer" />
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

      <div className="space-y-3">
        <Link href="/about" passHref>
          <button className="w-full">
            <InteractiveCard>About</InteractiveCard>
          </button>
        </Link>
        <Link href="/projects" passHref>
          <button className="w-full">
            <InteractiveCard>Projects</InteractiveCard>
          </button>
        </Link>
        <Link href="/contact" passHref>
          <button className="w-full">
            <InteractiveCard>Contact</InteractiveCard>
          </button>
        </Link>
      </div>
    </Layout>
  );
}
