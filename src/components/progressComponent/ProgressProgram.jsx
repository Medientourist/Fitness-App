import ProgressBar from "./ProgressBar";

function ProgramProgress({ length, currentStep }) {
  const steps = [];
  for (let i = 0; i < length; i++) {
    steps.push(i + 1);
  }

  return (
    <div className="p-4">
      <h1 className="mb-4">Program Progress</h1>
      <ProgressBar steps={steps} currentStep={currentStep} />
    </div>
  );
}

export default ProgramProgress;
