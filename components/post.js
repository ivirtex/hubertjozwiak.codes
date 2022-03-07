// @ts-check
import Link from "next/link";

import Card from "./card";

export default function Post({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} passHref>
      <button className="w-full max-w-2xl">
        <Card>
          <div className="flex">
            <div>
              <div className="pr-2 text-blue-600 dark:text-blue-500">
                {post.frontMatter.title}
              </div>
              <div className="pr-2 text-sm font-normal">
                {post.frontMatter.excerpt}
              </div>
            </div>
            <div className="flex-grow"></div>
            <div className="min-w-max text-sm">{post.frontMatter.date}</div>
          </div>
        </Card>
      </button>
    </Link>
  );
}
