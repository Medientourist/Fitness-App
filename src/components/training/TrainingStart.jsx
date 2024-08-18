import { Link } from "react-router-dom";
import back from "../../assets/back.png";
import { useParams, useLocation } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { GET_PROGRAM, GET_WORKOUT } from "../../queries/hygraphQueries";
import TrainingStartButton from "./TrainingStartButton";

export default function TrainingStart({ programId, workoutId, day, style }) {
  const {
    loading: loadingProgram,
    error: errorProgram,
    data: dataProgram,
  } = useQuery(GET_PROGRAM, {
    variables: { id: programId },
  });

  const {
    loading: loadingWorkout,
    error: errorWorkout,
    data: dataWorkout,
  } = useQuery(GET_WORKOUT, {
    variables: { id: workoutId },
  });

  if (loadingProgram) return <p>Loading program...</p>;
  if (errorProgram) return <p>Error loading program: {errorProgram.message}</p>;
  if (loadingWorkout) return <p>Loading workout...</p>;
  if (errorWorkout) return <p>Error loading workout: {errorWorkout.message}</p>;

  const { program } = dataProgram;
  const { workout } = dataWorkout;

  return (
    <div className="bg-dark min-h-screen flex flex-col justify-between text-center">
      <div className="w-full flex justify-center items-center relative py-4">
        <h1 className="text-base">{program.name}</h1>
        <Link
          to={`/program/${programId}?style=${encodeURIComponent(style)}`}
          className="absolute right-4"
        >
          <img src={back} alt="back" className="w-6 h-6" />
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center flex-grow">
        <h2>Tag {day}</h2>
        <p>26 Min. • {workout.category}</p>
        <TrainingStartButton
          programId={programId}
          workoutId={workoutId}
          day={day}
          style={style}
        />
      </div>
    </div>
  );
}
