// @ts-check
import GoBackButton from "../components/GoBackButton";
import Layout from "../components/Layout";

export default function Custom500() {
  return (
    <Layout>
      <div className="flex-col">
        <GoBackButton />
        <div className="font-bold text-3xl ">
          500 - Server-side error occurred
        </div>
      </div>
    </Layout>
  );
}
