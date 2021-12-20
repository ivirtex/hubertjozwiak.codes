import Head from "next/head";
import Link from "next/link";
import Card from "../components/card";

export default function Home() {
  return (
    <div className="max-w-2xl m-auto py-10">
      <Head>
        <title>Hubert Jóźwiak</title>
        <meta name="description" content="portfolio of software engineer" />
      </Head>
      <div className="font-bold text-3xl ">Hi, I&apos;m Hubert! 👋</div>
      <div className="my-4 text-lg">
        <p>Welcome to my website!</p>
        <p>
          I am interested in software engineering, especially in mobile
          applications development.
        </p>
      </div>

      <Link href="/projects" passHref>
        <button className="w-full">
          <Card>Projects</Card>
        </button>
      </Link>
      <Link href="/blog" passHref>
        <button className="w-full">
          <Card>Blog</Card>
        </button>
      </Link>
    </div>
  );
}
