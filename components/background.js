export default function Background() {
  return (
    <div className="absolute top-0 left-0 right-0">
      <div className="absolute top-0 left-16 overflow-visible opacity-50 dark:opacity-30">
        <div className="circle-obj absolute h-[900px] w-[700px] rounded-[40rem] mix-blend-multiply"></div>
      </div>

      <div className="absolute top-28 left-52 overflow-visible opacity-50 dark:opacity-30">
        <div className="circle-obj2 absolute h-[600px] w-[600px] rounded-[40rem] mix-blend-multiply"></div>
      </div>
    </div>
  );
}
