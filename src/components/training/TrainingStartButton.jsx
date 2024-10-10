import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function TrainingStartButton({ programId, workoutId, day, style }) {
  return (
    <div className="flex flex-row justify-center items-center">
      <Link
        to={`/trainingActive/${programId}?workoutId=${encodeURIComponent(
          workoutId
        )}&day=${encodeURIComponent(day)}&style=${encodeURIComponent(style)}`}
        className={`${style} mt-8 p-4 rounded-3xl text-black hover:text-white hover:scale-110`}
      >
        Jetzt starten
      </Link>
    </div>
  );
}

TrainingStartButton.propTypes = {
  programId: PropTypes.string.isRequired,
  workoutId: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
};

export default TrainingStartButton;
