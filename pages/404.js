import Link from "next/link";

import Card from "../components/card";

export default function Custom404() {
  return (
    <div className="flex-col py-10 max-w-2xl mx-auto">
      <Link href="/" passHref>
        <button className="py-2">
          <Card>Go back</Card>
        </button>
      </Link>
      <div className="text-3xl font-bold ">404 - Page Not Found</div>
    </div>
  );
}
