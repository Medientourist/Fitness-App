import PropTypes from "prop-types";
import { GET_WORKOUT } from "../../queries/hygraphQueries";

/*
  "inline-block bg-cyan-to-yellow-tl-br text-white my-4 py-8 w-3/12 rounded-l-3xl",
  "inline-block bg-orange-to-peach-tl-br text-white my-4 py-8 w-3/12 rounded-l-3xl",
  "inline-block bg-cyan-to-blue-tl-br text-white my-4 py-8 w-3/12 rounded-l-3xl",
*/

function ProgramDayOverview({ dayLength, workoutsWithCategories }) {
  const colorStyles = [
    "bg-orange-to-peach-tl-br",
    "bg-cyan-to-yellow-tl-br",
    "bg-cyan-to-blue-tl-br",
  ];

  // {buttonStyles[index % buttonStyles.length]}

  return (
    <div className="p-4">
      <div className="flex justify-between align-middle">
        <p className="inline mb-4">{dayLength} Tage</p>
        <p className="inline mb-4">Alle anzeigen</p>
      </div>
      {workoutsWithCategories.map(
        (workout, index) => (
          console.log(workout),
          (
            <div className="flex mb-4 last:mb-0" key={workout.id}>
              <div
                className={`${colorStyles[index % colorStyles.length]} inline-block bg-medium text-white w-4/12 rounded-l-3xl`}
              ></div>
              <div className="inline-block bg-medium text-white w-8/12 rounded-r-3xl">
                <div className="px-4 py-2">
                  <p className="mb-6 text-lg font-bold">Tag {workout.day}</p>
                  <p className="text-sm">{workout.duration} Min.</p>
                  <p className="text-sm">
                    {workout.category.charAt(0).toUpperCase() +
                      workout.category.slice(1)}
                  </p>
                </div>
              </div>
            </div>
          )
        )
      )}
    </div>
  );
}

export default ProgramDayOverview;
