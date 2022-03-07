import fs from "fs";
import path from "path";

import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import Link from "next/link";

import Card from "../../components/card";
import Layout from "../../components/layout";

export default function PostPage({
  frontMatter: { title, date, cover_image },
  slug,
  mdxSource,
}) {
  return (
    <Layout>
      <div className="m-auto max-w-3xl">
        <Head>
          <title>{title}</title>
        </Head>
        <Link href="/blog" passHref>
          <button className="w-max">
            <Card>Go back</Card>
          </button>
        </Link>
        <div className="pb-4 text-3xl font-bold">{title}</div>
        <div className="text-gray-600 dark:text-gray-200">{date}</div>
        <article className="prose prose-invert py-4">
          <MDXRemote {...mdxSource} />
        </article>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".mdx"),
    "utf8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
}
