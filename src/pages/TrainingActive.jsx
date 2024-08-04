import { useParams, useLocation } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import {
  GET_WORKOUT,
} from "../queries/hygraphQueries";

import TrainingStopButton from "../components/TrainingActive/TrainingHeader";
import ProgressProgram from "../components/progressComponent/ProgressProgram";
import TrainingTimer from "../components/TrainingActive/TrainingTimer";
import TrainingRepetition from "../components/TrainingActive/TrainingRepetition";
import TrainingStop from "../components/TrainingActive/TrainingStop";
import TrainingMoreInformation from "../components/TrainingActive/TrainingMoreInformation";

function TrainingActive() {

  const url = decodeURIComponent(location.pathname + location.search);

  const pathSegments = location.pathname.split("/");
  const programId = pathSegments[pathSegments.length - 1];

  const queryParams = new URLSearchParams(location.search);

  const workoutId = queryParams.get("workoutId");
  const day = queryParams.get("day");
  const style = queryParams.get("style") || "";

  const { loading, error, data } = useQuery(GET_WORKOUT, {
    variables: { id: workoutId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { workout } = data;
  console.log(workout.exercises);



  return (
    <div className="bg-dark min-h-screen flex flex-col text-center">
      <TrainingStopButton programId={programId} workoutId={workoutId} day={day} style={style} />
      TrainingActive
      <ProgressProgram />
      { workout.exercises[0].duration > 0 ? <TrainingTimer time={workout.exercises[0].duration} /> : <TrainingRepetition repetition={workout.exercises[0].reps} /> }
      <h2>{workout.exercises[0].exercise.name}</h2>
      <TrainingMoreInformation description={workout.exercises[0].exercise.description} />
      {/* <TrainingStop /> */}
    </div>
  );
}

export default TrainingActive;
