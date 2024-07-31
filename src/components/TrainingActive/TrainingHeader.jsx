import { Link } from "react-router-dom";
import { GET_WORKOUT } from "../../queries/hygraphQueries";
import { useParams, useLocation } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";

function TrainingHeader({ programId, workoutId, day, style }) {
  const { loading, error, data } = useQuery(GET_WORKOUT, {
    variables: { id: workoutId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { workout } = data;

  return (
    <div className="text-center mt-2.5">
      <div className="flex items-center justify-center">
        <p className="text-white">{workout.name}</p>
        <Link
          to={`/program/${programId}?workoutId=${encodeURIComponent(
            workoutId
          )}&day=${encodeURIComponent(day)}&style=${encodeURIComponent(style)}`}
          className="text-white absolute right-4"
        >
          <img src="../../assets/close.png" alt="stop" className="w-6 h-6" />
        </Link>
      </div>
    </div>
  );
}

export default TrainingHeader;