import { useParams, useLocation } from "react-router-dom";
import { useQuery } from "@apollo/client";
import ProgramShortDescription from "../components/program/ProgramShortDescription";
import ProgramDiagram from "../components/program/ProgramDiagram";
import ProgramDayOverview from "../components/program/ProgramDayOverview";
import { GET_PROGRAM } from "../queries/hygraphQueries";

function Program() {
  const i = 0;
  const params = useParams();
  const location = useLocation();

  const filteredId = params.id;

  const { loading, error, data } = useQuery(GET_PROGRAM, {
    variables: { id: filteredId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { program } = data;

  const queryParams = new URLSearchParams(location.search);
  const style = queryParams.get("style") || "";

  // mapen

  const workoutsWithCategories = [];
  if (program.workoutsWithDay) {
    program.workoutsWithDay.forEach((workoutWithDay) => {
      workoutsWithCategories.push({
        id: workoutWithDay.id,
        day: workoutWithDay.day,
        innerId: workoutWithDay.workout.id,
        name: workoutWithDay.workout.name,
        category: workoutWithDay.workout.category,
        duration: workoutWithDay.workout.duration,
      });
    });
  }

  const workoutDay = [];
  if (program.workoutsWithDay) {
    program.workoutsWithDay.forEach((workoutWithDay) => {
      workoutDay.push({
        day: workoutWithDay.day,
        workoutId: workoutWithDay.workout.id,
      });
    });
  }

  const lastDay = workoutDay[workoutDay.length - 1].day;

  return (
    <div className="bg-dark pb-[4.5rem]">
      <ProgramShortDescription
        key={program.id}
        programId={program.id}
        title={program.name}
        focus={program.focus}
        difficulty={program.difficulty}
        duration={program.duration}
        description={program.description}
        workoutId={workoutDay[i].workoutId}
        day={workoutDay[i].day}
        style={style}
      />
      <div className="p-4 bg-medium">
        <p>{program.description}</p>
      </div>
      <ProgramDiagram workouts={workoutsWithCategories} />
      <ProgramDayOverview
        dayLength={lastDay}
        workoutsWithCategories={workoutsWithCategories}
      />
    </div>
  );
}

export default Program;
