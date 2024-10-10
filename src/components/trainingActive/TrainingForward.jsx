import PropTypes from "prop-types";
import Skip from "../../assets/skip.png";
import TrainingFinished from "./TrainingFinished";

export default function TrainingForward({ onClick, end }) {
  return (
    <>
      {end ? (
        <TrainingFinished />
      ) : (
        <div className="inline w-1/4 min-w-5">
          <button className="" onClick={onClick}>
            <img
              src={Skip}
              alt="arrow-left"
              className="w-4 h-10 transition-transform duration-300 ease-in-out hover:scale-125 hover:shadow-lg"
            />
          </button>
        </div>
      )}
    </>
  );
}

TrainingForward.propTypes = {
  onClick: PropTypes.func.isRequired,
  end: PropTypes.bool,
};
