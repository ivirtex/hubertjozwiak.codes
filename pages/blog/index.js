// @ts-check
import fs from "fs";
import path from "path";

import matter from "gray-matter";
import Head from "next/head";

import Layout from "../../components/layout";
import Post from "../../components/post";
import { sortByDate } from "../../utils/sortByDate";

export default function Blog({ posts }) {
  return (
    <Layout>
      <div className="m-auto max-w-2xl">
        <Head>
          <title>Blog</title>
        </Head>
        <div className="pb-4 text-3xl font-bold">Blog</div>
        <div className="">
          {posts.map((post, index) => (
            <Post post={post} key={index} />
          ))}
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps(_context) {
  // Get posts from the posts dir
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map((filename) => {
    const slug = filename.replace(".mdx", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf8"
    );

    const { data: frontMatter } = matter(markdownWithMeta);

    return {
      slug,
      frontMatter,
    };
  });

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  };
}
