import PropTypes from "prop-types";
import React, { useEffect } from "react";
import ProgressPoint from "./ProgressPoint";

function ProgressBar({ isBreak, currentStep, style }) {
  const rightDifferenceCalc = 1 + currentStep * 7;
  const rightDifference = `${rightDifferenceCalc}rem`;

  return (
    <div
      className="flex items-center relative"
      style={{ paddingLeft: "calc(50%)", right: rightDifference }}
    >
      {isBreak.map((breakStatus, index) => (
        <React.Fragment key={index}>
          <ProgressPoint
            isCompleted={index <= currentStep}
            isBreak={breakStatus}
            style={style}
          />
          {index < isBreak.length - 1 && (
            <div className="border-dashed inline-block w-16 border-t-2 border-gray-300 mx-2"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

ProgressBar.propTypes = {
  isBreak: PropTypes.arrayOf(PropTypes.bool).isRequired,
  currentStep: PropTypes.number.isRequired,
  style: PropTypes.string.isRequired,
};

export default ProgressBar;
