import { Link } from "react-router-dom";

function TrainingStartButton({ programId, workoutId, day, style }) {
  console.log(programId, workoutId, day, style);
  return (
    <div className="flex flex-row justify-center items-center">
      <Link
        to={`/trainingActive/${programId}?workoutId=${encodeURIComponent(
          workoutId
        )}&day=${encodeURIComponent(day)}&style=${encodeURIComponent(style)}`}
        className={`${style} mt-8 p-4 rounded-3xl text-black`}
      >
        Jetzt starten
      </Link>
    </div>
  );
}

export default TrainingStartButton;
