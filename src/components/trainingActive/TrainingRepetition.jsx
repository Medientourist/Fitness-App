import PropTypes from "prop-types";

function TrainingRepetition({ repetition }) {
  return (
    <div className="">
      <p className="text-5xl">{repetition}x</p>
    </div>
  );
}

TrainingRepetition.propTypes = {
  repetition: PropTypes.number.isRequired,
};

export default TrainingRepetition;
