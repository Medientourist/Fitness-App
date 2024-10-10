import { useParams, useLocation } from "react-router-dom";
import { useQuery } from "@apollo/client";
import ProgramShortDescription from "../components/program/ProgramShortDescription";
import ProgramDiagram from "../components/program/ProgramDiagram";
import ProgramDayOverview from "../components/program/ProgramDayOverview";
import { GET_PROGRAM } from "../queries/hygraphQueries";
import { loadFromSessionStorage } from "../utils/storage";

function Program() {
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

  const savedData = loadFromSessionStorage("trainingFinishedData");
  const savedProgramId = savedData?.programId;
  const isSameProgram = savedProgramId === program.id;

  const workoutDay = program.workoutsWithDay
    ? program.workoutsWithDay.map((workoutWithDay) => ({
        day: workoutWithDay.day,
        workoutId: workoutWithDay.workout.id,
      }))
    : [];

  const workoutsWithCategories = program.workoutsWithDay
    ? program.workoutsWithDay.map((workoutWithDay) => ({
        id: workoutWithDay.id,
        day: workoutWithDay.day,
        innerId: workoutWithDay.workout.id,
        name: workoutWithDay.workout.name,
        category: workoutWithDay.workout.category,
        duration: workoutWithDay.workout.duration,
      }))
    : [];
  const lastDay = workoutDay[workoutDay.length - 1]?.day || 0;

  return (
    <div className="bg-dark pb-[4.5rem]">
      <ProgramShortDescription
        key={program.id}
        program={program}
        workoutDay={workoutDay[0]}
        style={style}
        isSameProgram={isSameProgram}
      />
      <div className="p-4 bg-medium">
        <p>{program.description}</p>
      </div>
      <ProgramDiagram workouts={workoutsWithCategories} />
      <ProgramDayOverview
        dayLength={lastDay}
        workoutsWithCategories={workoutsWithCategories}
        programId={filteredId}
        style={style}
      />
    </div>
  );
}

export default Program;
