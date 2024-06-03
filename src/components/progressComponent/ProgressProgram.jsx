import ProgressBar from "./ProgressBar";

function ProgramProgress() {
  const steps = [1, 2, 3, 4, 5];
  const currentStep = 1;

  return (
    <div className="p-4">
      <h1 className="mb-4">Program Progress</h1>
      <ProgressBar steps={steps} currentStep={currentStep} />
    </div>
  );
}

export default ProgramProgress;
