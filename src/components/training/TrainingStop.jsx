function TrainingStop() {
  return (
    <div className="bg-medium text-center">
      <p>Möchtest du das Workout wirklich beenden?</p>
      <div className="flex justify-around">
        <button className="bg-medium p-2 mx-2 rounded-3xl">
          Nein, weiter machen!
        </button>
        <button className="bg-black px-4 py-2 mx-2 rounded-3xl">
          Ja, beenden
        </button>
      </div>
    </div>
  );
}

export default TrainingStop;
