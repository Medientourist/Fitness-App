import { Link } from "react-router-dom";

function WorkoutPlanProgress() {
  return (
    <div className="p-4">
      <h3 className="p-4">Aktueller Trainingsplan</h3>
      <Link
        to="/programs"
        className="flex items-center space-x-4 mb-4 py-8 px-6 bg-medium text-white text-left w-full rounded-3xl"
      >
        <div className="flex h-fit">
          <span>40%</span>
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
