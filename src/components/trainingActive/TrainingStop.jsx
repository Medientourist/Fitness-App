import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function TrainingStop({ programId, workoutId, day, style, onClose }) {
  return (
    <div className="bg-medium text-center p-4 rounded-xl shadow-lg">
      <p>Möchtest du das Workout wirklich beenden?</p>
      <hr className="my-4"></hr>
      <div className="flex justify-around">
        <button className="bg-medium p-2 mx-2 rounded-3xl" onClick={onClose}>
          Nein, weiter machen!
        </button>
        <Link
          to={`/program/${programId}?workoutId=${encodeURIComponent(
            workoutId
          )}&day=${encodeURIComponent(day)}&style=${encodeURIComponent(style)}`}
          className="bg-black px-4 py-2 mx-2 rounded-3xl text-white"
        >
          Ja, beenden
        </Link>
      </div>
    </div>
  );
}

TrainingStop.propTypes = {
  programId: PropTypes.string.isRequired,
  workoutId: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default TrainingStop;
