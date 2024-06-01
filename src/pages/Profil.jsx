import ProfilMain from "../components/profil/profilMain";
import Navigation from "../components/navigation/Navigation";
import WorkoutPlanProgress from "../components/profil/workoutPlanProgress";

function Profil() {
  return (
    <div className="min-h-screen bg-dark pt-4">
      <ProfilMain />
      <WorkoutPlanProgress />
      <Navigation />
    </div>
  );
}

export default Profil;
