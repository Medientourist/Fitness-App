import React, { useEffect } from "react";
import ProgressPoint from "./ProgressPoint";

function ProgressBar({ isBreak, currentStep }) {
  return (
    <div className="flex items-center relative">
      {isBreak.map((breakStatus, index) => (
        <React.Fragment key={index}>
          <ProgressPoint
            isCompleted={index <= currentStep}
            isBreak={breakStatus}
          />
          {index < isBreak.length - 1 && (
            <div className="border-dashed inline-block w-16 border-t-2 border-gray-300 mx-2"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

export default ProgressBar;

//       <div className="flex justify-center w-full absolute left-1/2 transform -translate-x-1/2">
//         {isBreak.map((breakStatus, index) => (
//           <React.Fragment key={index}>
//             <ProgressPoint
//               isCompleted={index <= currentStep}
//               isBreak={breakStatus}
//             />
//             {index < isBreak.length - 1 && (
//               <div className="flex-grow h-px border-dashed border-t-2 border-gray-300 mx-16"></div>
//             )}
//           </React.Fragment>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProgressBar;
