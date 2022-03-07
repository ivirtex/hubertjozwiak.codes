// @ts-check
import GoBackButton from "../components/goBackButton";
import Layout from "../components/layout";

export default function Custom500() {
  return (
    <Layout>
      <div className="mx-auto max-w-2xl flex-col">
        <GoBackButton />
        <div className="text-3xl font-bold ">
          500 - Server-side error occurred
        </div>
      </div>
    </Layout>
  );
}
