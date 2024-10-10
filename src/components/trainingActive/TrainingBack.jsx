import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Return from "../../assets/return.png";

export default function TrainingBack({
  onClick,
  back,
  programId,
  workoutId,
  day,
  style,
}) {
  return (
    <div className="inline w-1/4 min-w-5">
      {back ? (
        <Link
          className="inline-block"
          to={`/program/${programId}?workoutId=${encodeURIComponent(
            workoutId
          )}&day=${encodeURIComponent(day)}&style=${encodeURIComponent(style)}`}
        >
          <img
            src={Return}
            alt="back"
            className="w-4 h-10 transition-transform duration-300 ease-in-out hover:scale-125 hover:shadow-lg"
          />
        </Link>
      ) : (
        <button className="" onClick={onClick}>
          <img
            src={Return}
            alt="back"
            className="w-4 h-10 transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
          />
        </button>
      )}
    </div>
  );
}

TrainingBack.propTypes = {
  onClick: PropTypes.func.isRequired,
  back: PropTypes.bool.isRequired,
  programId: PropTypes.string.isRequired,
  workoutId: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
};
