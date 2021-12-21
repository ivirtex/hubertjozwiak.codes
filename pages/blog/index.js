import fs from "fs";
import path from "path";

import matter from "gray-matter";
import Head from "next/head";

import Post from "../../components/post";
import { sortByDate } from "../../utils/sortByDate";

export default function Blog({ posts }) {
  return (
    <div className="max-w-2xl m-auto py-10">
      <Head>
        <title>Blog</title>
      </Head>
      <div className="font-bold text-3xl pb-4">Blog</div>
      <div className="">
        {posts.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps(context) {
  // Get posts from the posts dir
  const files = fs.readdirSync(path.join("posts"));
  // console.log(files);

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
