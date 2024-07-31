// import Navigation from "../components/navigation/Navigation";

function TrainingFinished() {
  return (
    <div className="bg-dark text-center">
      <h1>Glückwunsch</h1>
      <p>Du hast 3 Tage am Stück trainiert!</p>

      <div className="mt-8">
        <p className="">Wie war das Workout?</p>
        <div className="flex justify-between">
          <button className="bg-medium p-4 flex-1 mx-2">zu leicht</button>
          <button className="bg-medium p-4 flex-1 mx-2">genau richtig</button>
          <button className="bg-medium p-4 flex-1 mx-2">zu schwer</button>
        </div>
        <p className="">Bewertung überspringen</p>
      </div>
    </div>
  );
}

export default TrainingFinished;
