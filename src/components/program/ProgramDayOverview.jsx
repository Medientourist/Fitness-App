import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { loadFromSessionStorage } from "../../utils/storage";

const colorStyles = [
  "bg-orange-to-peach-tl-br",
  "bg-cyan-to-yellow-tl-br",
  "bg-cyan-to-blue-tl-br",
];

function ProgramDayOverview({
  dayLength,
  workoutsWithCategories,
  programId,
  style,
}) {
  const [showAll, setShowAll] = useState(false);
  const [lastCompletedDay, setLastCompletedDay] = useState(0);

  useEffect(() => {
    const savedData = loadFromSessionStorage("trainingFinishedData");
    if (savedData && savedData.day) {
      setLastCompletedDay(savedData.day);
    }
  }, []);

  const upcomingWorkouts = workoutsWithCategories.filter(
    (workout) => workout.day > lastCompletedDay
  );

  const completedWorkouts = workoutsWithCategories.filter(
    (workout) => workout.day <= lastCompletedDay
  );

  const displayedWorkouts = showAll
    ? [...upcomingWorkouts, ...completedWorkouts]
    : upcomingWorkouts.slice(0, 3);

  return (
    <div className="p-4">
      <div className="flex justify-between align-middle">
        <p className="inline mb-4 text-lg font-bold">{dayLength} Tage</p>
        <p
          className="inline mb-4 cursor-pointer hover:text-orange-500"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Weniger anzeigen" : "Alle anzeigen"}
        </p>
      </div>
      {displayedWorkouts.map((workout, index) => {
        const isPastWorkout = workout.day <= lastCompletedDay;
        const toLink = `/training/${encodeURIComponent(
          programId
        )}?workoutId=${encodeURIComponent(
          workout.innerId
        )}&day=${encodeURIComponent(workout.day)}&style=${encodeURIComponent(
          style
        )}`;

        return (
          <Link
            to={toLink}
            className={`group flex mb-4 last:mb-0 w-full ${
              isPastWorkout ? "opacity-50" : ""
            }`}
            key={workout.id}
          >
            <div
              className={`${
                colorStyles[index % colorStyles.length]
              } inline-block w-3/12 max-w-40 rounded-l-3xl group-hover:shadow-dayColorShadow group-hover:shadow-white transition-shadow duration-300`}
            ></div>
            <div className="inline-block bg-medium text-white w-full rounded-r-3xl group-hover:text-orange-500 group-hover:shadow-lg group-hover:shadow-white transition-shadow duration-300">
              <div className="px-4 py-2">
                <p className="mb-6 text-lg font-bold">Tag {workout.day}</p>
                <p className="text-sm">{workout.duration} Min.</p>
                <p className="text-sm">
                  {workout.category.charAt(0).toUpperCase() +
                    workout.category.slice(1)}
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

ProgramDayOverview.propTypes = {
  dayLength: PropTypes.number.isRequired,
  workoutsWithCategories: PropTypes.array.isRequired,
  programId: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
};

export default ProgramDayOverview;
