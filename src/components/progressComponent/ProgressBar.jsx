import React from 'react';
import ProgressPoint from './ProgressPoint';

function ProgressBar({ steps, currentStep }) {
  return (
    <div className="flex items-center">
      {steps.map((_, index) => (
        <React.Fragment key={index}>
          <ProgressPoint isCompleted={index < currentStep} />
          {index < steps.length - 1 && (
            <div className="flex-grow h-px border-dashed border-t-2 border-gray-300 mx-2"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default ProgressBar;
