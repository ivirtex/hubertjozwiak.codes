// @ts-check
import GoBackButton from "../components/goBackButton";
import Layout from "../components/layout";

export default function Custom404() {
  return (
    <Layout>
      <div className="mx-auto max-w-3xl flex-col">
        <GoBackButton />
        <div className="font-bold text-3xl ">404 - Page Not Found</div>
      </div>
    </Layout>
  );
}
