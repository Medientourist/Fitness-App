function ProgressPoint({ isCompleted }) {
  return (
    <div className={`w-8 h-8 rounded-full ${isCompleted ? 'bg-green-500' : 'bg-gray-300'}`}></div>
  );
}

export default ProgressPoint;
