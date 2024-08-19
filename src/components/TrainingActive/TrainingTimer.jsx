import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

function TrainingTimer({ time }) {
  const [timeLeft, setTimeLeft] = useState(time * 1000);
  const totalTime = time * 1000;

  useEffect(() => {
    setTimeLeft(time * 1000); // Reset timeLeft whenever time prop changes
  }, [time]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => Math.max(prevTime - 10, 0));
      }, 10);

      return () => clearInterval(timer);
    }
  }, [timeLeft]);

  const percentage = ((totalTime - timeLeft) / totalTime) * 100;
  const seconds = (timeLeft / 1000).toFixed(0);

  return (
    <div className="inline w-2/4">
      <CircularProgressbar
        value={percentage}
        text={`${seconds} seconds`}
        styles={buildStyles({
          rotation: 0,
          strokeLinecap: "butt",
          textSize: "0.75rem",
          pathTransitionDuration: 0.1,
          pathColor: `rgba(255, 165, 199)`,
          textColor: "#f88",
          fontWeight: "extrabold",
          trailColor: "#d6d6d6",
          backgroundColor: "#3e98c7",
        })}
      />
    </div>
  );
}

export default TrainingTimer;
