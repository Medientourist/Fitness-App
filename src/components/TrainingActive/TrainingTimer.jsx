import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function TrainingTimer() {
  const [timeLeft, setTimeLeft] = useState(90); // 1,5 Minuten = 90 Sekunden
  const totalTime = 90; // Gesamtzeit in Sekunden

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer); // Cleanup the interval on component unmount
    }
  }, [timeLeft]);

  const percentage = ((totalTime - timeLeft) / totalTime) * 100;
  const seconds = Math.floor(timeLeft);

  return (
    <>
      <CircularProgressbar
        value={percentage}
        text={`${seconds} seconds`}
        styles={buildStyles({
          rotation: 0,
          strokeLinecap: "butt",
          textSize: "0.75rem",
          pathTransitionDuration: 10,
          pathColor: `rgba(255, 165, 199)`,
          textColor: "#f88",
          fontWeight: "extrabold",
          trailColor: "#d6d6d6",
          backgroundColor: "#3e98c7",
        })}
      />
    </>
  );
}

export default TrainingTimer;
