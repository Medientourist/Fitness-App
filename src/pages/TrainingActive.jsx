import { useParams, useLocation } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import {
  GET_WORKOUT,
  GET_EXERCISES,
  GET_EXERCISE,
} from "../queries/hygraphQueries";

import TrainingStopButton from "../components/TrainingActive/TrainingHeader";
import ProgressProgram from "../components/progressComponent/ProgressProgram";
import TrainingTimer from "../components/TrainingActive/TrainingTimer";
import TrainingStop from "../components/TrainingActive/TrainingStop";

function TrainingActive() {

  const url = decodeURIComponent(location.pathname + location.search);

  const pathSegments = location.pathname.split("/");
  const programId = pathSegments[pathSegments.length - 1];

  const queryParams = new URLSearchParams(location.search);

  const workoutId = queryParams.get("workoutId");
  const day = queryParams.get("day");
  const style = queryParams.get("style") || "";
  console.log(programId, workoutId, day, style);

  return (
    <div className="bg-dark min-h-screen flex flex-col text-center">
      <TrainingStopButton programId={programId} workoutId={workoutId} day={day} style={style} />
      TrainingActive
      <ProgressProgram />
      <TrainingTimer />
      <TrainingStop />
    </div>
  );
}

export default TrainingActive;
