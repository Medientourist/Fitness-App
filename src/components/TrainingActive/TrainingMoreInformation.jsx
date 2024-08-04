// import Navigation from "../components/navigation/Navigation";
import PropTypes from "prop-types";

function TrainingMoreInformation( { description } ) {
  return (
    <div className="">
      <div className="bg-medium p-4 rounded-t-3xl flex justify-end">
        <div className="bg-black h-4 w-4 rounded-full"></div>
      </div>
      <div className="bg-medium p-4">
        <h2>Plank</h2>
        <p>
          {description}
        </p>
        <button className="bg-black px-8 py-4 rounded-3xl">ok!</button>
      </div>
    </div>
  );
}

TrainingMoreInformation.propTypes = {
  description: PropTypes.string,
};

export default TrainingMoreInformation;
