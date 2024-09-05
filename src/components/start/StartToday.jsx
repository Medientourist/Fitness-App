import { Link } from "react-router-dom";

function StartToday({ programId, workout, day, style }) {
  return (
    <div className="py-4">
      <div className="mb-5 px-4">
        <h2 className="inline mr-4">Dein Workout heute</h2>
        <a className="text-white">Trainingsplan</a>
      </div>
      <div className="px-4">
        <Link
          to={`/training/${encodeURIComponent(
            programId
          )}?workoutId=${encodeURIComponent(
            workout.id
          )}&day=${encodeURIComponent(day)}&style=${encodeURIComponent(style)}`}
          className={`${style} block px-4 text-white my-4 py-8 w-full rounded-3xl`}
        >
          <p className="text-xl">Tag {day}</p>
          <h3 className={`text-2xl`}>{workout.name}</h3>
          <p className="text-lg">
            {workout.duration} Min. • {workout.category}
          </p>
        </Link>
      </div>
    </div>
  );
}

export default StartToday;
