import Link from "next/link";

import Card from "./card";

export default function Post({ post }) {
  return (
    <Link href={`/blog/${post.slug}`} passHref>
      <button className="max-w-2xl w-full">
        <Card>
          <div className="flex">
            <div>
              <div className="text-blue-600 dark:text-blue-500 pr-2">
                {post.frontMatter.title}
              </div>
              <div className="text-sm font-normal pr-2">
                {post.frontMatter.excerpt}
              </div>
            </div>
            <div className="flex-grow"></div>
            <div className="text-sm min-w-max">{post.frontMatter.date}</div>
          </div>
        </Card>
      </button>
    </Link>
  );
}
