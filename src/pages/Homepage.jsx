import { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import Navigation from "../components/navigation/Navigation";
import startPicture from "../assets/startPicture.png";
import StartToday from "../components/start/StartToday";
import { loadFromSessionStorage } from "../utils/storage";
import { GET_PROGRAM } from "../queries/hygraphQueries";

function Homepage() {
  const [savedData, setSavedData] = useState(null);
  const [profileName, setProfileName] = useState("User");

  useEffect(() => {
    const data = loadFromSessionStorage("trainingFinishedData");
    if (data) {
      setSavedData(data);
    }

    const savedName = loadFromSessionStorage("profileName");
    if (savedName) {
      setProfileName(savedName);
    }
  }, []);

  const programId = savedData?.programId;
  const currentDay = savedData?.day;

  const {
    loading: loadingProgram,
    error: errorProgram,
    data: dataProgram,
  } = useQuery(GET_PROGRAM, {
    variables: { id: programId },
    skip: !programId,
  });

  if (loadingProgram) return <p>Loading...</p>;
  if (errorProgram) return <p>Error: {errorProgram.message}</p>;

  const program = dataProgram?.program;

  const nextWorkoutDay = program?.workoutsWithDay
    ?.filter((wd) => wd.day > currentDay)
    ?.sort((a, b) => a.day - b.day)?.[0]?.day;

  const nextWorkout = program?.workoutsWithDay
    ?.filter((wd) => wd.day === nextWorkoutDay)
    ?.map((wd) => wd.workout)?.[0];

  return (
    <div className="min-h-screen bg-dark pt-4 md:flex md:flex-col md:items-center">
      <h1 className="px-4 pb-4">Welcome {profileName}</h1>

      <div className="flex flex-col justify-center items-center h-[calc(100vh-10rem)] space-y-4 w-full">
        <img
          className="px-4 m-auto max-w-full h-auto max-h-[35vh]"
          src={startPicture}
          alt="Start"
        />

        {nextWorkout && savedData && (
          <StartToday
            programId={program.id}
            workout={nextWorkout}
            day={nextWorkoutDay}
            style={savedData.style}
          />
        )}
      </div>
      <Navigation />
    </div>
  );
}

export default Homepage;
