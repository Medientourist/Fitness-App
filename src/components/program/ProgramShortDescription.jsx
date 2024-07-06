import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import close from "../../assets/close.png";

function ProgramShortDescription({
  title,
  focus,
  difficulty,
  duration,
  style,
}) {
  return (
    <div
      className={`${style} h-screen flex flex-col justify-center items-center text-center px-4`}
    >
      <div>
        <h1>{title}</h1>
      </div>
      <Link to="/workout" className="absolute top-4 right-4">
        <img src={close} alt="back" className="w-6 h-6" />
      </Link>
      <div className="absolute bottom-0 w-full">
        <div className="flex justify-around mb-4">
          <div className="text-center">
            <div className="bg-dark rounded-full h-6 w-6 mx-auto"></div>
            <p>{focus}</p>
          </div>
          <div className="text-center">
            <div className="bg-dark rounded-full h-6 w-6 mx-auto"></div>
            <p>{difficulty}</p>
          </div>
          <div className="text-center">
            <div className="bg-dark rounded-full h-6 w-6 mx-auto"></div>
            <p>Wochen {duration}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

ProgramShortDescription.propTypes = {
  programId: PropTypes.string.isRequired,
  title: PropTypes.string,
  focus: PropTypes.string,
  difficulty: PropTypes.string,
  duration: PropTypes.string,
  style: PropTypes.string,
};

export default ProgramShortDescription;
