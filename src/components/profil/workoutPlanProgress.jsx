import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

function WorkoutPlanProgress() {
  const percentage = 40;
  const progress = 40;
  return (
    <div className="p-4">
      <h3 className="p-4">Aktueller Trainingsplan</h3>
      <Link
        to="/workout"
        className="flex items-center space-x-4 py-8 px-6 bg-medium text-white text-left w-full rounded-3xl"
      >
        <div className="flex h-fit">
          <div className="inline w-2/4">
            <CircularProgressbar
              value={percentage}
              text={`${progress} %`}
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
          <p className="text-base">Titel des Programms</p>
          <p className="text-sm">1 von 8 geschafft</p>
        </div>
      </Link>
    </div>
  );
}

export default WorkoutPlanProgress;
