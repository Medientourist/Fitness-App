import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import close from "../../assets/close.png";
import ProgramStartButton from "./ProgramStartButton";

function ProgramShortDescription({
  program,
  workoutDay,
  style,
  isSameProgram,
}) {
  const nextWorkoutDay =
    program.workoutsWithDay
      ?.filter((wd) => wd.day > workoutDay.day)
      ?.sort((a, b) => a.day - b.day)?.[0]?.day || workoutDay.day;

  const nextWorkoutId = program.workoutsWithDay?.find(
    (wd) => wd.day === nextWorkoutDay
  )?.workout.id;

  return (
    <div
      className={`${style} h-screen flex flex-col justify-center items-center text-center px-4`}
    >
      <div>
        <h1>{program.name}</h1>
      </div>
      <Link to="/workout" className="absolute top-4 right-4">
        <img src={close} alt="back" className="w-6 h-6" />
      </Link>
      <div className="absolute bottom-0 w-full">
        <div className="flex justify-around mb-16">
          <div className="text-center">
            <div className="bg-dark rounded-full h-6 w-6 mx-auto"></div>
            <p>{program.focus}</p>
          </div>
          <div className="text-center">
            <div className="bg-dark rounded-full h-6 w-6 mx-auto"></div>
            <p>{program.difficulty}</p>
          </div>
          <div className="text-center">
            <div className="bg-dark rounded-full h-6 w-6 mx-auto"></div>
            <p>Wochen {program.duration}</p>
          </div>
        </div>
        <ProgramStartButton
          programId={program.id}
          workoutId={nextWorkoutId || workoutDay.workoutId}
          day={(isSameProgram && nextWorkoutDay) || workoutDay.day} // Hier sicherstellen, dass der aktuelle Tag verwendet wird
          style={style}
        />
      </div>
    </div>
  );
}

ProgramShortDescription.propTypes = {
  program: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    focus: PropTypes.string,
    difficulty: PropTypes.string,
    duration: PropTypes.number,
    workoutsWithDay: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        day: PropTypes.number.isRequired,
        workout: PropTypes.shape({
          id: PropTypes.string.isRequired,
          name: PropTypes.string,
          category: PropTypes.string,
          duration: PropTypes.number,
        }).isRequired,
      })
    ),
  }).isRequired,
  workoutDay: PropTypes.shape({
    workoutId: PropTypes.string.isRequired,
    day: PropTypes.number.isRequired,
  }).isRequired,
  style: PropTypes.string.isRequired,
  isSameProgram: PropTypes.bool.isRequired,
};

export default ProgramShortDescription;
