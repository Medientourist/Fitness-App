import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ProgramStartButton({ programId, workoutId, day, style }) {
  return (
    <div className="fixed bottom-4 z-10 flex justify-center w-full">
      <Link
        to={`/training/${encodeURIComponent(
          programId
        )}?workoutId=${encodeURIComponent(workoutId)}&day=${encodeURIComponent(
          day
        )}&style=${encodeURIComponent(style)}`}
        className={`${style} text-black rounded-3xl px-4 py-2 hover:scale-110 hover:text-white`}
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
  style: PropTypes.string.isRequired,
};

export default ProgramStartButton;
