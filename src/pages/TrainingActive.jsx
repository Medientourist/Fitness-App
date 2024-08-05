import { useLocation } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_WORKOUT } from "../queries/hygraphQueries";
import { useState } from "react";

import TrainingHeader from "../components/TrainingActive/TrainingHeader";
import ProgressProgram from "../components/progressComponent/ProgressProgram";
import TrainingBack from "../components/TrainingActive/TrainingBack";
import TrainingForward from "../components/TrainingActive/TrainingForward";
import TrainingTimer from "../components/TrainingActive/TrainingTimer";
import TrainingRepetition from "../components/TrainingActive/TrainingRepetition";
import TrainingBreak from "../components/TrainingActive/TrainingBreak";
import TrainingMoreInformation from "../components/TrainingActive/TrainingMoreInformation";
import TrainingFinished from "../components/TrainingActive/TrainingFinished";

function TrainingActive() {
  const location = useLocation();
  const [exerciseNumber, setExerciseNumber] = useState(0);
  const [isBreak, setIsBreak] = useState(false);

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
    console.log(exerciseNumber);
    if (isBreak) {
      setIsBreak(false);
    } else {
      setExerciseNumber((prev) => (prev > 0 ? prev - 1 : prev));
      setIsBreak(true);
    }
  };

  const handleForward = () => {
    console.log(exerciseNumber);
    if (exerciseNumber < workout.exercises.length - 1 && isBreak) {
      setIsBreak(false);
      setExerciseNumber((prev) =>
        prev < workout.exercises.length ? prev + 1 : prev
      );
    } else if (exerciseNumber === workout.exercises.length - 1) {
      setIsBreak(false);
      setExerciseNumber((prev) =>
        prev < workout.exercises.length ? prev + 1 : prev
      );
    }
    else {
      setIsBreak(true);
    }
  };

  return (
    <div className="bg-dark min-h-screen flex flex-col text-center">
      {exerciseNumber < workout.exercises.length ? (
        <>
          <TrainingHeader
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
              back={exerciseNumber === 0 && !isBreak}
              programId={programId}
              workoutId={workoutId}
              day={day}
              style={style}
            />
            <div>
              {isBreak ? (
                <TrainingBreak />
              ) : currentExercise.duration > 0 ? (
                <TrainingTimer time={currentExercise.duration} />
              ) : (
                <TrainingRepetition repetition={currentExercise.reps} />
              )}
            </div>
            <TrainingForward
              onClick={handleForward}
              programId={programId}
              workoutId={workoutId}
              day={day}
              style={style}
            />
          </div>
          {!isBreak && (
            <>
              <h2>{currentExercise.exercise.name}</h2>
              <TrainingMoreInformation
                description={currentExercise.exercise.description}
              />
            </>
          )}
        </>
      ) : (
        <TrainingFinished
          programId={programId}
          workoutId={workoutId}
          day={day}
          style={style}
        />
      )}
    </div>
  );
}

export default TrainingActive;
