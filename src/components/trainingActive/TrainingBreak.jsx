import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function TrainingBreak({ style }) {
  const [timeLeft, setTimeLeft] = useState(30 * 1000);
  const totalTime = 30 * 1000;

  useEffect(() => {
    setTimeLeft(30 * 1000);
  }, []);

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

  const colorSchemes = {
    "orange-to-peach-tl-br": {
      startColor: "#FFD162",
      endColor: "#FF99C3",
    },
    "cyan-to-yellow-tl-br": {
      startColor: "#3EF3E8",
      endColor: "#F5FFA0",
    },
    "cyan-to-blue-tl-br": {
      startColor: "#3EF3E8",
      endColor: "#3A4AE4",
    },
  };

  const colorSchemeKey = style.replace("bg-", "");
  const { startColor, endColor } =
    colorSchemes[colorSchemeKey] || colorSchemes["orange-to-peach-tl-br"];

  return (
    <>
      <div className="">
        <CircularProgressbar
          value={percentage}
          text={`${seconds} s`}
          styles={buildStyles({
            rotation: 0,
            strokeLinecap: "butt",
            textSize: "1rem",
            pathTransitionDuration: 0.1,
            pathColor: `url(#gradient)`,
            textColor: "#f88",
            fontWeight: "extrabold",
            trailColor: "#d6d6d6",
            backgroundColor: "#3e98c7",
          })}
        />
        <svg style={{ height: 0 }}>
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop
                offset="0%"
                style={{ stopColor: startColor, stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: endColor, stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
}

TrainingBreak.propTypes = {
  style: PropTypes.string.isRequired,
};

export default TrainingBreak;
