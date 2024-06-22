import TrainingMoreInformation from "../components/training/TrainingMoreInformation";
import TrainingStart from "../components/training/TrainingStart";
import TrainingFinished from "../components/training/TrainingFinished";
import TrainingStop from "../components/training/TrainingStop";
import ProgressProgram from "../components/progressComponent/ProgressProgram";


/*
query GetPrograms($id: ID!) {
  programs(where: {id: $id}) {
    id
    name
  }
}


Apollo DevTools
React DevTools
*/


function Training() {
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
