import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { saveToSessionStorage } from "../../utils/storage";
import Party from "../../assets/party.png";

function TrainingFinished({ programId, workoutId, day, style }) {
  const STORAGE_KEY = "trainingFinishedData";

  const handleSave = () => {
    const data = {
      programId,
      workoutId,
      day,
      style,
    };
    saveToSessionStorage(STORAGE_KEY, data);
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center space-y-12 bg-dark text-center">
      <h1>Glückwunsch</h1>
      <div className="flex justify-center space-x-4">
        <img src={Party} alt="party" className="w-1/3 h-auto -scale-x-100" />
        <img src={Party} alt="party" className="w-1/3 h-auto" />
      </div>
      {day > 1 ? (
        <p>Du hast {day} Tage am Stück trainiert!</p>
      ) : (
        <p>Du hast 1 Tag am Stück trainiert!</p>
      )}

      <Link
        to={`/`}
        onClick={handleSave}
        className="bg-medium p-4 px-8 rounded-3xl hover:bg-gray-900 hover:scale-150"
      >
        Training beenden
      </Link>
    </div>
  );
}

TrainingFinished.propTypes = {
  programId: PropTypes.string.isRequired,
  workoutId: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
};

export default TrainingFinished;
