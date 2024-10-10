import PropTypes from "prop-types";

function TrainingSkip({ handleForward }) {
  return (
    <div className="mt-4">
      <button
        className="bg-dark text-white font-bold py-2 px-4 rounded-full hover:bg-gray-900 hover:shadow-lg hover:scale-105"
        onClick={handleForward}
      >
        Überspringen
      </button>
    </div>
  );
}

TrainingSkip.propTypes = {
  handleForward: PropTypes.func.isRequired,
};

export default TrainingSkip;
