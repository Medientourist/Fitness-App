import PropTypes from "prop-types";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import TrainingStop from "./TrainingStop";
import { GET_WORKOUT } from "../../queries/hygraphQueries";
import Close from "../../assets/close.png";

function TrainingHeader({ programId, workoutId, day, style }) {
  const [isClicked, setIsClicked] = useState(false);
  const { loading, error, data } = useQuery(GET_WORKOUT, {
    variables: { id: workoutId },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const { workout } = data;

  const handleClick = () => {
    setIsClicked(true);
  };

  const handleClose = () => {
    setIsClicked(false);
  };

  return (
    <div className="text-center relative pt-4 mb-4">
      <div className="flex items-center justify-center">
        <p className="text-white">{workout.name}</p>
        <img
          src={Close}
          alt="stop"
          className="cursor-pointer absolute right-4"
          onClick={handleClick}
        />
      </div>
      {isClicked && (
        <>
          <div className="fixed flex items-center justify-center inset-0 bg-black bg-opacity-50 z-10 p-4">
            <TrainingStop
              programId={programId}
              workoutId={workoutId}
              day={day}
              style={style}
              onClose={handleClose}
            />
          </div>
        </>
      )}
    </div>
  );
}

TrainingHeader.propTypes = {
  programId: PropTypes.string.isRequired,
  workoutId: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
};

export default TrainingHeader;
