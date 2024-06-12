import {
  CreateRandomExerciseButton,
  CreateRandomWorkoutButton,
  CreateRandomProgramButton,
} from "./Generator";
import getEntryList from "../queries/entriesList";
import { LoadingButton } from "../StatusElements/Loading";


export default function CreateEntries() {
  const entriesFetch = getEntryList();

  return (
    <>
      <CreateRandomExerciseButton />
      {entriesFetch.loading ? (
        <LoadingButton />
      ) : entriesFetch.error ? (
        <div className="bg-red700 rounded-md pt-4">ERROR</div>
      ) : (
        <>
          <CreateRandomWorkoutButton
            exerciseList={entriesFetch.data.exercises}
          />
          <CreateRandomProgramButton
            workoutList={entriesFetch.data.workouts}
            assetList={entriesFetch.data.assets}
          />
        </>
      )}
    </>
  );
}