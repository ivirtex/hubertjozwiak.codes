// @ts-check
import GoBackButton from "../components/GoBackButton";
import Layout from "../components/Layout";

export default function Custom404() {
  return (
    <Layout>
      <div className="flex-col">
        <GoBackButton />
        <div className="font-bold text-3xl ">404 - Page Not Found</div>
      </div>
    </Layout>
  );
}
