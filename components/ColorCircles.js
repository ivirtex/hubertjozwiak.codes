export default function ColorCircles() {
  return (
    <div className="absolute top-0 left-0 right-0 opacity-50 blur-xl dark:opacity-30">
      <div className="absolute top-0 left-16 overflow-visible">
        <div className="circle-obj absolute h-[800px] w-[600px] rounded-full mix-blend-multiply"></div>
      </div>

      <div className="absolute top-28 left-52 overflow-visible">
        <div className="circle-obj2 absolute h-[600px] w-[500px] rounded-full mix-blend-multiply"></div>
      </div>
    </div>
  );
}
