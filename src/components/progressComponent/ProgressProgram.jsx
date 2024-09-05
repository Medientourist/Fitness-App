import React, { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";

const pointSize = 8;
const spaceBetweenPoints = 20;

function ProgressProgram({ length, currentStep }) {
  // const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setScreenWidth(window.innerWidth);
  //   };
  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);
  
  // const MidScreen = screenWidth / 2;
  // console.log(MidScreen);
  // const calculatedPaddingLeft =
  //   MidScreen - (pointSize / 2 + currentStep * spaceBetweenPoints);
  // console.log(calculatedPaddingLeft);
  // const paddingLeft = `${calculatedPaddingLeft}px`;
  // console.log(paddingLeft);

  currentStep = currentStep + 1;
  const isBreak = [];
  for (let i = 0; i < length; i++) {
    isBreak.push(false);
    if (i < length - 1) {
      isBreak.push(true);
    }
  }

  return (
    <div className="flex overflow-x-hidden w-full">
      {/* style={paddingLeft} */}
      <ProgressBar isBreak={isBreak} currentStep={currentStep} />
    </div>
  );
}

export default ProgressProgram;
