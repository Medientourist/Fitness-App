import PropTypes from "prop-types";
import React from "react";
import ProgressBar from "./ProgressBar";

function ProgressProgram({ length, currentStep, style }) {
  currentStep += 1;
  const isBreak = [];
  for (let i = 0; i < length; i += 1) {
    isBreak.push(false);
    if (i < length - 1) {
      isBreak.push(true);
    }
  }

  return (
    <div className="flex overflow-hidden mt-8">
      <ProgressBar isBreak={isBreak} currentStep={currentStep} style={style} />
    </div>
  );
}

ProgressProgram.propTypes = {
  length: PropTypes.number.isRequired,
  currentStep: PropTypes.number.isRequired,
  style: PropTypes.string.isRequired,
};

export default ProgressProgram;
