import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

function WorkoutPlanProgress({
  progress,
  programTitle,
  completedWorkouts,
  totalWorkouts,
}) {
  const roundedProgress = progress.toFixed(1);

  return (
    <div className="flex flex-col space-y-4 w-full relative pb-12">
      <h3 className="">Aktueller Trainingsplan</h3>
      <Link
        to="/workout"
        className="flex items-center space-x-4 py-8 px-6 bg-medium text-white text-left w-full rounded-3xl hover:text-orange-500"
      >
        <div className="flex h-fit">
          <div className="inline w-2/4">
            <CircularProgressbar
              value={progress}
              text={`${roundedProgress} %`}
              styles={buildStyles({
                rotation: 0,
                strokeLinecap: "butt",
                textSize: "0.75rem",
                pathTransitionDuration: 0.1,
                pathColor: `#FFFFFF`,
                textColor: "#FFFFFF",
                fontWeight: "extrabold",
                trailColor: "#202430",
                backgroundColor: "#3e98c7",
              })}
            />
          </div>
        </div>
        <div className="inline">
          <p className="text-base">{programTitle}</p>
          <p className="text-sm">
            {completedWorkouts} von {totalWorkouts} geschafft
          </p>
        </div>
      </Link>
    </div>
  );
}

WorkoutPlanProgress.propTypes = {
  progress: PropTypes.number.isRequired,
  programTitle: PropTypes.string.isRequired,
  completedWorkouts: PropTypes.number.isRequired,
  totalWorkouts: PropTypes.number.isRequired,
};

export default WorkoutPlanProgress;
