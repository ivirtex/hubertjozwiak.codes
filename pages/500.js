// @ts-check
import GoBackButton from "../components/goBackButton";

export default function Custom500() {
  return (
    <div className="mx-auto max-w-2xl flex-col">
      <GoBackButton />
      <div className="text-3xl font-bold ">
        500 - Server-side error occurred
      </div>
    </div>
  );
}
