import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ProgramStartButton({ workoutId, day }) {
  return (
    <div className="sticky bottom-16 flex justify-center w-full">
      <Link
        to={`/training/${workoutId}?day=${day}`}
        className="bg-gradient-light-orange text-black rounded-3xl px-4 py-2"
      >
        Jetzt starten
      </Link>
    </div>
  );
}
ProgramStartButton.propTypes = {
  workoutId: PropTypes.string.isRequired,
  day: PropTypes.number,
};

export default ProgramStartButton;
