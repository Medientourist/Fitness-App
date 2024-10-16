import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function StartToday({ programId, workout, day, style }) {
  return (
    <div className="px-4 w-full">
      <div className="flex flex-row justify-between items-center mb-4">
        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl">
          Dein Workout heute
        </h2>
        <Link
          className="text-sm hover:text-orange-500 sm:text-base md:text-lg"
          to={`/program/${encodeURIComponent(
            programId
          )}?workoutId=${encodeURIComponent(
            workout.id
          )}&day=${encodeURIComponent(day)}&style=${encodeURIComponent(style)}`}
        >
          Trainingsplan
        </Link>
      </div>

      <div className="">
        <Link
          to={`/training/${encodeURIComponent(
            programId
          )}?workoutId=${encodeURIComponent(
            workout.id
          )}&day=${encodeURIComponent(day)}&style=${encodeURIComponent(style)}`}
          className={`${style} block p-4 text-white w-full rounded-3xl hover:text-black`}
        >
          <p className="text-xl">Tag {day}</p>
          <h3 className="text-2xl">{workout.name}</h3>
          <p className="text-lg">
            {workout.duration} Min. • {workout.category}
          </p>
        </Link>
      </div>
    </div>
  );
}

StartToday.propTypes = {
  programId: PropTypes.string.isRequired,
  workout: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    duration: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  day: PropTypes.number.isRequired,
  style: PropTypes.string.isRequired,
};

export default StartToday;
