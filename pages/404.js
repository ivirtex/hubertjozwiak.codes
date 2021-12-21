import GoBackButton from "../components/goBackButton";

export default function Custom404() {
  return (
    <div className="flex-col max-w-2xl mx-auto">
      <GoBackButton />
      <div className="text-3xl font-bold ">404 - Page Not Found</div>
    </div>
  );
}
