import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_WORKOUT } from "../queries/hygraphQueries";

import TrainingHeader from "../components/trainingActive/TrainingHeader";
import ProgressProgram from "../components/progressComponent/ProgressProgram";
import TrainingBack from "../components/trainingActive/TrainingBack";
import TrainingForward from "../components/trainingActive/TrainingForward";
import TrainingTimer from "../components/trainingActive/TrainingTimer";
import TrainingRepetition from "../components/trainingActive/TrainingRepetition";
import TrainingMoreInformation from "../components/trainingActive/TrainingMoreInformation";
import TrainingBreak from "../components/trainingActive/TrainingBreak";
import TrainingSkip from "../components/trainingActive/TrainingSkip";
import TrainingFinished from "../components/trainingActive/TrainingFinished";

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

  const currentStep = isBreak ? exerciseNumber * 2 : exerciseNumber * 2 - 1;

  const handleBack = () => {
    if (isBreak) {
      setIsBreak(false);
    } else {
      setExerciseNumber((prev) => (prev > 0 ? prev - 1 : prev));
      setIsBreak(true);
    }
  };

  const handleForward = () => {
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
    } else {
      setIsBreak(true);
    }
  };

  const backgroundColorClass = isBreak ? "bg-medium" : "";
  console.log(backgroundColorClass);
  return (
    <div className={`${backgroundColorClass} min-h-screen text-center`}>
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
            currentStep={currentStep}
            style={style}
          />
          <div className="flex justify-between items-center px-4 mt-4 min-h-[50vh]">
            <TrainingBack
              onClick={handleBack}
              back={exerciseNumber === 0 && !isBreak}
              programId={programId}
              workoutId={workoutId}
              day={day}
              style={style}
            />
            <div className="inline w-1/2 max-w-sm">
              {isBreak && <TrainingBreak style={style} />}
              {!isBreak && currentExercise.duration > 0 && (
                <TrainingTimer time={currentExercise.duration} style={style} />
              )}
              {!isBreak && currentExercise.reps > 0 && (
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
          {isBreak ? (
            <>
              <h2 className="mt-4 ">Pause</h2>
              <TrainingSkip handleForward={handleForward} />
            </>
          ) : null}
          {/* Angleichen */}
          {!isBreak && (
            <>
              <h2>{currentExercise.exercise.name}</h2>
              <TrainingMoreInformation
                name={currentExercise.exercise.name}
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
