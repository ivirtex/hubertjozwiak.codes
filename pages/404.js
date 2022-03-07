// @ts-check
import GoBackButton from "../components/goBackButton";

export default function Custom404() {
  return (
    <div className="mx-auto max-w-2xl flex-col">
      <GoBackButton />
      <div className="text-3xl font-bold ">404 - Page Not Found</div>
    </div>
  );
}
