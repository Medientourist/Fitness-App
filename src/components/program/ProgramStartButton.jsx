import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ProgramStartButton({ programId, workoutId, day, style }) {
  return (
    <div className="sticky bottom-16 flex justify-center w-full">
      <Link
        to={`/training/${encodeURIComponent(programId)}?workoutId=${encodeURIComponent(
          workoutId
        )}&day=${encodeURIComponent(day)}&style=${encodeURIComponent(style)}`}
        className="bg-gradient-light-orange text-black rounded-3xl px-4 py-2"
      >
        Jetzt starten
      </Link>
    </div>
  );
}
ProgramStartButton.propTypes = {
  programId: PropTypes.string.isRequired,
  workoutId: PropTypes.string.isRequired,
  day: PropTypes.number,
};

export default ProgramStartButton;
