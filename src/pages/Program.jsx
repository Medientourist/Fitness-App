import { useParams, useLocation } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import ProgramShortDescription from "../components/program/ProgramShortDescription";
import ProgramDiagram from "../components/program/ProgramDiagram";
import ProgramDayOverview from "../components/program/ProgramDayOverview";
import ProgramStartButton from "../components/program/ProgramStartButton";
import { GET_PROGRAM } from "../queries/hygraphQueries";


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

  const workoutsWithCategories = [];
  if (program.workoutsWithDay) {
    program.workoutsWithDay.forEach((workoutWithDay) => {
      workoutsWithCategories.push({
        id: workoutWithDay.id,
        day: workoutWithDay.day,
        innerId: workoutWithDay.workout.id,
        name: workoutWithDay.workout.name,
        category: workoutWithDay.workout.category,
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

  return (
    <div className="min-h-screen flex flex-col bg-dark">
      <ProgramShortDescription
        key={program.id}
        programId={program.id}
        title={program.name}
        focus={program.focus}
        difficulty={program.difficulty}
        duration={program.duration}
        description={program.description}
        style={style}
      />
      <div className="p-4">
        <p>{program.description}</p>
      </div>
      <ProgramDiagram workouts={workoutsWithCategories} />
      <div className="p-4">
        <h2>Workouts</h2>
        <ul>
          {workoutDay.map((workout, index) => (
            <li key={index}>
              <p>WorkoutId: {workout.workoutId}</p>
              <p>Tag: {workout.day}</p>
            </li>
          ))}
        </ul>
      </div>
      <ProgramDayOverview />
      <ProgramStartButton
        programId={filteredId}
        workoutId={workoutDay[0].workoutId}
        day={workoutDay[0].day}
        style={style}
      />
    </div>
  );
}

export default Program;
