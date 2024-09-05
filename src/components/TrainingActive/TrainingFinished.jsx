import { Link } from "react-router-dom";
import { saveToSessionStorage } from "../../utils/storage";

function TrainingFinished({ programId, workoutId, day, style }) {
  const STORAGE_KEY = "trainingFinishedData";

  const handleSave = () => {
    const data = {
      programId,
      day,
      style,
    };
    saveToSessionStorage(STORAGE_KEY, data);
  };

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

        {/* Link mit onClick-Handler, um Daten in localStorage zu speichern */}
        <Link to={`/`} onClick={handleSave}>
          Bewertung überspringen
        </Link>
      </div>
    </div>
  );
}

export default TrainingFinished;
