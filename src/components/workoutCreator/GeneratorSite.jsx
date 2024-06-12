import {
  CreateRandomExerciseButton,
  CreateRandomWorkoutButton,
  CreateRandomProgramButton,
} from "./Generator";
import getEntryList from "../queries/entriesList";
import { LoadingButton } from "../StatusElements/Loading";

export default function CreateEntries() {
  const { data, loading, error } = getEntryList();
  if (data) {
    console.log(data);
  }
  return (
    <>
      <CreateRandomExerciseButton />
      {loading ? (
        <LoadingButton />
      ) : error ? (
        <div className="bg-red700 rounded-md pt-4">ERROR</div>
      ) : (
        <>
          <CreateRandomWorkoutButton exerciseList={data.exercises} />
          <CreateRandomProgramButton
            workoutList={data.workouts}
            assetList={data.assets}
          />
        </>
      )}
    </>
  );
}
