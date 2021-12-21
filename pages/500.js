import GoBackButton from "../components/goBackButton";

export default function Custom500() {
  return (
    <div className="flex-col max-w-2xl mx-auto">
      <GoBackButton />
      <div className="text-3xl font-bold ">
        500 - Server-side error occurred
      </div>
    </div>
  );
}
