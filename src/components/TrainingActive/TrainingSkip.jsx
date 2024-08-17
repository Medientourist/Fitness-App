function TrainingSkip({ handleForward }) {
  return (
    <div className="mt-16">
      <button
        className="bg-dark text-white font-bold py-2 px-4 rounded-full"
        onClick={handleForward}
      >
        Überspringen
      </button>
    </div>
  );
}

export default TrainingSkip;
