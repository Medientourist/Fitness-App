import ProgressBar from "./ProgressBar";

function ProgressProgram({ length, currentStep }) {
  currentStep = currentStep + 1;
  const isBreak = [];
  for (let i = 0; i < length; i++) {
    isBreak.push(false);
    if (i < length - 1) {
      isBreak.push(true);
    }
  }

  return (
    <div className="p-4">
      <ProgressBar isBreak={isBreak} currentStep={currentStep} />
    </div>
  );
}

export default ProgressProgram;
