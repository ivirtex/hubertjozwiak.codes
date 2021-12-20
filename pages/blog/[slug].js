import fs from "fs";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import Head from "next/head";
import Link from "next/link";
import path from "path";
import Card from "../../components/card";

// const components = {
//   SyntaxHighlighter,
// };
// const data = { docco };

export default function PostPage({
  frontMatter: { title, date, cover_image },
  slug,
  mdxSource,
}) {
  return (
    <div className="max-w-3xl m-auto py-10">
      <Head>
        <title>{title}</title>
      </Head>
      <Link href="/blog" passHref>
        <button className="w-max">
          <Card>Go back</Card>
        </button>
      </Link>
      <div className="font-bold text-3xl pb-4">{title}</div>
      <div className="text-gray-600 dark:text-gray-200">{date}</div>
      <article className="prose dark:prose-dark prose-sm sm:prose lg:prose-lg xl:prose-xl py-4">
        <MDXRemote {...mdxSource} />
      </article>
    </div>
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
