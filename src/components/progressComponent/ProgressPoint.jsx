function ProgressPoint({ isCompleted, isBreak }) {
  return (
    <div
      className={`w-8 h-8 rounded-full ${
        isCompleted ? "bg-green-500" : "bg-gray-300"
      } ${isBreak ? "border border-yellow-500" : ""}`}
    ></div>
  );
}

export default ProgressPoint;
