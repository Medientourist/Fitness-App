import TrainingMoreInformation from "../components/training/TrainingMoreInformation";
import TrainingStart from "../components/training/TrainingStart";
import TrainingFinished from "../components/training/TrainingFinished";

function Training() {
  return (
    <div className="bg-dark pt-4">
      <TrainingStart />
      <TrainingMoreInformation />
      <TrainingFinished />
    </div>
  );
}

export default Training;
