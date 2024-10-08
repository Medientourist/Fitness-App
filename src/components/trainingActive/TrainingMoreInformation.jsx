import PropTypes from "prop-types";
import { useState } from "react";

function TrainingMoreInformation({ name, description }) {
  const [isInfoVisible, setInfoVisible] = useState(false);

  const handleCircleClick = () => {
    setInfoVisible(!isInfoVisible);
  };

  const handleCloseInformation = () => {
    setInfoVisible(false);
  };

  return (
    <div className="fixed bottom-0 w-full">
      {!isInfoVisible && (
        <div className="bg-medium p-4 rounded-t-3xl flex justify-end">
          <div
            className="bg-black h-6 w-6 rounded-full flex items-center justify-center text-white text-xs cursor-pointer hover:bg-gray-900 hover:shadow-lg hover:scale-105"
            onClick={handleCircleClick}
          >
            <span className="text-white text-base">i</span>
          </div>
        </div>
      )}

      {isInfoVisible && (
        <div className="bg-medium p-8 py-16 rounded-t-3xl text-start">
          <h2>{name}</h2>
          <p>{description}</p>
          <div className="mt-8 text-center">
            <button
              className="bg-black px-8 py-4 rounded-full text-white transition-all duration-300 ease-in-out hover:bg-gray-900 hover:shadow-lg hover:scale-105"
              onClick={handleCloseInformation}
            >
              ok!
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

TrainingMoreInformation.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default TrainingMoreInformation;
