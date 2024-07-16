import { useParams, useLocation } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import TrainingMoreInformation from "../components/training/TrainingMoreInformation";
import TrainingStart from "../components/training/TrainingStart";
import TrainingFinished from "../components/training/TrainingFinished";
import TrainingStop from "../components/training/TrainingStop";
import ProgressProgram from "../components/progressComponent/ProgressProgram";

/*
Apollo DevTools
React DevTools
*/

const GET_PROGRAM = gql`
  query GetProgram($id: ID!) {
    program(where: { id: $id }) {
      id
      name
      focus
      difficulty
      duration
      description
      workoutsWithDay {
        id
        day
        workout {
          id
          name
          category
          exercises {
            ... on ExerciseWithDuration {
              id
              duration
              stage
            }
            ... on ExerciseWithReps {
              id
              reps
              stage
            }
          }
        }
      }
    }
  }
`;

function Training() {
  // const params = useParams();
  // const location = useLocation();

  // const filteredId = params.id;

  // const { loading, error, data } = useQuery(GET_PROGRAM, {
  //   variables: { id: filteredId },
  // });

  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error.message}</p>;

  // const { program } = data;

  // // const workoutsWithCategories = [];
  // // if (program.workoutsWithDay) {
  // //   program.workoutsWithDay.forEach((workoutWithDay) => {
  // //     workoutsWithCategories.push({
  // //       day: workoutWithDay.day,
  // //       name: workoutWithDay.workout.name,
  // //       category: workoutWithDay.workout.category,
  // //     });
  // //   });
  // // }

  return (
    <div className="min-h-screen flex flex-col bg-dark pt-4">
      <TrainingStart />
      <ProgressProgram />
      <TrainingMoreInformation />
      <TrainingFinished />
      <TrainingStop />
    </div>
  );
}

export default Training;
