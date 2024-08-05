import { useLocation } from "react-router-dom";
import { useQuery, gql } from "@apollo/client";
import { GET_WORKOUT } from "../queries/hygraphQueries";
import { useState } from "react";

import TrainingStopButton from "../components/TrainingActive/TrainingHeader";
import ProgressProgram from "../components/progressComponent/ProgressProgram";
import TrainingBack from "../components/TrainingActive/TrainingBack";
import TrainingForward from "../components/TrainingActive/TrainingForward";
import TrainingTimer from "../components/TrainingActive/TrainingTimer";
import TrainingRepetition from "../components/TrainingActive/TrainingRepetition";
import TrainingStop from "../components/TrainingActive/TrainingStop";
import TrainingMoreInformation from "../components/TrainingActive/TrainingMoreInformation";
import TrainingFinished from "../components/TrainingActive/TrainingFinished";

function TrainingActive() {
  const location = useLocation();
  const [exerciseNumber, setExerciseNumber] = useState(0);

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
  const currentExercise = workout.exercises[exerciseNumber];

  const handleBack = () => {
    setExerciseNumber((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const handleForward = () => {
    setExerciseNumber((prev) =>
      prev < workout.exercises.length - 1 ? prev + 1 : prev
    );
  };

  return (
    <div className="bg-dark min-h-screen flex flex-col text-center">
      {exerciseNumber < workout.exercises.length ? (
        <>
          <TrainingStopButton
            programId={programId}
            workoutId={workoutId}
            day={day}
            style={style}
          />
          <ProgressProgram
            length={workout.exercises.length}
            currentStep={exerciseNumber}
          />
          <div className="flex items-center justify-between">
            <TrainingBack
              onClick={handleBack}
              back={exerciseNumber === 0}
              programId={programId}
              workoutId={workoutId}
              day={day}
              style={style}
            />
            <div>
              {currentExercise.duration > 0 ? (
                <TrainingTimer time={currentExercise.duration} />
              ) : (
                <TrainingRepetition repetition={currentExercise.reps} />
              )}
            </div>
            <TrainingForward onClick={handleForward} />
          </div>
          <h2>{currentExercise.exercise.name}</h2>
          <TrainingMoreInformation
            description={currentExercise.exercise.description}
          />
          {/* <TrainingStop /> */}
        </>
      ) : (
        <TrainingFinished />
      )}
    </div>
  );
}

export default TrainingActive;
