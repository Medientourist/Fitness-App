import { useParams, useLocation } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import TrainingMoreInformation from "../components/training/TrainingMoreInformation";
import TrainingStart from "../components/training/TrainingStart";
import TrainingFinished from "../components/training/TrainingFinished";
import TrainingStop from "../components/training/TrainingStop";
import ProgressProgram from "../components/progressComponent/ProgressProgram";
import { GET_WORKOUT } from "../queries/hygraphQueries";

/*
Apollo DevTools
React DevTools
*/

function Training() {
  const params = useParams();
  const location = useLocation();

  const filteredId = params.id;

  const { loading, error, data } = useQuery(GET_WORKOUT, {
    variables: { id: filteredId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { workout } = data;
  const url = decodeURIComponent(location.pathname + location.search);

  const pathSegments = location.pathname.split("/");
  const programId = pathSegments[pathSegments.length - 1];

  const queryParams = new URLSearchParams(location.search);

  const workoutId = queryParams.get("workoutId");
  const day = queryParams.get("day");
  const style = queryParams.get("style") || "";

  return (
    <div className="min-h-screen flex flex-col bg-dark pt-4">
      <TrainingStart
        programId={programId}
        workoutId={workoutId}
        day={day}
        style={style}
      />
      <ProgressProgram />
      <TrainingMoreInformation />
      <TrainingFinished />
      <TrainingStop />
    </div>
  );
}

export default Training;
