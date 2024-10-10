import PropTypes from "prop-types";

function ProgressPoint({ isCompleted, isBreak, style }) {
  return (
    <div
      className={`w-8 h-8 rounded-full inline-block ${
        isCompleted ? `${style}` : "bg-gray-300"
      } ${isBreak ? "border border-yellow-500" : ""}`}
    ></div>
  );
}

ProgressPoint.propTypes = {
  isCompleted: PropTypes.bool.isRequired,
  isBreak: PropTypes.bool.isRequired,
  style: PropTypes.string.isRequired,
};

export default ProgressPoint;
