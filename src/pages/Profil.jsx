import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import ProfilMain from "../components/profil/ProfilMain";
import Navigation from "../components/navigation/Navigation";
import WorkoutPlanProgress from "../components/profil/WorkoutPlanProgress";
import { loadFromSessionStorage } from "../utils/storage";
import { GET_PROGRAM } from "../queries/hygraphQueries";

function Profil() {
  const [progress, setProgress] = useState(0);
  const [savedData, setSavedData] = useState(null);
  const [completedWorkouts, setCompletedWorkouts] = useState(0);
  const [totalWorkouts, setTotalWorkouts] = useState(0);
  const [programTitle, setProgramTitle] = useState("");

  useEffect(() => {
    const data = loadFromSessionStorage("trainingFinishedData");
    if (data) {
      setSavedData(data);
    }
  }, []);

  const programId = savedData?.programId;
  const currentDay = savedData?.day;

  const { loading, error, data } = useQuery(GET_PROGRAM, {
    variables: { id: programId },
    skip: !programId,
  });

  useEffect(() => {
    if (data && data.program && currentDay) {
      const totalDays = data.program.workoutsWithDay.length;
      const completedDays = Math.min(currentDay, totalDays);
      const progressPercentage = (completedDays / totalDays) * 100;

      setTotalWorkouts(totalDays);
      setCompletedWorkouts(completedDays);
      setProgress(progressPercentage);
      setProgramTitle(data.program.name);
    }
  }, [data, currentDay]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="bg-dark min-h-screen">
      <ProfilMain />
      <div className="p-4">
        {savedData && (
          <WorkoutPlanProgress
            progress={progress}
            programTitle={programTitle}
            completedWorkouts={completedWorkouts}
            totalWorkouts={totalWorkouts}
          />
        )}
      </div>

      <Navigation />
    </div>
  );
}

export default Profil;
