import { Link } from "react-router-dom";
import { saveToStorage, loadFromStorage } from "../../utils/storage";
import { GET_PROGRAM } from "../../queries/hygraphQueries";

function TrainingFinished({ programId, workoutId, day, style }) {

  const saveProgrammProgress = ( GET_PROGRAM )

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
        <Link
          to={`/program/${programId}?workoutId=${encodeURIComponent(
            workoutId
          )}&day=${encodeURIComponent(day)}&style=${encodeURIComponent(style)}`}
        >
          Bewertung überspringen
        </Link>
      </div>
    </div>
  );
}

export default TrainingFinished;
